var Elixir = require('laravel-elixir');

Elixir.config.js.browserify.transformers.push({
    name: 'hbsfy',

    // https://github.com/epeli/node-hbsfy#options
    options: {}
});
