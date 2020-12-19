const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: { main: ["./src/index.js", "./src/main.scss"] },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/assets/icons/", to: "./assets/icons/" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "./assets/img",
          },
        },
      },
    ],
  },
};
