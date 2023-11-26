const path = require('path')

module.exports = {
    entry: { 
        index: './indexController.js',
        profile: './profileController.js',
        friends: './friendsController.js',
        posts: './postsController.js',
        settings: './settingsController.js',
        following: './followingController.js',
        followers: './followersController.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../public/assets/js')
    }
}