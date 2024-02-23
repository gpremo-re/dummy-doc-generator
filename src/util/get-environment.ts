export const getEnvironment = () => {
    return {
        docCount: +process.env['DOC_COUNT'],
        sentences: +process.env['SENTENTCE_PER_PARAGRAPH'],
        words: +process.env['WORDS_PER_SENTENCE'],
        paragraphs: +process.env['PARAGRAPHS'],
        docPrefix: process.env['DOC_PREFIX'],
        ext: process.env['DOC_EXTENSION'] || 'txt',
        useGuidFolder: process.env['USE_GUID_FOLDER'] === 'true',
        useGuidDocNames: process.env['USE_GUID_DOC_NAMES'],
        isDocker: process.env['DOCKER'] === 'true',
    }
};
