module.exports = function(grunt) {
	grunt.registerTask('build-partials', [
		'newer:puglint',
		'newer:pug:compile'
	]);
};