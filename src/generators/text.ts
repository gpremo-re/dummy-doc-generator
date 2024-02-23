import { writeFileSync } from 'fs';
import { Guid } from 'guid-typescript';
import { LoremIpsum } from 'lorem-ipsum';
import { getEnvironment } from '../util/get-environment';

export const generateTextFiles = (folderPath: string) => {
    const env = getEnvironment();

    const loremIpsum = new LoremIpsum({
        sentencesPerParagraph: { max: env.sentences, min: env.sentences },
        wordsPerSentence: { max: env.words, min: env.words }
    });

    if (process.env['BACON']) {
        console.log('Bacon mode activated! Results will be less consistent');
    }

    for (let i = 0; i < env.docCount; i++) {
        let fileName: string;
        if (env.useGuidDocNames) {
            fileName = `${folderPath}/${env.docPrefix}${Guid.create().toString()}.txt`;
        } else {
            fileName = `${folderPath}/${env.docPrefix}${i + 1}.txt`;
        }

        writeFileSync(fileName, generateText(loremIpsum, env));
    }
};

const generateText = (loremIpsum: LoremIpsum, env) => {
    if (process.env['BACON']) return require('baconipsum')(env.words * env.sentences * env.paragraphs);
    return loremIpsum.generateParagraphs(env.paragraphs);
};
