<script>
  import { Link } from "svelte-routing"
  export let notes
  export let term
</script>

<div>
  {#each notes as note}
    {#if note.body.includes(term)}
      <Link to={"/notes/"+note.id}>
        <h1>{note.title}</h1>
      </Link>
      <article>
        {note.body}
      </article>
    {/if}
  {/each}
</div>
