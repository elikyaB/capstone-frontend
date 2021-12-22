<script>
  import {Link} from "svelte-routing"
  export let notes = []
</script>

<div>
  {#each notes as note}
  <article>
  <Link to="{'/notes/' + note.id}"><h1>{note.title}</h1></Link>
  <h2>{note.body}</h2>
  </article>
  {/each}
</div>

<style>
</style>