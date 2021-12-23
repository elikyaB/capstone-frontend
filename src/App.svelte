<script>
  import { onMount } from "svelte"
  import { Router, Route, navigate } from "svelte-routing"
  import AllNotes from "./components/AllNotes.svelte"
  import SingleNote from "./components/SingleNote.svelte"
  import Form from "./components/Form.svelte"
  import Search from "./components/Search.svelte"
  import Header from "./components/Header.svelte"
  

  export let url = "" 
  let backend = "https://seirp-capstone-backend.herokuapp.com/notes/"
  let notes 
  
  const getNotes = async () => {
    const response = await fetch(backend)
    const data = await response.json()
    notes = data
    console.log(notes)
  }

  const deleteNote = async (url, id) => {
    await fetch(url + id + "/", {method: "delete"})
    getNotes()
    navigate("/", {replace: true})
  }

  onMount(() => getNotes())
</script>


<div class="app">
  
  <Router url="{url}">
    <Header url={backend} notes={notes} deleteNote={deleteNote}/>

    <main>
    <Route path="/notes/:id" let:params>
      <SingleNote notes={notes} id={params.id} url={backend} deleteNote={deleteNote}/>
    </Route>
    <Route path="/new">
      <Form notes={notes} url={backend} getNotes={getNotes}/>
    </Route>
    <Route path="/edit/:id" let:params>
      <Form notes={notes} id={params.id} url={backend} getNotes={getNotes}/>
    </Route>
    <Route path="/search/:term" let:params>
      <Search notes={notes} term={params.term}/>
    </Route>
    <Route path="/">
      <AllNotes notes={notes}/>
    </Route>
    </main>
  </Router>
</div>


<style>
  .app {
    text-align: center
  }
</style>