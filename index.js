var	bbcode = require('bbcode'),

	BBcode = {
		bbcodeify: function(raw) {
			return bbcode.process({
				text : raw,
				removeMisalignedTags : false,
				addInLineBreaks : false,
			})
		}
	};

module.exports = BBcode
