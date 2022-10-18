<!-- .slide: data-transition="slide-in fade-out" -->

# Problems

* Need to know the implementation details of the required collection
  checkout directory — the repositories aren't usually nested
* Need to integrate collection dependencies installation
* `sanity`, `units` and `integration` subcommands have different extra
  CLI options that are expected to be used in CI environments
* Having to watch the community testing best practices
* Copy-and-paste driven maintenance

Note: (36s)

It is evident that this is quite problematic to do on the scale by the
maintainers who want to focus on writing content and not memorizing the
special cases of CI setup. Do they really need to worry about editing
many small bits of automation post copy-and-paste? I bet they don't
really want to think about setting up coverage reporting or remember to
use the retry-on-failure options but only on integration tests.
