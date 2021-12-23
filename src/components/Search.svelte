<script>
  import { Link } from "svelte-routing"
  import Bar from "./Bar.svelte"
  export let notes
  export let term
</script>

<div>
  <div>
  <Bar />
  </div>
  {#each notes as note}
    {#if note.body.includes(term)}
      <Link to={"/notes/"+note.id}>
        <h1 class="title">{note.title}</h1>
      </Link>
      <article>
        {note.body}
      </article>
    {/if}
  {/each}
</div>
