const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    verbose: true,
    rootDir: 'src',
    moduleFileExtensions: ['js', 'ts'],
    transform: {
        ...tsjPreset.transform
    },
    testRegex: '(\\.|/)(test|spec)\\.(tsx?)$',
    preset: 'ts-jest'
};
