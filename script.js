// New VueJS instance
new Vue({
  name: 'Notebook',

  // CSS selector of the root DOM element
  el: '#notebook',
  
  // Some data
  data() {
    return {
      // Array containing all notes
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      // Id of the selected note
      selectedId: localStorage.getItem('selected-id') || null,
    }
  },

  // Computed properties
  computed: {
    notePreview() {
      // Markdown rendered to HTML
      return this.selectedNote ? marked(this.selectedNote.content) : ''
    },

    selectedNote () {
      // Return the matching selectedId note
      return this.notes.find(note => note.id === this.selectedId)
    },
  },

  // Change watchers
  watch: {
    notes: {
      handler: 'saveNotes',
      // Need this to watch each note's properties inside the array
      deep: true,
    },

    // Save the selection too
    selectedId (val) {
      localStorage.setItem('selected-id', val)
    },
  },

  methods: {
    // Add a note with some default content and select it
    addNote () {
      const time = Date.now()
      // Default new note
      const note = {
        id: String(time),
        title: 'New note ' + (this.notes.length + 1),
        content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
        created: time,
        favorite: false,
      }
      // Add to the list
      this.notes.push(note)
    },

    selectNote (note) {
      this.selectedId = note.id
    },

    saveNotes () {
      // Stringify to JSON before storing
      localStorage.setItem('notes', JSON.stringify(this.notes))
      console.log('Notes saved!', new Date())
    },

    removeNote () {
      if (this.selectedNote && confirm('Delete this note?')) {
        // Remove the note in the notes array
        const index = this.notes.indexOf(this.selectedNote)
        if (index !== -1) {
          this.notes.splice(index, 1)
        }
      }
    },
  },

  // This will be called when the instance is ready
  // created () {
  //   // Set the content to the stored value
  //   // or to a default string if nothing was saved
  //   this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  // },
})