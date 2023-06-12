const path = require('path');
module.exports = {
  entry: './src/index.tsx',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: 'file-loader',
            options: {
              name: '/public/icons/[name].[ext]'
            }
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
};