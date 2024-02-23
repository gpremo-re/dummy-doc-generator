import { existsSync, mkdirSync, readdirSync, rmSync } from 'fs';
import { Guid } from 'guid-typescript';
import path from 'node:path';
import { main } from '../src/main';

process.env.DOC_EXTENSION = 'pdf';

describe('pdf', () => {

    const DIR_BASE = path.resolve(__dirname, 'test_pdf');

    beforeAll(() => {
        mkdirSync(DIR_BASE);
    });

    afterAll(() => {
        // @ts-ignore
        rmSync(DIR_BASE, { recursive: true });
    });

    it('works', async () => {
        const DIR_ID = Guid.create().toString();
        const DIR = path.resolve(DIR_BASE, `data${DIR_ID}`);

        await main(DIR);

        expect(existsSync(`${DIR}`)).toEqual(true);

        const createdDirectories = readdirSync(DIR);
        expect(createdDirectories).toHaveLength(1);

        const createdDir = path.resolve(`${DIR}/${createdDirectories[0]}`);
        const createdFiles = readdirSync(createdDir);

        expect(createdFiles).toHaveLength(+process.env.DOC_COUNT);
        expect(createdFiles.every(file => file.endsWith('.pdf'))).toEqual(true);
    });
});
