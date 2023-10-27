const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      filename: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "inline-source-map",
  mode: "development",
  entry: {
    header: {
      import: "./modules/header/header.js",
      dependOn: "shared",
    },
    body: {
      import: "./modules/body/body.js",
      dependOn: "shared",
    },
    footer: {
      import: "./modules/footer/footer.js",
      dependOn: "shared",
    },
    shared: "jquery",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: path.join(__dirname, "./public"),
    open: true,
    port: 8564,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  performance: {
    hints: false, // false, "error" or "warning" to control performance hints
    maxAssetSize: 100000, // Set a maximum asset size threshold in bytes
    maxEntrypointSize: 100000, // Set a maximum entry point size threshold in bytes
  },
};
