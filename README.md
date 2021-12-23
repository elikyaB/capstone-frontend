
# Notare 2.0 - Notes App

This is the frontend for the Notare 2.0 App, utilizing API from the [Masonite-Heroku backend.](https://github.com/elikyaB/capstone-backend)


## Technologies Used
- HTML5
- Svelte JS
- Bulma
- Netlify

## Router Route Table

| Route | URL | Description |
| ----- | --- | ----------- |
| Index | `/` | GET all notes |
| Create | `/new` | POST creates a new note |
| Update | `/note/:id` | PUT updates a note |
| Destroy | `/note/:id` | DELETE destroys a note
| Show | `/note/:id` | GET for one note |

## Components
- AllNotes - show all the notes
- Bar - form to input search criteria
- Header - shows link to Form and additional functions - get random note and delete all notes
- Form - template for new notes and editing existing notes, has autofill feature
- Search - page that shows filtered notes
- SingleNote - shows an additional note with delete, update, and return to AllNotes button

## Tree
```
App
 |_____ Header
 |_____ Main
          |______ AllNotes / Search
                        |______ Bar
          |______ SingleNote
          |______ Form
```

## User Stories
- As a user, I can see a list of all my notes when I visit the page.
- As a user, I can click on one of my notes and have it take me to its individual page.
- As a user, I can create a new note and see it on the main page instantly.
- As a user, I can update a note in case I made a typo or want to change an image.
- As a user, I can autofill the form for a note in case I'm lazy.
- As a user, I can delete a note so I can keep my list relevant.
- As a user, I can delete all notes to start fresh.
- As a user, I can click a button to go to a random note.
- As a mobile user, I can click on the abbreviated text of a note to bring up a modal with the full content

## Development Notes

## Svelte
Most issues boiled down to getting Svelte setup through to the deploy, including getting various plugins rendering properly. Although Svelte should be performing great on Vercel I ran into unexpected build bugs and went back to ol' faithful Netlify.

## LoremIpsum Autofill, Random, and Delere Functions
These were mostly an exercise in translating from my last React Project to Svelte.

## Bulma and the Modals
I was pleasantly surprised at the simplistic effectiveness of Bulma, a library I have never used yet. It made the process of putting together a modal, which I had difficulties with before, quite seamless. It also massively cut down on the overall amount of CSS I am used to writing. For Svelte Bulma has a variant called Svelma, which seemed to have potential as ready-made Svelte components. While that would cut down on the long lines of DOM element class names, I ultimately found Svelma lacking the robust functional interplay of pure Bulma. To be fair, Svelma is a brand new work in progress, and one that I'm thinking of contributing to in the future.
