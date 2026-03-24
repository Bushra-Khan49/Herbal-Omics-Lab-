import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
    try {
        const manifestPath = join(process.cwd(), 'data', 'team-images.json');
        const data = await readFile(manifestPath, 'utf-8');
        return NextResponse.json(JSON.parse(data));
    } catch {
        return NextResponse.json({});
    }
}
