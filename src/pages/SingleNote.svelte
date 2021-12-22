<script>
    import {Link, navigate} from "svelte-routing"
    export let notes;
    export let id;
    export let url;
    export let getNotes;
    
    const note = notes.find(p => p.id == id)
    
    const deleteNote = async () => {
        await fetch(url + id + "/", {method: "delete"})
        getNotes()
        navigate("/", {replace: true})
    }
</script>

<div>
    <h1>{note.title}</h1>
    <h2>{note.body}</h2>
    <Link to="/"><button>Back to Main</button></Link>
    <Link to={'/edit/' + note.id}><button>Edit the Todo</button></Link>
    <button on:click={deleteNote}>Delete Todo</button>
</div>
    
<style>
</style>
    

    