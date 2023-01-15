const BlogModel = require('../models/blogModel');

// find all blogs
const findBlog = async (req, res) => {
    try {
        const allBlogs = await BlogModel.find({});
        res.status(200).json(allBlogs);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// create new blogs
const createBlog = async (req, res) => {
    const { title, author, content } = req.body;
    try {
        const blogPost = await BlogModel.create({ title, author, content });
        res.status(200).json(blogPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

module.exports = {
    findBlog,
    createBlog,
};