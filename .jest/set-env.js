process.env.DOC_COUNT = 2;
process.env.SENTENTCE_PER_PARAGRAPH = 5;
process.env.WORDS_PER_SENTENCE = 20;
process.env.PARAGRAPHS = 10;
process.env.USE_GUID_FOLDER = true;
process.env.USE_GUID_DOC_NAMES = true;
process.env.DOC_PREFIX = 'generated-doc-';
process.env.DOC_EXTENSION = 'txt';

global.console = {
    ...console,
    log: jest.fn()
};
