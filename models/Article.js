var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Article = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        trim: true,
        default: Date.now
    },
    url: {
        type: String,
        trim: true,
        required: true
    }
});

const Article = mongoose.model('Article', Article);

module.exports = Article;