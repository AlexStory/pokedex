<script context="module">
    export async function load({page}) {
        const id = page.params.id
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const result = await fetch(url)
        const pokemon = await result.json()
        return { props: { pokemon } }
    }
</script>
<script>
    export let pokemon
    let type = pokemon.types[0].type.name
</script>

<h1 class="text-4xl text-center my-8 uppercase py-4">{ pokemon.name }</h1>

<div class="flex flex-col items-center">

    <p>Type: <strong>{ type }</strong> | Height: <strong>
        { pokemon.height }</strong> | Weight: <strong>{ pokemon.weight }</strong>
    </p>
    <img class="card-image w-40 h-40" src={pokemon.sprites.front_default} alt={pokemon.name}>
</div>