// mockData.ts
// Exact text extracted from Figma Prototype

export const researchData = [
    {
        id: 'herbal-genomics',
        title: 'Herbal Genomics',
        shortDesc: 'Decoding the genetic blueprint of medicinal and horticultural plants.',
        longDesc: 'Our herbal genomics research focuses on sequencing, assembling, and annotating the complex genomes of traditional medicinal plants to identify key biosynthetic pathways responsible for therapeutic compounds.',
        image: '/herbal-genomics-new.jpg'
    },
    {
        id: 'omics-integration',
        title: 'Omics Integration',
        shortDesc: 'Integrative transcriptomics, proteomics, and metabolomics for systems-level understanding.',
        longDesc: 'By combining multiple omics layers, we aim to map the entire molecular landscape of plants, from gene expression to the final production of bioactive metabolites under various environmental conditions.',
        image: '/omics-integration-new.jpg'
    },
    {
        id: 'protein-structure',
        title: 'Protein Structure & Function',
        shortDesc: 'Protein modelling and functional analysis of molecular mechanisms involved in plant development and stress responses.',
        longDesc: 'We utilize advanced computational modeling and structural biology techniques to understand how specific proteins fold and function at the molecular level, particularly those involved in defensive stress pathways.',
        image: '/protein-structure-new.png'
    },
    {
        id: 'systems-biology',
        title: 'Systems Biology',
        shortDesc: 'Network-level analysis of regulatory pathways governing plant growth, development and adaptation.',
        longDesc: 'Our systems biology approach constructs massive interaction networks to reveal how different genes and metabolites regulate plant adaptation strategies in real-time.',
        image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600' // Network/Leaf visual
    },
    {
        id: 'computational-analysis',
        title: 'Computational Analysis',
        shortDesc: 'NGS data analysis, big-data biology, and computational modelling for plant omics research.',
        longDesc: 'Leveraging high-performance computing to handle Next-Generation Sequencing (NGS) data, creating scalable pipelines and algorithms for bioinformatic analysis.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600' // Code/Computing visual
    }
];

export const facilitiesData = [
    {
        id: 'smart-greenhouse',
        title: 'Smart Greenhouse System',
        description: 'Controlled-environment chambers enabling precise regulation of temperature, humidity, light, and soil parameters for plant physiology and stress-response studies.',
        stats: [
            { label: 'AVERAGE TEMPERATURE', value: '24°C' },
            { label: 'RELATIVE HUMIDITY', value: '65%' }
        ],
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=600' // High-tech greenhouse/growth chamber visual
    },
    {
        id: 'in-vitro-culture',
        title: 'In-Vitro Culture & Laminar Systems',
        description: 'Sterile tissue culture facilities equipped with laminar airflow systems for aseptic plant propagation, micropropagation, and controlled experimental studies.',
        stats: [
            { label: 'Active Cultures', value: '156 lines' }
        ],
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600' // Flask/In-vitro visual
    }
];

export const sessionsData = [
    {
        id: 'mentha-stress',
        title: 'Silicon-mediated stress tolerance in Mentha species',
        presenter: 'Priya Sharma',
        time: '11:00 AM IST',
        date: '2026-02-05T11:00:00+05:30'
    },
    {
        id: 'drought-pathways',
        title: 'Transcriptomic analysis of drought response pathways',
        presenter: 'Gautami Gajdeyo',
        time: '1:30 PM IST',
        date: '2026-02-05T13:30:00+05:30'
    },
    {
        id: 'metabolomics-pipeline',
        title: 'High-throughput annotation of secondary metabolites',
        presenter: 'Seema Jaiswal',
        time: '3:00 PM IST',
        date: '2026-02-05T15:00:00+05:30'
    },
    {
        id: 'crispr-editing',
        title: 'Targeted genome editing strategies in medicinal herbs',
        presenter: 'Matilda',
        time: '4:30 PM IST',
        date: '2026-02-05T16:30:00+05:30'
    }
];

export const goalsData = [
    {
        id: 'mentha-genome',
        title: 'Complete Mentha genome assembly',
        description: 'Finalizing the long-read sequencing and chromosome-scale assembly of Mentha species to uncover essential oil biosynthesis genes.',
        progress: 75,
        target: 'March 2026',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'silicon-network',
        title: 'Establish silicon response network',
        description: 'Mapping the transcriptomic and metabolomic changes in medicinal plants under silicon-mediated stress alleviation.',
        progress: 60,
        target: 'June 2026',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'metabolomics-pipeline',
        title: 'Publish metabolomics pipeline',
        description: 'Deploying an open-source computational pipeline for high-throughput untargeted plant metabolomics analysis.',
        progress: 40,
        target: 'August 2026',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800'
    }
];

export const teamData = {
    pi: {
        name: 'Dr. Abinaya Manivannan',
        role: 'Assistant Professor',
        affiliation: 'HerbalOMICS and Bio-Innovation Laboratory, School of Computational and Integrative Sciences, Jawaharlal Nehru University, New Delhi.',
        email: 'abinaya@mail.jnu.ac.in',
        altEmail: 'abinayamanivannan@gmail.com',
        location: 'Room No. 38, SCIS, JNU',
        quote: '"Science is not just about discovery—it is about understanding the questions worth asking. In our laboratory, medicinal plants are explored as dynamic biological systems shaped by molecular regulation, environment, and evolutionary processes."',
        featuredPublication: '"Mentha arvensis and Mentha x piperita – Vital Herbs with Myriads of Pharmaceutical Benefits" (Horticulturae, 2023 | IF: 3.1)',
        publications: [
            {
                id: '1',
                title: 'Mentha arvensis and Mentha x piperita – Vital Herbs with Myriads of Pharmaceutical Benefits',
                link: 'https://doi.org/10.3390/horticulturae9020283'
            }
        ]
    },
    phdScholars: ['Gautami Gajdeyo', 'Seema Jaiswal', 'Matilda', 'Raja'],
    researchAssociates: ['Shivani', 'Shraddha'],
    interns: ['Bushra', 'Shreerag', 'Obyed']
};
