'use strict';

/*jshint node:true*/
/*global grunt*/

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ['lib/**/*.js', 'tasks/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', 'jshint');
};
