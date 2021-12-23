<script>
    import { navigate } from "svelte-routing"
    
    let buttonLabel = "Search"
    let term = ""

    let handleSubmit = async(event) => {
        event.preventDefault()
        navigate("/search/"+term, {replace: true})
    }

</script>

<div>
    <form on:submit="{handleSubmit}">
        <input type="text" placeholder="search" bind:value="{term}">
        <input type="submit" bind:value="{buttonLabel}">
    </form>
</div>

<style></style>