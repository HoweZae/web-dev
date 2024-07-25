<script>
    import "../app.css";

    import Lyric from './Lyric.svelte';

	let title = 'svelte testing page';
    let svelteLogo = '/test.jpg';
    let song = "DBATC";

    let htmlLine = `<strong>Gave up on me like I was a bad drug</strong>`

    let count = [0];
    function increment() {
        count = [...count, count.length + 1]
    }

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
		color: violet;
		font-family: 'Microsoft Sans Serif';
		font-size: 1em;
	}
</style>

<h1 class = "text-3xl font-bold underline">{ title.toUpperCase() }</h1>

<img src={svelteLogo} alt="{song} Lyrics" />

<p>My heart, my hips, my body, my love</p>
<Lyric lyric="Trying to find a part of me that you didn't touch"/>
<p>{@html htmlLine}</p>

<button class="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300" on:click = {increment}>
    Now I'm searching for {countActual} {countActual === 1 ? 'sign' : 'signs'} in {doubled} haunted clubs
</button>

<Lyric/>