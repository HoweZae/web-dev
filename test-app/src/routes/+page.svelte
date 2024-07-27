<script>
    import "../app.css";

    import Lyric from './Lyric.svelte';
    import MultiLyric from './MultiLyric.svelte';

	let title = 'sveltekit';
    let svelteLogo = '/test.jpg';
    let song = "DBATC";

    let htmlLine = `<strong>Gave up on me like I was a bad drug</strong>`

    let count = [0];
    function increment() {
        count = [...count, count.length + 1]
    }

    /* CONSTANTS */
    const multilyric1 = {
        line1: "Our country, guess it was a lawless land",
        line2: "Quiet my fears with the touch of your hands",
        line3: "My paper cut stings from my paper thin plans",
    }

    const multilyric2 = [
        {color: "text-blue-600", line: "Trying to find a part of me that you didn't take up"},
        {color: "text-pink-600", line: "Gave you so much but it wasn't enough"},
        {color: "text-purple-600", line: "But I'll be alright, it's just a thousand cuts"},
    ]

    /* REACTIVES */
    $: countActual = count.length;
    $: doubled = count.length * 2;
    $: console.log(`Count has changed to {count}`);
    $: if (count.length >= 10) {
        alert("Count is high; needs refreshing");
        count = [0];
    }
</script>

<style>
    h1 { font-family: 'Charter' }
	p {
        /* color: salmon; */
		font-family: 'Microsoft Sans Serif';
		font-size: 1em;
	}
</style>

<h1 class="text-4xl font-bold italic my-2 center">
    {title.toUpperCase()} Testing Page
</h1>

<img src={svelteLogo} alt="{song} Lyrics" />

<p>My heart, my hips, my body, my love</p>
<Lyric lyric="Trying to find a part of me that you didn't touch"/>
<p>{@html htmlLine}</p>

<button
    class="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300 ml-2 my-2 px-2 py-1 rounded-xl font-semibold"
    on:click = {increment}
><span class="text-pink-100">
    Now I'm searching for {countActual} {countActual === 1 ? 'sign' : 'signs'} in {doubled} haunted clubs
    </span>
</button>

<Lyric />
<MultiLyric {...multilyric1}/>

{#if count <= 2}
    <p>My time, my wine, my spirit, my trust</p>
    {:else}
        <p>My times, my wines, my spirits, my trusts</p>
{/if}

<div class="bg-slate-100 p-2 m-2">
    {#each multilyric2 as item}
        <p class={item.color}>{item.line}</p>
    {/each}
</div>