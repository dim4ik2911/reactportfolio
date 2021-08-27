const path = require("path");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    mode: "development",
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          loader: "url-loader",
          test: /\.(png|jpg|gif)$/i,
        },
        {
          loader: "file-loader",
          test: /\.(pdf|svg)$/,
        },
        {
          test: /\.s?css$/i,
          //when one loader use loader when more then use "use"
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
    devServer: {
      static: path.join(__dirname, "public"),
      compress: true,
      port: 8080,
      // this attribute means we are going to handle routing through client side
      historyApiFallback: true,
    },
  };
};
