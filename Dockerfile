FROM oven/bun:1
WORKDIR /dummy_doc_generator
ADD package.json .
RUN bun install
ADD main.ts .
CMD [ "bun", "main.ts" ]
