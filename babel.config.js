module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react", "@babel/typescript"],
  plugins: [
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
