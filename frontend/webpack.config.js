const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        indexBundle: './index',
    },
    context: `${__dirname}/src`,
    output: {
        path: `${__dirname}/static/build`,
        filename: '[name].js',
        publicPath: '/static/build/',
        library: '[name]',
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: `${__dirname}/src`,
                loader: 'babel-loader?presets[]=env&presets[]=react&presets[]=stage-1',
            },
        ],
    },

    resolve: {
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },

    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100,
    },
};
