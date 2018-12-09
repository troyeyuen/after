var mysql = require('mysql');
var pool = mysql.createPool({
    user: 'root',
    password: 'root',
    host: 'localhost',
    database: 'exam'
})
module.exports = function(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            ck && ck(err)
        }
        con.query(sql, arr, function(err, result, filed) {
            if (err) {
                ck && ck(err)
            }
            ck && ck(null, result, filed)
            con.release()
        })
    })
}