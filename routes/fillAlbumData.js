var express = require('express');
var router = express.Router();
var data = require('../bin/albumData');
var AlbumSchema = require('../models/AlbumSchema');

router.get('/', (req, res)=> {
        AlbumSchema.create(data.albumData, (error, results)=> {
                if(error) res.send(error);
                else res.send(results);
        });
});

module.exports = router;