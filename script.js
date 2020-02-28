// New VueJS instance
new Vue({
  name: 'Notebook',

  // CSS selector of the root DOM element
  el: '#notebook',
  
  // Some data
  data() {
    return {
      // Array containing all notes
      notes: [],
      // Id of the selected note
      selectedId: null,
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
  },

  // This will be called when the instance is ready
  // created () {
  //   // Set the content to the stored value
  //   // or to a default string if nothing was saved
  //   this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  // },
})