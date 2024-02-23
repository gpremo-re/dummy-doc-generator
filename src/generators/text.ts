import { writeFileSync } from 'fs';
import { getDocName } from '../util/get-doc-name';
import { getEnvironment } from '../util/get-environment';

export const generateTextFiles = (folderPath: string, generateText: () => string) => {
    const env = getEnvironment();

    for (let i = 0; i < env.docCount; i++) {
        const documentName = getDocName(env.useGuidDocNames || i, env.ext, env.docPrefix);
        writeFileSync(`${folderPath}/${documentName}`, generateText());
    }
};
