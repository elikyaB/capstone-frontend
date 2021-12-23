<script>
    import { navigate } from "svelte-routing"
    import { Input, Button } from "svelma"
    
    let term = ""

    let handleSubmit = async(event) => {
        if (term.length > 0) {
            navigate("/search/"+term, {replace: true})
        }
    }

</script>

<div class="columns">
    <form on:submit|preventDefault={handleSubmit}>
        <div class="column is-half"><input class="input" type="text" placeholder="search" bind:value={term}/></div>
        <div><Button type="is-dark" nativeType="submit">Search</Button></div>
    </form>
</div>

<style>

</style>