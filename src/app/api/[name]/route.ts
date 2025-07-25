// app/api/[name]/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

// Runs in the Node.js runtime (not edge)
export const runtime = 'nodejs';

export async function GET(
    req: Request,
    context :any
) {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get('lang') || 'en';
    const { name } = await context.params

    const filePath = path.join(process.cwd(), 'data', name, `${locale}.json`);

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return NextResponse.json(JSON.parse(data));
    } catch (e) {
        return NextResponse.json({ error: 'Translation not found' }, { status: 404 });
    }
}
