'use strict'

module.exports = {
  jsxSingleQuote: true,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',

  overrides: [
    {
      files: '*.scss',
      options: {
        trailingComma: 'none'
      }
    }
  ]
}
