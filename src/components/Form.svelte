<script>
    import { navigate } from "svelte-routing"
    import { loremIpsum } from "lorem-ipsum"

    export let notes 
    export let id
    export let url 
    export let getNotes 

    let title = "" 
    let body = "" 

    let handleSubmit = async () => {
        await fetch(url, {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, body}),
        })
        getNotes()
        navigate("/", { replace: true })
    }

    if (id) {
        const note = notes.find((p) => p.id == id)
        title = note.title
        body = note.body

        handleSubmit = async () => {
            await fetch(url + id + "/", {
                method: "put",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id, title, body}),
            })
            getNotes()
            navigate("/", { replace: true })
        }
    }

    let autoFill = () => {
        if (body == "" || body.endsWith(". ")) {
            body += loremIpsum() + " "
        } else if (body.endsWith(" ") || body.endsWith(".")) {
            body = body.slice(0, body.length-1) 
                + ". " + loremIpsum() + " "
        } else {body += ". " + loremIpsum() + " "}
    }
</script>

<div>
<form on:submit|preventDefault={handleSubmit}>
    <input class="input" type="text" placeholder="title" bind:value={title} />
    <input class="textarea" type="textarea" placeholder="body" bind:value={body} />

    <div>
    <button class="button is-dark is-outlined" on:click|preventDefault={autoFill}>Autofill</button>
    <button class="button is-dark is-outlined" type="submit">Submit</button>
    </div>
</form>
</div>

<style></style>

