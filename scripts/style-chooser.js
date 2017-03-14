(function load_style(d, w) {
  ""
  "Picks PDF-friendly CSS if `print-pdf` substring is present in URI"
  ""

  var link = d.createElement('link')
    , style_type =
    w.location.search.match(/print-pdf/gi)
    ? 'pdf'
    : 'paper'

  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href =
    '//cdn.jsdelivr.net/reveal.js/3.0.0/css/print/' + style_type + '.css'

  d.getElementsByTagName('head')[0].appendChild(link)  // add it to the DOM
})(document, window)
// vim: set ts=2 sw=2 sts=2 tw=0 et :
