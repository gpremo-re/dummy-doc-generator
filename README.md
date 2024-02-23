# Dummy Doc Generator
Generates bulk numbers of [lorem-ipsum](https://www.lipsum.com/) documents

Can configure number of docs, number of words, number of sentences, number of paragraphs.

Can spit out docs with GUIDS or numbered

## Usage (Docker CLI):

```
docker run --rm -d garretpremo/lorem-ipsum-document-generator
```

Documents will be outputted in the `docs` folder in the project root.

## Running with custom environment variables
(NOTE the below are all DEFAULT parameters. Configure them however you like.)

```
docker run --rm -d \
    --name=lorem-ipsum-document-generator \
    -e DOC_COUNT=100 \
    -e SENTENTCE_PER_PARAGRAPH=5 \
    -e WORDS_PER_SENTENCE=20 \
    -e PARAGRAPHS=10 \
    -e USE_GUID_FOLDER=true \
    -e USE_GUID_DOC_NAMES=true \
    -e DOC_PREFIX=generated-doc- \
    garretpremo/lorem-ipsum-document-generator
```

## Environment options

| Name  | Description                                                                                            |
|-------|--------------------------------------------------------------------------------------------------------|
| DOC_COUNT | The total number of documents to generate                                                              |
| SENTENTCE_PER_PARAGRAPH | Number of sentences in each paragraph                                                                  |
| WORDS_PER_SENTENCE | Number of words in each sentence                                                                       |
| PARAGRAPHS | Number of paragraphs in the document                                                                   |
| USE_GUID_FOLDER | True: use a guid name for the folder containing generated docs                                         |
| USE_GUID_DOC_NAMES | True: use a guid for each doc name<br/> False: use a fixed name and indexed number (index starts at 1) |
| DOC_PREFIX | The prefix of each document name (applies to guid and non guid docs)                                   |


## Using from the [repository](https://github.com/gpremo-re/dummy-doc-generator/tree/main):

```
docker compose run --rm --build main
```

## Configuring Output

Modify the `.env` file

Change values as desired

Run the above command


### Running with node (if ur a scrub and don't have docker)

```
git clone https://github.com/gpremo-re/dummy-doc-generator.git
cd dummy-doc-generator
npm install
npm run start
```

Modify the `.env` file to change results
