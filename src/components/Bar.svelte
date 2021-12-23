<script>
    import { navigate } from "svelte-routing"
    import { Input, Button } from "svelma"
    
    let term = ""

    let handleSubmit = async(event) => {
        if (term.length > 0) {
            navigate("/search/"+term, {replace: true})
        }
    }

    // <input type="text" placeholder="search" bind:value={term}/>
    // <Button type="is-dark" nativeType="submit">Search</Button>
</script>

<div>
    <form class="field has-addons" on:submit|preventDefault={handleSubmit}>
        <div class="control is-expanded" id="bar"><input class="input" type="text" placeholder="search" bind:value={term}/></div>
        <div class="control"><button class="button is-dark is-outlined" type="submit">Search</button></div>
    </form>
</div>

<style>
    /* #bar {max-width:80vw; margin: 0 auto;} */
</style>