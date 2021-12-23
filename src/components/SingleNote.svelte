<script>
    import {Link, navigate} from "svelte-routing"
    export let notes
    export let id
    export let url
    export let deleteNote
    
    const note = notes.find(p => p.id == id)
</script>

<div>
    <h1>{note.title}</h1>
    <h2>{note.body}</h2>
    <Link to="/"><button>Back</button></Link>
    <Link to={'/edit/' + note.id}><button>Edit</button></Link>
    <button on:click="{deleteNote(url, id)}">Delete</button>
</div>
    
<style>
</style>
    

    