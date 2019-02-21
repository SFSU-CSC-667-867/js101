
const { a, b } = require('./myfunctions.js');
const anExternalFunction = require('./external.js');

// this one doesn't have a path, so its either built-in
// or in package.json
const p = require('path');


anExternalFunction();