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
      return MediaStreamTrackAudioSourceNode(this.content)
    },
  },
})