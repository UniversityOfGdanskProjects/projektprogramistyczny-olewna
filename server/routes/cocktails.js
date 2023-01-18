const express = require('express')
const {
    createCocktail,
    getCocktails,
    getOneCocktail,
    deleteCocktail,
    updateCocktail,
} = require('../controllers/cocktailController.js')

const router = express.Router()

//GET all cocks
router.get('/', getCocktails)

//GET one cock
router.get('/:id', getOneCocktail)

// POST new cock
router.post('/', createCocktail)

// DELETE cock
router.delete('/:id', deleteCocktail)

// UPDATE cock
router.patch('/:id', updateCocktail)

module.exports = router