import { writable } from "svelte/store"

const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    const response = await fetch(url)
    const data = await response.json()
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    })
    pokemon.set(loadedPokemon)
}
fetchPokemon()
export const pokemon = writable([])