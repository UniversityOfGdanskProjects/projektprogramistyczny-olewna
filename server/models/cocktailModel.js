const mongoose = require('mongoose');

const Schema = mongoose.Schema

const cocktailsSchema = new Schema({
    strDrink: {
        type: String,
        required: true,
    },
    strAlcoholic: {
        type: String,
        required: true,
    },
    strCategory: {
        type: String,
        required: true,
    },
    strGlass: {
        type: String,
        required: true
    },
    strInstructions: {
        type: String,
        required: true
    },
    strDrinkThumb: {
        type: String,
        required: true
    },
    strIngredient1: {
        type: String,
        required: true
    },
    strMeasure1: {
        type: String,
        required: true
    },
    rating: {
        type: Array,
        required:true
    }
}, { timestamps: true })

module.exports = mongoose.model('Cocktail', cocktailsSchema)