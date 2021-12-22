<script>
  import { onMount } from "svelte"
  import { Router, Route, Link } from "svelte-routing"
  import AllNotes from "./pages/AllNotes.svelte"
  import SingleNote from "./pages/SingleNote.svelte"
  import Form from "./pages/Form.svelte"

  export let url = "" 
  let notes 
  let baseURL = "https://seirp-capstone-backend.herokuapp.com/notes/"

  const getNotes = async () => {
    const response = await fetch(baseURL)
    const data = await response.json()
    notes = data
    console.log(notes)
  }

  onMount(() => getNotes())
</script>

<Router url="{url}">
  <div class="app">
  <h1>Notes</h1>
  <Link to="/new"><button>Make New Note</button></Link>

  <main>
  <Route path="/notes/:id" let:params><SingleNote notes={notes} id={params.id} url={baseURL} getNotes={getNotes}/></Route>
  <Route path="/new"><Form notes={notes} url={baseURL} getNotes={getNotes}/></Route>
  <Route path="/edit/:id" let:params><Form notes={notes} id={params.id} url={baseURL} getNotes={getNotes}/></Route>
  <Route path="/"><AllNotes notes={notes}/></Route>
  </main>

  </div>
</Router>

<style>
  .app {
    text-align: center
  }
</style>