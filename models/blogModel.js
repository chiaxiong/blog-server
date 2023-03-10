const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now(),
        },
    },
    { timestamp: true }
);

module.exports = mongoose.model('blog', blogSchema);
