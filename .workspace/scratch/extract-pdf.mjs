import { readFileSync, writeFileSync } from 'node:fs';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const path = process.argv[2];
const data = new Uint8Array(readFileSync(path));
const doc = await pdfjs.getDocument({ data, useSystemFonts: true }).promise;
console.error('numPages:', doc.numPages);

let out = '';
for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const content = await page.getTextContent();
  const text = content.items.map((it) => it.str).join(' ');
  out += `\n\n===== PAGE ${i} =====\n${text}`;
}
writeFileSync(process.argv[3] || 'out.txt', out, 'utf-8');
console.error('done');
