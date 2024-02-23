FROM oven/bun:1
WORKDIR /dummy_doc_generator
ADD bun-package.json package.json
RUN bun install
COPY src ./src

ENV DOC_COUNT=100 SENTENTCE_PER_PARAGRAPH=5 WORDS_PER_SENTENCE=20 PARAGRAPHS=10 USE_GUID_FOLDER=true USE_GUID_DOC_NAMES=true DOC_PREFIX=generated-doc- DOC_EXTENSION=txt DOCKER=true

CMD [ "bun", "src/main.ts" ]
