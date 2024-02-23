import { LoremIpsum } from "lorem-ipsum";
import { Guid } from "guid-typescript";
import { writeFileSync, rmdirSync, mkdirSync, existsSync } from "fs";

const docCount = +process.env['DOC_COUNT'];
const sentences = +process.env['SENTENTCE_PER_PARAGRAPH'];
const words = +process.env['WORDS_PER_SENTENCE'];
const paragraphs = +process.env['PARAGRAPHS'];
const useGuidFolder = JSON.parse(process.env['USE_GUID_FOLDER']) as boolean;
const useGuidDocNames = JSON.parse(process.env['USE_GUID_DOC_NAMES']) as boolean;
const docPrefix = process.env['DOC_PREFIX'];

let folderName = 'docs';

if (useGuidFolder) {
    folderName += `/${Guid.create().toString()}`;
} else {
    folderName += '/generated';
    if (existsSync(folderName)) {
        // @ts-ignore
        rmdirSync(folderName, { recursive: true, force: true });
    }
}

mkdirSync(folderName);

const loremIpsum = new LoremIpsum({
    sentencesPerParagraph: { max: sentences, min: sentences },
    wordsPerSentence: { max: words, min: words }
});

for (let i = 0; i < docCount; i++) {
    let fileName: string;
    if (useGuidDocNames) {
        fileName = `${folderName}/${docPrefix}${Guid.create().toString()}`;
    } else {
        fileName = `${folderName}/${docPrefix}${i + 1}`;
    }

    writeFileSync(fileName, loremIpsum.generateParagraphs(paragraphs));
}
