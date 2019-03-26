var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AlbumSchema = new Schema(
    {
        userId: Number,
        id: Number,
        title: String,
    });

//Export model
module.exports = mongoose.model('Album', AlbumSchema);