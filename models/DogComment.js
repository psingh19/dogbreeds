const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DogCommentSchema = new Schema({
    breed:{type:String, required:true},
    text:{type:String}
});

const DogComment = mongoose.model("DogComment", DogCommentSchema);

module.exports = DogComment;