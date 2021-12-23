<script>
    import {Link} from "svelte-routing"

    export let notes
    export let id
    export let url
    export let deleteNote
    
    const note = notes.find(p => p.id == id)
</script>

<div>
    <h1 class="title">{note.title}</h1>
    <h2>{note.body}</h2>
    <Link to="/"><button class="button is-link is-outlined">Back</button></Link>
    <Link to={'/edit/' + note.id}><button class="button is-primary is-outlined">Edit</button></Link>
    <button class="button is-danger is-outlined" on:click={deleteNote(url, id)}>Delete</button>
</div>