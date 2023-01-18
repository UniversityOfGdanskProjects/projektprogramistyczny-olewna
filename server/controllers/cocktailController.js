const Cocktail = require('../models/cocktailModel')
const mongoose = require("mongoose");

//GET all
const getCocktails = async (req,res) => {
    const cocktails = await Cocktail.find({})
    res.status(200).json(cocktails)
}

//GET one
const getOneCocktail = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "NO SUCH COCKTAIL!"})
    }
    const cocktail = await Cocktail.findById(id)
    if (!cocktail) {
        return res.status(404).json({error: "NO SUCH COCKTAIL!"})
    } else {
        res.status(200).json(cocktail)
    }
}

//POST new
const createCocktail = async (req,res) => {
    const {strDrink,strAlcoholic,strCategory,strGlass,strInstructions,strDrinkThumb,strIngredient1,strMeasure1} = req.body
    try {
        const cocktail = await Cocktail.create({strDrink,strAlcoholic,strCategory,strGlass,strInstructions,strDrinkThumb,strIngredient1,strMeasure1})
        res.status(200).json(cocktail)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//DELETE one
const deleteCocktail = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "NO SUCH COCKTAIL!"})
    }
    const cocktail = await Cocktail.findOneAndDelete({_id: id})

    if (!cocktail) {
        return res.status(400).json({error: "NO SUCH COCKTAIL!"})
    } else {
        res.status(200).json(cocktail)
    }
}

//UPDATE one
const updateCocktail = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "NO SUCH COCKTAIL!"})
    }
    const cocktail = await Cocktail.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!cocktail) {
        return res.status(400).json({error: "NO SUCH COCKTAIL!"})
    } else {
        res.status(200).json(cocktail)
    }
}


module.exports = {
    createCocktail,
    getCocktails,
    getOneCocktail,
    deleteCocktail,
    updateCocktail,
}