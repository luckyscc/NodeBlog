var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    Category = mongoose.model('Category');

module.exports = function(app) {
    app.use('/admin/categories', router);
};

router.get('/', function(req, res, next) {
    res.render('admin/category/index',{
        pretty: true
    })
});
router.get('/add', function(req, res, next) {
    res.render('admin/category/add',{
        pretty: true
    })
});
router.post('/add', function(req, res, next) {

});
//查看文章
router.get('/edit/:id',function(req,res,next) {

})
//提交文章
router.post('/edit/:id', function(req, res, next) {
    
});
//删除文章
router.get('/delete/:id',function(req,res,next) {

})
