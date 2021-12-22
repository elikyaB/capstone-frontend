<script>
    import { navigate } from "svelte-routing"

    export let notes 
    export let id
    export let url 
    export let getNotes 

    let buttonLabel = "Create Note"
    let title = "" 
    let body = "" 

    let handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(url, {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, body}),
        })
        getNotes()
        navigate("/", { replace: true })
    }

    if (id) {
        buttonLabel = "edit"
        const note = notes.find((p) => p.id == id)
        title = note.title
        body = note.body

        handleSubmit = async (event) => {
            event.preventDefault()
            await fetch(url + id + "/", {
                method: "put",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id, title, body}),
            })
            getNotes()
            navigate("/", { replace: true })
        }
    }
</script>

<div>
    <form on:submit="{handleSubmit}">
      <input type="text" placeholder="title" bind:value="{title}" />
      <input type="text" placeholder="body" bind:value="{body}" />
      <input type="submit" bind:value="{buttonLabel}" />
    </form>
</div>

<style></style>

