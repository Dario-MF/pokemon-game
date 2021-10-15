

const fetchPokemon = async (idPokemon) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    const respJson = await resp.json();
    return { name: respJson.name, id: respJson.id }
}


export default fetchPokemon