<script>
  import { Link } from "svelte-routing"
  import Bar from "./Bar.svelte"
  import { ModalCard } from "svelma"
  import SingleNote from "./SingleNote.svelte"
  export let notes = []
</script>

<div>
  <Bar />
  {#each notes as note}
    <div class="block">
      <Link to="{'/notes/'+note.id}"><h1 class="title">{note.title}</h1></Link>
      <h2>{note.body}</h2>
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <SingleNote/>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
</style>