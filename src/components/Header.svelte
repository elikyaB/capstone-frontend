<script>
    import { Link, navigate } from "svelte-routing"

    export let notes
    export let url
    export let deleteNote

    const deleteAll = async () => {
        notes.map((n) => {return deleteNote(url, n.id)})
    }

    const random = () => {
        const arr = []
        if (notes) {
            notes.map((n) => {arr.push(n.id)})
            navigate(`/notes/${arr[Math.floor(Math.random()*arr.length)]}`)
        }
    }
</script>

<div class="columns is-mobile is-gapless is-vcentered">
    <div class="column is-one-third"><Link to="/"><h1 class="title">Notare</h1></Link></div>
    <div class="column"><Link to="/new"><h2 class="subtitle">Nova</h2></Link></div>
    <div class="column"><h2 class="subtitle" on:click={random}>Fortuna</h2></div>
    <div class="column"><h2 class="subtitle" on:click={deleteAll}>Delere</h2></div>
</div>

<style>

</style>