<script>
    import { fade } from 'svelte/transition'
    export let pokemon
</script>

<a href={`/pokemon/${pokemon.id}`} class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex-col flex items-center"
    transition:fade>
    <img class="h-40 w-40" src={pokemon.image} alt={pokemon.name}>
    <h2 class="uppercase text-xl">{ pokemon.id } { pokemon.name }</h2>
</a>