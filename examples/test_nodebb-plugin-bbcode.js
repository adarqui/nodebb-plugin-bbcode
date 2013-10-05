var plugin = require('nodebb-plugin-bbcode/index.js');

console.log("plugin", plugin);

process.argv.splice(0,2);
var all_args = process.argv.join(' ');
var ret = plugin.bbcodeify(all_args);
console.log("bbcodify result:",ret);
