var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post');

module.exports = function(app) {
    app.use('/', router);
};

router.get('/', function(req, res, next) {
    res.redirect('/posts');
});
router.get('/about', function(req, res, next) {
    res.render('blog/show', {
        title: 'About me',
    });
});
router.get('/contact', function(req, res, next) {
    res.render('blog/show', {
        title: 'Contact me',
    });
});