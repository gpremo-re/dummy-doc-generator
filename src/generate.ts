import { LoremIpsum } from 'lorem-ipsum';
import { generatePdfFiles } from './generators/pdf';
import { generateTextFiles } from './generators/text';
import { getEnvironment } from './util/get-environment';

export const generate = async (folderPath: string, fileExtension = 'txt') => {

    const env = getEnvironment();

    if (process.env['BACON']) {
        console.log('Bacon mode activated! Results will be less consistent');
    }

    const loremIpsum = new LoremIpsum({
        sentencesPerParagraph: { max: env.sentences, min: env.sentences },
        wordsPerSentence: { max: env.words, min: env.words }
    });

    const generateText = () => {
        if (process.env['BACON']) return require('baconipsum')(env.words * env.sentences * env.paragraphs);
        return loremIpsum.generateParagraphs(env.paragraphs);
    };

    switch (fileExtension) {
        case 'pdf':
            await generatePdfFiles(folderPath, generateText);
            break;
        default:
            return generateTextFiles(folderPath, generateText);
    }
}
