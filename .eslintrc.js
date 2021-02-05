// const RULES = {
//   OFF: 'off',
//   WARN: 'warn',
//   ERROR: 'error'
// }

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  }
}
