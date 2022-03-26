// import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정(html 말고 js)
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"), // __dirname(현재 파일이 있는 경로) +  dist 폴더 => 절대 경로 path에 제공
    // filename: "main.js",
    clean: true, // 기존에 만들었던 내용 제거
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // .scss || .css 확장자 파일
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      // static 복사해서 dist 폴더로 들어갈 수 있도록
      patterns: [{ from: "static" }],
    }),
  ],
};
