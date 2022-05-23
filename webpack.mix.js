const mix = require('laravel-mix');

const webpackConfig = require('./webpack.config');

mix.js('resources/js/app.js', 'public/js')
    .extract()
    .vue(3)
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .alias({ '@': 'resources/js' })
    .webpackConfig(webpackConfig)
    .version();
