const BlogModel = require('../models/blogModel');

/**
 * Get all blogs
 */
const findBlog = async (req, res) => {
  try {
    const allBlogs = await BlogModel.find({});
    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Post blogs
 */
const createBlog = async (req, res) => {
  const { title, author, content } = req.body;
  try {
    const blogPost = await BlogModel.create({ title, author, content });
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Get individual blog
 */
const getBlog = async (req, res) => {
  const { id } = req.params;

  const blog = await BlogModel.findOne({ _id: id });
  if (!blog) {
    res.status(400).json({ error: 'No blog found.' });
  }
  res.status(200).json(blog);
};

/**
 * Update blogs
 */
const updateBlog = async (req, res) => {
  const { id } = req.params;

  const blog = await BlogModel.findOneAndUpdate({ _id: id }, ...req.body);
  if (!blog) {
    res.status(400).json({ error: 'No blog found to be updated.' });
  }
  res.status(200).json(blog);
};

/**
 * Delete blogs
 */
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  const blog = await BlogModel.findOneAndDelete({ _id: id });
  if (!blog) {
    res.status(400).json({ error: 'No blog found to be deleted.' });
  }
  res.status(200).json(blog);
};

module.exports = {
  findBlog,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};
