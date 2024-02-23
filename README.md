# Dummy Doc Generator
Generates bulk numbers of [lorem-ipsum](https://www.lipsum.com/) documents

Can configure number of docs, number of words, number of sentences, number of paragraphs.

Can spit out docs with GUIDS or numbered

## Usage:

```
docker compose run --rm --build main
```

Documents will be outputted in the `docs` in the project root.

## Configuring Output

Copy and past `.env.template`

Change values as desired

Run the above command

## OPTIONS

| Name  | Description                                                                                            |
|-------|--------------------------------------------------------------------------------------------------------|
| DOC_COUNT | The total number of documents to generate                                                              |
| SENTENTCE_PER_PARAGRAPH | Number of sentences in each paragraph                                                                  |
| WORDS_PER_SENTENCE | Number of words in each sentence                                                                       |
| PARAGRAPHS | Number of paragraphs in the document                                                                   |
| USE_GUID_FOLDER | True: use a guid name for the folder containing generated docs                                         |
| USE_GUID_DOC_NAMES | True: use a guid for each doc name<br/> False: use a fixed name and indexed number (index starts at 1) |
| DOC_PREFIX | The prefix of each document name (applies to guid and non guid docs)                                   |
