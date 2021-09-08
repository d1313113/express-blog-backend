const express = require('express');
const router = express.Router();
const indexSQL = require('../sql');

/**
 * @description 获得所有
 */
router.get('/pc', function(req, res, next) {
    const connection = req.connection;
    connection.query(indexSQL.GetPcBanners, function(error, results, fileds) {
        connection.release();
        if (results) {
            res.send({
                code: '0',
                data: results
            });
        } else {
            res.send({
                code: '013001',
                data: []
            });
        }
    })
});

router.get('/weapp', function(req, res, next) {
    const connection = req.connection;
    connection.query(indexSQL.GetWeappBanners, function(error, results, fileds) {
        connection.release();
        if (results) {
            res.send({
                code: '0',
                data: results
            });
        } else {
            res.send({
                code: '013001',
                data: []
            });
        }
    })
});

module.exports = router;