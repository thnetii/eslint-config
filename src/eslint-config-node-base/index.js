const { rules } = require('eslint-config-airbnb-base/rules/style');
const noRestrictedSyntax = rules['no-restricted-syntax'];

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'airbnb-base'],
  rules: {
    'no-restricted-syntax': [
      noRestrictedSyntax[0],
      ...noRestrictedSyntax
        .filter((r) => {
          if (typeof r !== 'object') { return false; }
          return r.selector !== 'ForOfStatement'
        }),
    ],
  },
};
