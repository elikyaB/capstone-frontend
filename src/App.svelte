<script>
  import { onMount } from "svelte"
  import { Router, Route, navigate } from "svelte-routing"
  import 'bulma/css/bulma.css'
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

    <main class="container">
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
  @import url('https://fonts.googleapis.com/css2?family=Romanesco&family=Teko&display=swap');  

  :global(.columns *){
    font-family: 'Romanesco';
    font-size: 2rem;
  }
  :global(.columns .title){
    font-size: 3rem;
    border-right: 1px solid black;
  }
  :global(.columns .subtitle){
    font-size: 2rem;
  }
  :global(.columns){
    border-bottom: 1px solid black;
    margin: 0px !important;
  }
  :global(#search){
    margin-top: 0;
  }
  .app {
    text-align: center
  }
</style>