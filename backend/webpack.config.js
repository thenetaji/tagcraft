import path from "path";

export default {
  mode: "production",
  target: "node",
  entry: "./node.js",
  output: {
    filename: "index.js",
    path: path.resolve(),
    clean: true,
    libraryTarget: "module",
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
  externals: {
    sharp: "sharp",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
