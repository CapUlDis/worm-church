module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: false,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^api(/.*)$',
    '^assets(/.*)$',
    '^interfaces(/.*)$',
    '^modals(/.*)$',
    '^panels(/.*)$',
    '^styles(/.*)$',
    '^utils(/.*)$',
    '^[../]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
