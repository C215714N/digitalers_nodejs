const path = require('node:path');

const pathStringExample = '/public_html/src/index.js';
const pathObjectExample = {
    root: '/',
    dir: '/public_html/src/index.js',
    base: 'index.js',
    ext: '.js',
    name: 'index'
}
const parsePath = (string = __filename) => path.parse(string);

module.exports = { 
    pathStringExample,
    pathObjectExample,
    parsePath 
}