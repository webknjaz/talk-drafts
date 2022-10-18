<!-- .slide: data-transition="slide-in fade-out" -->

# Collection Repository Template

* Ready-to-go CI setup
* Codecov integration
* All the right `ansible-test` flags
* Currated CI job matrix definition
* Exposes a gate job for branch protection
* One-off, no sync from upstream

Note: (2m0s)

To address the mentioned challenges, an Ansible Collection Template
Repository has been created around the time of the original collection
migration.
It featured a bunch of commonly necessary configs for the metadata and
various project integrations.
With a single click, the new collection authors could have their own
repository with many things pre-configured. Except they needed to update
the metadata and some of the CI bits.
It features a currated matrix of supported `ansible-core` and Python
combinations and is regularly updated.
It makes sure that `ansible-test` produces coverage for all the testing
types, and that it's being sent over to Codecov.
It also runs `ansible-test` in the Docker mode which unifies testing
experience across CI and contributor development environments.

There's one flaw, though. Once created, the collections never get
improvements that are added to the template repository later.
There were missing `ansible-test` arguments, outdated codecov action and
matrix updates in the past that weren't downstreamed — only newer
collections got these improvements.
The only chance for the old collections to receive the same updates is
to somehow learn that they actually exist and need to be
copied-and-pasted. One can't just create a PR from the upstream
repository to a downstream one.
The only semi-automatic mechanism I can think of is to use
`git merge --allow-unrelated-histories`. Not the best solution, right?
