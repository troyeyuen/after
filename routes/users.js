var express = require('express');
var router = express.Router();
var query = require('../mysql/mysql');
var sql = require('../mysql/index');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/api/all', function(req, res, next) {
    query(sql.SELECT_ALL, function(err, result) {
        if (err) {
            res.json({ code: 0, msg: '服务器错误' })
        } else {
            res.json({ code: 1, result: result })
        }
    })
})
module.exports = router;