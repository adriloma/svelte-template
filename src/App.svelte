<script>
import {onMount} from 'svelte';

let selected = '';
let pokemonList;
let activePokemon;
onMount (async () => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
	pokemonList = await response.json();
})

async function loadPokemon() {
	debugger;
	const pokeToLoad = pokemonList.results[selected];
	const response = await fetch(pokeToLoad.url);
	activePokemon = await response.json();
}

</script>

<main>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 100%;
		margin: 0 auto;
	& h1 {
			color: #ff3e00;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
			color: red;
		}
	}
</style>
<main>
	<h1>Pokemon slider</h1>
	{#if pokemonList}
	<h3>{selected || 'choose one!'}</h3>
	<input type="range" min=0 max={pokemonList.results.length - 1} bind:value={selected} on:change={loadPokemon}>
	{:else}
	loading...
	{/if}
	{#if activePokemon}
	<img src={activePokemon.sprites.front_default} alt={activePokemon.name}/>
	{/if}
</main>