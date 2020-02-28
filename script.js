// New VueJS instance
new Vue({
  // CSS selector of the root DOM element
  el: '#notebook',

  // Some data
  data() {
    return {
      content: 'This is a note.',
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
    saveNote (val) {
      console.log('saving note:', val)
      localStorage.setItem('content', val)
    }
  }
})