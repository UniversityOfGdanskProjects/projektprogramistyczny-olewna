const express = require('express')

const router = express.Router()

//GET all cocks
router.get('/', (req,res) => {
    res.json({msg: 'GET all cocktails'})
})

//GET one cock
router.get('/:id',(req,res) => {
    res.json({msg: "GET one cocktail"})
})

// POST new cock
router.post('/',(req,res) => {
    res.json({msg: "POST new cocktail"})
})

// DELETE cock
router.delete('/:id',(req,res) => {
    res.json({msg: "DELETE cocktail"})
})

// UPDATE cock
router.patch('/:id',(req,res) => {
    res.json({msg: "UPDATE cocktail"})
})

module.exports = router