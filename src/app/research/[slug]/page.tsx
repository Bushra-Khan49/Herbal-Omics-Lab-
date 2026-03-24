import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { researchData } from '@/data/mockData';

// Generate static params for all known research areas at build time
export function generateStaticParams() {
    return researchData.map((item) => ({
        slug: item.id,
    }));
}

export default function ResearchDetailPage({ params }: { params: { slug: string } }) {
    const researchItem = researchData.find((item) => item.id === params.slug);

    if (!researchItem) {
        notFound();
    }

    return (
        <main>
            <Navigation />

            <article className="section" style={{ paddingTop: '10rem', minHeight: '80vh', backgroundColor: 'var(--color-bg-white)' }}>
                <div className="container">
                    <Link href="/#research" className="btn btn-outline" style={{ display: 'inline-flex', marginBottom: '3rem', padding: '0.5rem 1rem' }}>
                        &larr; Back to Research
                    </Link>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                        {/* Left Content */}
                        <div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text-main)', fontWeight: 800, lineHeight: 1.1 }}>
                                {researchItem.title}
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '2rem', fontWeight: 600, lineHeight: 1.5 }}>
                                {researchItem.shortDesc}
                            </p>
                            <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg-light)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0 8px 8px 0', marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Overview</h3>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                                    {researchItem.longDesc}
                                </p>
                            </div>
                        </div>

                        {/* Right Media */}
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
                            <Image
                                src={researchItem.image}
                                alt={researchItem.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
