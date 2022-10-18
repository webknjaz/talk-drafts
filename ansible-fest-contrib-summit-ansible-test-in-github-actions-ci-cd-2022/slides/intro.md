<!-- .slide: data-transition="slide-in fade-out" -->

# Intro: local tests

```console
$ ansible-galaxy collection init contrib.summit
- Collection contrib.summit was created successfully
$ cd contrib/summit/
$ git init
Initialized empty Git repository in ~/src/contrib/summit/.git/
$ ansible-test [sanity|units|integration] --docker [--a-number-of-flags]
```
<!-- .element: style="font-size: 0.75em;" -->

Note: (37s)

Let's start by looking at a local setup. When creating a new Ansible
Collection project, one would run `ansible-galaxy collection init
contrib.summit`. It will create the default collection directory
structure, which is nested. So it's now necessary to change directory
to `contrib/summit`. And only then, it'll be possible to invoke
`ansible-test`. It has many runtime modes but the easiest to set up
is `--docker`.

>>>>>

# Intro: repo setup

* CI environment quirks — remember to use the correct working directory
  for all command invocations
* Know the right CLI flags for each of sanity, units, integration to be
  used in the CI environment
* CI job matrix needs to track what the supported `ansible-core`
  versions are as well which ranges of the Python runtime they support

Note: (35s)

Now, how do we configure the CI for the remote repository?
We'll need to figure out what `ansible-core` and Python versions we want
to test the collection against, run `ansible-test` in a way that it'd
pull in the test dependencies. Oh, and while configuring this we
shouldn't forget to set up the CI jobs to check out the collection under
test to a properly constructed directory layout.
