const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ text: 'all posts' })
})

router.get('/:id', (req, res) => {
    res.json({ text: 'all posts' })
})

router.post('/', (req, res) => {
    res.json({ text: 'all posts' })
})

router.delete('/:id', (req, res) => {
    res.json({ text: 'delete posts' })
})

router.patch('/:id', (req, res) => {
    res.json({ text: 'all posts' })
})

module.exports = router;