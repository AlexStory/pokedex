<script>
    import { pokemon } from '../stores/pokestore'
    import PokemonCard from '../components/pokemonCard.svelte'
    let searchTerm = ''
    let filteredPokemon = []

    $: {
        if (searchTerm) {
            filteredPokemon = $pokemon.filter(x => x.name.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            filteredPokemon = $pokemon
        }
    }

</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase py-4">Svelte Pokedex</h1>

<input bind:value={searchTerm} class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" placeholder="search">

<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">
    {#each filteredPokemon as pokeman}
        <PokemonCard pokemon={pokeman}></PokemonCard>
    {/each}
</div>
