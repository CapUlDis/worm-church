module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: false,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^[../]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'decorators-legacy']
};
