// New VueJS instance
new Vue({
  // CSS selector of the root DOM element
  el: '#notebook',

  // Some data
  data() {
    return {
      content: 'This is a note.',
      // Array containing all notes
      notes: [],
    }
  },

  // Computed properties
  computed: {
    notePreview() {
      // Markdown rendered to HTML
      return marked(this.content)
    },
  },

  // Change watchers
  watch: {
    // Watching 'content' data property
    content: 'saveNote',
  },

  methods: {
    saveNote () {
      console.log('saving note:', this.content)
      localStorage.setItem('content', this.content)
      this.reportOperation('saving')
    },
    reportOperation (opName) {
      console.log('The', opName, 'operation was completed!')
    },
  },

  // This will be called when the instance is ready
  created () {
    // Set the content to the stored value
    // or to a default string if nothing was saved
    this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  },
})