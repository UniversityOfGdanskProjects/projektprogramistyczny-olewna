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
    strIngredient2: {
        type: String,

    },
    strIngredient3: {
        type: String,

    },
    strIngredient4: {
        type: String,

    },
    strIngredient5: {
        type: String,

    },
    strIngredient6: {
        type: String,

    },
    strIngredient7: {
        type: String,

    },
    strIngredient8: {
        type: String,

    },
    strIngredient9: {
        type: String,

    },
    strIngredient10: {
        type: String,
    },
    strMeasure1: {
        type: String,
        required: true
    },
    strMeasure2: {
        type: String,
    },
    strMeasure3: {
        type: String,
    },
    strMeasure4: {
        type: String,
    },
    strMeasure5: {
        type: String,
    },
    strMeasure6: {
        type: String,
    },
    strMeasure7: {
        type: String,
    },
    strMeasure8: {
        type: String,
    },
    strMeasure9: {
        type: String,
    },
    strMeasure10: {
        type: String,
    },
    rating: {
        type: Array,
        required:true
    },
    idDrink: {
        type:String,
        required:true
    }
}, { timestamps: true })

module.exports = mongoose.model('Cocktail', cocktailsSchema)