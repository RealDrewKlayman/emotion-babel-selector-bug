module.exports = {
  presets: [
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: { version: 3 } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/typescript",
  ],
  plugins: [
    //   // '@emotion',
    //   '@babel/plugin-syntax-top-level-await',
    //   // Stage 0
    //   '@babel/plugin-proposal-function-bind',

    //   // Stage 1
    //   '@babel/plugin-proposal-export-default-from',
    //   '@babel/plugin-proposal-logical-assignment-operators',
    //   ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    //   ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    //   ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
    //   '@babel/plugin-proposal-do-expressions',

    //   // Stage 2
    //   ['@babel/plugin-proposal-decorators', { legacy: true }],
    //   '@babel/plugin-proposal-function-sent',
    //   '@babel/plugin-proposal-export-namespace-from',
    //   '@babel/plugin-proposal-numeric-separator',
    //   '@babel/plugin-proposal-throw-expressions',

    //   // Stage 3
    //   '@babel/plugin-syntax-dynamic-import',
    //   '@babel/plugin-syntax-import-meta',
    //   ['@babel/plugin-proposal-class-properties', { loose: false }],
    //   '@babel/plugin-proposal-json-strings',

    //   // Additional
    //   '@babel/plugin-transform-runtime',
    //   '@babel/plugin-syntax-jsx',
    [
      "@emotion/babel-plugin",
      {
        importMap: {
          "@mui/system": {
            styled: {
              canonicalImport: ["@emotion/styled", "default"],
              styledBaseImport: ["@mui/system", "styled"],
            },
          },
          "@mui/material/styles": {
            styled: {
              canonicalImport: ["@emotion/styled", "default"],
              styledBaseImport: ["@mui/material/styles", "styled"],
            },
          },
        },
      },
    ],
  ],
};
