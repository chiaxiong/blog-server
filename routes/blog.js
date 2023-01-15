const express = require('express');
const { createBlog, findBlog } = require('../controllers/blogController');

const router = express.Router();

router.get('/', findBlog)

router.get('/:id', (req, res) => {
    console.log('res: ' + res);
})

router.post('/', createBlog)

router.delete('/:id', (req, res) => {
    res.json({ text: 'delete posts' })
})

router.patch('/:id', (req, res) => {
    res.json({ text: 'all posts' })
})

module.exports = router;