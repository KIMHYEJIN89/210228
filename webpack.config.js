const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //웹팩 플러그인!

module.exports = {
  entry: path.resolve(__dirname, './src'), //젤 먼저 찾는게 index라서 생ㄱ략 가능
  output: { // 번들링한 결과물을 어떤 이름으로 내보낼지~ 
    filename: 'bundle.[hash].js', // 매번 같은이름으로 가져오면 수정함에도 불구하고 이전파일을 가져옴..그래서 hash를 붙이면 웹펙에서 자동으로 hash랜덤값을 붙여줌
    path: path.resolve(__dirname, 'dist'),
  },
  module: { //웹펙이 어떤걸 모를수 있기 때문에~ 적어주는거 아래내용은..
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'],
  },
  plugins: [// 웹팩 플러그인
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'), // 어떤파일로 기준으로 할 것인가?
      filename: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),// 결과물을 내뱉는 ! 
    inline: true,
    hot: true,
    open: true,
  },
}
