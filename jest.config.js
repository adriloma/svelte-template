module.exports = {
    transform: {
      '^.+\\.svelte$': ['@oat-sa/jest-transform-svelte', {preprocess: true}],
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'svelte'],
  }