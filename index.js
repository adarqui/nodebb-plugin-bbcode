var	bbcode = require('bbcode'),

	BBcode = {
		bbcodeify: function(raw) {
			return bbcode.process({
				text : raw,
				removeMisalignedTags : false,
				addInLineBreaks : false,
			}).html;
		}
	};

module.exports = BBcode
