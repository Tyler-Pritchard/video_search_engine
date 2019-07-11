const env = process.env['ENV'] || 'production';

module.exports = require(`./${env}`);
