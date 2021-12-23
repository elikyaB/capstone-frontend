<script>
  import { Link, navigate } from "svelte-routing"
  import { Button } from "svelma"
  import Bar from "./Bar.svelte"
  export let notes
  export let term
</script>

<div>
  <div>
  <Button type="is-light" on:click={()=>{navigate('/', {replace: true})}}>Back</Button>
  <Bar />
  </div>
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
