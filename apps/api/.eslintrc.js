module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    '@loopback/eslint-config',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-throw-literal': 0,
    '@typescript-eslint/no-throw-literal': 0
  },
  compilerOptions: {
    useUnknownInCatchVariables: false
  }
}
