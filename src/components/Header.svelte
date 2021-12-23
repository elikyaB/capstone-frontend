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

<div>
    <Link to="/">
        <h1>Notare</h1>
    </Link>
    <Link to="/new">
        <h2>Nova</h2>
    </Link>
    <h2 on:click={random}>Fortuna</h2>
    <h2 on:click={deleteAll}>Delere</h2>
</div>

<style></style>