<script>
    import {Link, navigate} from "svelte-routing"
    import { Button } from 'svelma'
    
    export let notes
    export let id
    export let url
    export let deleteNote
    
    const note = notes.find(p => p.id == id)
</script>

<div>
    <h1>{note.title}</h1>
    <h2>{note.body}</h2>
    <Link to="/"><Button>Back</Button></Link>
    <Link to={'/edit/' + note.id}><Button>Edit</Button></Link>
    <Button on:click={deleteNote(url, id)}>Delete</Button>
</div>
    
<style>
</style>
    

    