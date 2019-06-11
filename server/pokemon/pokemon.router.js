const express = require('express');
const {
    getPokemonById

} = require('./pokemon.ctrl');

const pokemonRouter = express.Router();

pokemonRouter.get('/:id', getPokemonById);


module.exports = videosRouter;