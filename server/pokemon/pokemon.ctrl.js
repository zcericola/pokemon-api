const getPokemonHandler = async (id) => {
    const pokemon = await getPokemonById(id);
    res.status(200).json(pokemon);

};

module.exports = {
    getPokemonHandler
};