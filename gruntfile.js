/*
 * chris-nelson ==> gruntfile
 * Created By barnabasnomo on 12/16/17 at 12:26 PM
 * @soundtrack Roll Up ft Wizkid x AKA - Emtee
*/
module.exports = (grunt) => {
    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    'public/stylesheets/dist/bundle.min.css':
                        [
                            'public/stylesheets/src/bootstrap.min.css',
                            'public/stylesheets/src/flexslider.css',
                            'public/stylesheets/src/jquery.fancybox.css',
                            'public/stylesheets/src/main.css',
                            'public/stylesheets/src/responsive.css',
                            'public/stylesheets/src/animate.min.css',
                            'public/stylesheets/src/font-icon.css',
                            'public/stylesheets/src/font-awesome-4.4.css'
                        ]
                }
            }
        },
        uglify: {
            my_target:{
                files:{
                    'public/javascripts/dist/bundle.min.js':
                        [
                            'public/javascripts/src/jquery.1.11.3.js',
                            'public/javascripts/src/bootstrap.min.js',
                            'public/javascripts/src/jquery.flexslider-min.js',
                            'public/javascripts/src/jquery.fancybox.pack.js',
                            'public/javascripts/src/retina.min.js',
                            'public/javascripts/src/modernizr.js',
                            'public/javascripts/src/main.js'
                        ]
                }
            }
        },
        watch: {
            css: {
                files: ['public/stylesheets/src/*.css'],
                tasks: ['css'],
                options: {
                    interrupt: true
                }
            },
            scripts: {
                files: ['public/javascripts/src/*.js'],
                tasks: ['js'],
                options: {
                    interrupt: true
                }
            }, configFiles: {
                files: ['gruntfile.js'],
                options: {
                    reload: true
                }
            }

        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('js', ['uglify']);

    // bundled
    grunt.registerTask('bundle', ['css','js']);

    // default
    grunt.registerTask('default', ['bundle']);
};