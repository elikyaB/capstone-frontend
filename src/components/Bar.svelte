<script>
    import { navigate } from "svelte-routing"
    
    let buttonLabel = "Search"
    let term = ""

    let handleSubmit = async(event) => {
        navigate("/search/"+term, {replace: true})
    }

</script>

<div>
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="search" bind:value="{term}">
        <input type="submit" bind:value={buttonLabel}>
    </form>
</div>

<style></style>