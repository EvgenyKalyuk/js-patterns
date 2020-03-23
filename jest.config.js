const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    verbose: true,
    rootDir: 'src',
    moduleFileExtensions: ['js', 'ts'],
    transform: {
        ...tsjPreset.transform
    },
    testRegex: '(\\.|/)(test|spec)\\.ts$',
    preset: 'ts-jest'
};
