import fetchPokemon from "./fetchPokemons"


const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((p, idx) => idx + 1)
}
const getPokemonsOptions = async () => {
    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)
    return await getPokemonNames(mixPokemons.splice(0, 4))
}

const getPokemonNames = async ([a, b, c, d] = []) => {
    const pokemonsArr = await Promise.all([
        fetchPokemon(a),
        fetchPokemon(b),
        fetchPokemon(c),
        fetchPokemon(d)
    ])
    return await pokemonsArr
}



export default getPokemonsOptions;