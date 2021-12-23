<script>
  import { Link } from "svelte-routing"
  import Bar from "./Bar.svelte"
  export let notes = []
</script>

<div>
  <Bar />
  {#each notes as note}
    <Link to="{'/notes/'+note.id}">
      <h1>{note.title}</h1>
    </Link>
    <h2>{note.body}</h2>
  {/each}
</div>

<style>
</style>