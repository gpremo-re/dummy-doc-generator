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
const ext = process.env['DOC_EXTENSION'] || 'txt';
const isDocker = process.env['DOCKER'] === 'true';

let baseFolder = 'docs'
let folderName = '';
let folderPath = '';

if (!isDocker && !existsSync(baseFolder)) {
    mkdirSync(baseFolder);
}

if (useGuidFolder) {
    folderName = `${Guid.create().toString()}`;
    folderPath = `${baseFolder}/${folderPath}`;
} else {
    folderName = 'generated';
    folderPath = `${baseFolder}/${folderPath}`;
    if (existsSync(folderPath)) {
        // @ts-ignore
        rmdirSync(folderPath, { recursive: true, force: true });
    }
}

mkdirSync(folderPath);

const loremIpsum = new LoremIpsum({
    sentencesPerParagraph: { max: sentences, min: sentences },
    wordsPerSentence: { max: words, min: words }
});

console.log(`Generating ${ docCount } documents...`);
for (let i = 0; i < docCount; i++) {
    let fileName: string;
    if (useGuidDocNames) {
        fileName = `${folderPath}/${docPrefix}${Guid.create().toString()}.${ext}`;
    } else {
        fileName = `${folderPath}/${docPrefix}${i + 1}.${ext}`;
    }

    writeFileSync(fileName, loremIpsum.generateParagraphs(paragraphs));
}
console.log(`Done!\n${ docCount } documents created in ${ folderName }`);
