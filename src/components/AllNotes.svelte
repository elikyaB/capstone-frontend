<script>
  import { Link } from "svelte-routing"
  import Bar from "./Bar.svelte"
  export let notes = []

  let active = {}
  notes.map((n) => {active[`${n.id}`] = false})
  console.log(active)
  const toggle = (id) => {active[`${id}`]=!active[`${id}`]}
</script>

<div>
  <Bar />
  {#each notes as note}
    <div class="block">
      <Link to="{'/notes/'+note.id}"><h1 class="title">{note.title}</h1></Link>
      {#if note.body.length > 140 && window.innerWidth < 768}
        <h2 on:click={toggle(note.id)}>{note.body.slice(0,139)+"..."}</h2>
        <div class="modal {active[note.id]? 'is-active': ''}">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">{note.title}</p>
              <button class="delete" aria-label="close" on:click={toggle(note.id)}/>
            </header>
            <section class="modal-card-body">
              <h2>{note.body}</h2>
            </section>
          </div>
        </div>
      {:else}
        <h2>{note.body}</h2>
      {/if}
    </div>
  {/each}
</div>
