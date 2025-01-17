module.exports = {
  root: true,
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly'
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'airbnb-base'],
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-this-alias': ['off'],
    'no-bitwise': 'off',
    'no-tabs': 'off',
    'array-element-newline': ['error', 'consistent'],
    indent: ['error', 2, { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-new': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'eol-last': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
    'import/no-cycle': 'off',
    'arrow-parens': 'off',
    semi: ['error', 'never'],
    eqeqeq: 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'no-continue': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'prefer-const': 'off',
    'global-require': 'off',
    'no-prototype-builtins': 'off',
    'consistent-return': 'off',
    'vue/require-component-is': 'off',
    'prefer-template': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'import/named': 'off',
    'object-curly-newline': 'off',
    'default-case': 'off',
    'import/order': 'off',
    'no-trailing-spaces': 'off',
    'func-names': 'off',
    radix: 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'off',
    'no-mixed-operators': 'off',
    'no-await-in-loop': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-case-declarations': 'off',
    'template-curly-spacing': 'off',
    'vue/valid-v-for': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'guard-for-in': 'off',
    '@typescript-eslint/ban-types': 'off',
    'class-methods-use-this': 'off',
    'no-return-await': 'off',
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 3,
          allowFirstLine: true
        },
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off'
  }
}
