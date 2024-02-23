import { existsSync, mkdirSync, rmdirSync } from "fs";
import { Guid } from "guid-typescript";
import { generate } from './generate';
import { getEnvironment } from './util/get-environment';

export const main = async (baseFolder = 'docs') => {
    const env = getEnvironment();

    let folderName = '';
    let folderPath = '';

    if (!existsSync(baseFolder)) {
        mkdirSync(baseFolder);
    }

    if (env.useGuidFolder) {
        folderName = Guid.create().toString();
        folderPath = `${baseFolder}/${folderName}`;
    } else {
        folderName = 'generated';
        folderPath = `${baseFolder}/${folderName}`;
        if (existsSync(folderPath)) {
            // @ts-ignore
            rmdirSync(folderPath, { recursive: true, force: true });
        }
    }

    mkdirSync(folderPath);

    console.log(`Generating ${ env.docCount } ${ env.ext } documents...`);
    await generate(folderPath, env.ext);
    console.log(`Done!\n${ env.docCount } documents created in ${ folderName }`);
};

main();
