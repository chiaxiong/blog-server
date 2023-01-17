const express = require('express');
const {
  createBlog,
  findBlog,
  getBlog,
  deleteBlog,
  updateBlog,
} = require('../controllers/blogController');

const router = express.Router();

router.get('/', findBlog);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.delete('/:id', deleteBlog);
router.patch('/:id', updateBlog);

module.exports = router;
