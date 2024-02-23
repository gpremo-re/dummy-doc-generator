import { createWriteStream } from 'fs';
import { getDocName } from '../util/get-doc-name';
import { getEnvironment } from '../util/get-environment';
import PDFDocument from 'pdfkit';

export const generatePdfFiles = async (folderPath: string, generateText: () => string) => {
    const env = getEnvironment();

    const promises: Promise<void>[] = [];

    for (let i = 0; i < env.docCount; i++) {
        const doc = new PDFDocument();

        doc.text(generateText(), { paragraphGap: 10 });

        const documentName = getDocName(env.useGuidDocNames || i, env.ext, env.docPrefix);

        const writeStream = createWriteStream(`${folderPath}/${documentName}`);

        // wait for writeStream to finish, doc.end() is not synchronous
        promises.push(
            new Promise<void>((resolve, reject) => {
                writeStream.on('finish', () => resolve());
            })
        );

        doc.pipe(writeStream);
        doc.end();
    }

    await Promise.all(promises);
};
