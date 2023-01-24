const Cocktail = require("../models/cocktailModel");
const mongoose = require("mongoose");

//GET all
const getCocktails = async (req, res) => {
  const cocktails = await Cocktail.find({});
  res.status(200).json(cocktails);
};

//GET search cocktails
const getOneCocktail = async (req, res) => {
  const { id } = req.params;

  if (/^[A-Za-z0-9]*$/.test(id)) {
    const cocktail = await Cocktail.find({ strDrink: { $regex: id } });
    if (!cocktail) {
      res.status(200).json({});
    } else {
      res.status(200).json(cocktail);
    }
  }
};

//POST new
const createCocktail = async (req, res) => {
  const {
    strDrink,
    strAlcoholic,
    strCategory,
    strGlass,
    strInstructions,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    idDrink,
  } = req.body;
  try {
    const cocktail = await Cocktail.create({
      strDrink,
      strAlcoholic,
      strCategory,
      strGlass,
      strInstructions,
      strDrinkThumb,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      idDrink,
    });
    res.status(200).json(cocktail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE one
const deleteCocktail = async (req, res) => {
  const { id } = req.params;
  // if (!mongoose.Types.ObjectId.isValid(id)){
  //     return res.status(404).json({error: "NO SUCH COCKTAIL!"})
  // }
  const cocktail = await Cocktail.findOneAndDelete({ idDrink: id });

  if (!cocktail) {
    return res.status(400).json({ error: "NO SUCH COCKTAIL!" });
  } else {
    res.status(200).json(cocktail);
  }
};

//UPDATE one
const updateCocktail = async (req, res) => {
  const { id } = req.params;
  // if (!mongoose.Types.ObjectId.isValid(id)){
  //     return res.status(404).json({error: "NO SUCH COCKTAIL!"})
  // }
  const cocktail = await Cocktail.findOneAndUpdate(
    { idDrink: id },
    {
      ...req.body,
    }
  );

  if (!cocktail) {
    return res.status(400).json({ error: "NO SUCH COCKTAIL!" });
  } else {
    res.status(200).json(cocktail);
  }
};

module.exports = {
  createCocktail,
  getCocktails,
  getOneCocktail,
  deleteCocktail,
  updateCocktail,
};
