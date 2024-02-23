import { generateTextFiles } from './generators/text';

export const generate = (folderPath: string, fileExtension = 'txt') => {
    switch (fileExtension) {
        default:
            return generateTextFiles(folderPath);
    }
}
