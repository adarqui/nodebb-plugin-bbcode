var	bbcode = require('bbcode'),
	BBcode = {
		bbcodeify: function(raw) {
			return bbcode.parse(raw)
		}
	};

module.exports = BBcode
