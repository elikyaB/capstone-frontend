<script>
    import { navigate } from "svelte-routing"
    import { loremIpsum } from "lorem-ipsum"

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
        buttonLabel = "Confirm Edit"
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

    let autoFillLabel = "Autofill"

    let autoFill = (event) => {
        event.preventDefault()
        if (body == "" || body.endsWith(". ")) {
            body += loremIpsum() + " "
        } else if (body.endsWith(" ") || body.endsWith(".")) {
            body = body.slice(0, body.length-1) 
                + ". " + loremIpsum() + " "
        } else {body += ". " + loremIpsum() + " "}
    }
</script>

<div>
<form on:submit="{handleSubmit}">
    <input type="text" placeholder="title" bind:value="{title}" />
    <input type="textarea" placeholder="body" bind:value="{body}" />
    
    <div>
    <input type="button" bind:value="{autoFillLabel}" on:click="{autoFill}" />
    <input type="submit" bind:value="{buttonLabel}" />
    </div>
</form>
</div>

<style></style>

