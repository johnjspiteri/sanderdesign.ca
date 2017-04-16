module.exports = function(grunt) {

	var path = require('path');
	var location = grunt.file.readJSON('server/build/development.json');

	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'build/config'),
		data: {
			ip: location.ip,
			port: location.port
		},
		jitGrunt: {
			customTasksDir: 'build/tasks',
			staticMappings: {
				express: 'grunt-express-server',
				ngtemplates: 'grunt-angular-templates'
			}
		}
	});
};
