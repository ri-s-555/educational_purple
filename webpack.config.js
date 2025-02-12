const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/js/index.js', // Входная точка вашего приложения
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
      publicPath: '/',
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      port: 3000,
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Обработка JS и JSX файлов
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', // Транспиляция ES6+
                '@babel/preset-react', // Транспиляция React JSX
              ],
            },
          },
        },
        {
          test: /\.css$/, // Обработка CSS файлов
          use: ['style-loader', 'css-loader'],
        },
        // Добавьте другие правила загрузчиков по мере необходимости
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // Расширения файлов для разрешения
    },
    plugins: [
      new CleanWebpackPlugin(), // Очистка папки dist перед сборкой
      new HtmlWebpackPlugin({
        template: './index.html', // Шаблон HTML
        
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/img', to: 'img' } // Убедитесь, что путь соответствует вашей структуре
        ]
      }),
    ],
    
  };
};
