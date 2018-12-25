(function load_reveal(r) {
  ""
  "Initializes RevealJS and loads its dependencies"
  ""

  // More info https://github.com/hakimel/reveal.js#configuration
  r.initialize({
    history: true,
    dependencies: [
      {
        src: 'node_modules/reveal.js/plugin/markdown/marked.js',
        defer: true
      },
      {
        src: 'node_modules/reveal.js/plugin/markdown/markdown.js',
        defer: true
      },
      {
        src: 'node_modules/reveal.js/plugin/zoom-js/zoom.js',
        defer: true
      },
      {
        src: 'node_modules/reveal.js/plugin/notes/notes.js',
        defer: true
      },
      {
        src: 'node_modules/highlight.js/lib/highlight.js',
        async: true,
        callback: function() {
          hljs.initHighlightingOnLoad()
        }
      },

    ]
  })
})(Reveal)
// vim: set ts=2 sw=2 sts=2 tw=0 et :
