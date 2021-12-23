<script>
    import { navigate } from "svelte-routing"

    let term = ""

    let handleSubmit = async(event) => {
        if (term.length > 0) {
            navigate("/search/"+term, {replace: true})
        }
    }
</script>

<div class="block" id="search">
    <form class="field has-addons" on:submit|preventDefault={handleSubmit}>
        <div class="control is-expanded" id="bar"><input class="input" type="text" placeholder="search" bind:value={term}/></div>
        <div class="control"><button class="button is-dark is-outlined" type="submit">Search</button></div>
    </form>
</div>
