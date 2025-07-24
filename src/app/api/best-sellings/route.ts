import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get('lang') || 'en';

    const filePath = path.join(process.cwd(), 'data', 'best-sellings' , `${locale}.json`);

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return NextResponse.json(JSON.parse(data));
    } catch (e) {
        return NextResponse.json({ error: 'Translation not found' }, { status: 404 });
    }
}