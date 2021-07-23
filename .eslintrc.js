module.exports = {
  extends: 'eslint-config-intense',
  rules: {
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'], // index-signature is better because it allows you to provide a variable name for the key which serves as a sort of documentation of the author's intent
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'object-curly-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
};
