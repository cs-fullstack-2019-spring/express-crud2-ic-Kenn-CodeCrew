var express = require('express');
var router = express.Router();
var AlbumCollection = require('../models/AlbumSchema');

/* GET home page. */
router.get('/', function(req, res, next) {

  AlbumCollection.find({}, (errors, results)=>
  {
    if (errors) res.send(errors);
    else {
      context = {
        title: "Kenn's Albums",
        allAlbums: results,
      };
      res.render('index', context);
    }
  });
});

router.get('/create', (req, res) => res.render('createAlbum'));

router.get('/saveAlbum', (req, res)=>{
  AlbumCollection.create(
      {userId: req.query.userId,
      id: req.query.id,
      title: req.query.title}, (errors)=>{
        if (errors) res.send(errors);
        else res.redirect("/");
      })
});

router.get('/delete', (req,res)=>res.render('delete'));

router.get('/deleteSave', (req,res)=>{
  AlbumCollection.deleteOne({id:req.query.id},
      (error)=>{
    if(error) res.send(error);
    else res.redirect("/");
      })
});

router.get('/find', (req,res)=>res.render('find'));

router.get('/findAlbum', (req,res)=>{
  AlbumCollection.find({id:req.query.id},
      (error, results)=>{
        if(error) res.send(error);
        else {
          context = {
            title: "Kenn's Albums",
            allAlbums: results,
          };
          res.render('index', context);
        }
      })
});



module.exports = router;
