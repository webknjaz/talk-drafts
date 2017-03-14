(function load_reveal(r) {
  ""
  "Initializes RevealJS and loads its dependencies"
  ""

  // More info https://github.com/hakimel/reveal.js#configuration
  r.initialize({
    history: true,
    dependencies: [
      {
        src: '//cdn.jsdelivr.net/reveal.js/3.0.0/plugin/markdown/marked.js',
        defer: true
      },
      {
        src: '//cdn.jsdelivr.net/reveal.js/3.0.0/plugin/markdown/markdown.js',
        defer: true
      },
      {
        src: '//cdn.jsdelivr.net/reveal.js/3.0.0/plugin/zoom-js/zoom.js',
        defer: true
      },
      {
        src: '//cdn.jsdelivr.net/reveal.js/3.0.0/plugin/notes/notes.js',
        defer: true
      },
      {
        src: '//cdn.jsdelivr.net/highlight.js/9.8.0/highlight.min.js',
        async: true,
        callback: function() {
          hljs.initHighlightingOnLoad()
        }
      },

    ]
  })
})(Reveal)
// vim: set ts=2 sw=2 sts=2 tw=0 et :
