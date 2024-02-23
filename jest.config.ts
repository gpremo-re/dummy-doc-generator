import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: [ '<rootDir>/.jest/set-env.js' ]
};
export default config;
