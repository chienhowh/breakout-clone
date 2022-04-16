const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // 入口，指定總文件
    entry: './src/index.ts',
    // 打包輸出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            // ie不兼容arrow func
            arrowFunction: false
        }
    },
    // 打包使用模塊
    module: {
        rules: [
            // ts
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["@babel/preset-env",
                                    {
                                        targets: {
                                            "chrome": "50"
                                        },
                                        // corejs是polyfill,幫舊瀏覽器加上新功能(補丁)
                                        "corejs": '3',
                                        // 只引入會用到的core
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }

                    },
                    'ts-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.s[ac]ss$/i,
                // 把 sass-loader 放在首要處理 (第一步)
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]

    },
    // 組件間可以被當模組引用
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new htmlPlugin({
            // 引用模板
            template: './src/index.html'
        })
        , new MiniCssExtractPlugin()
    ]

}