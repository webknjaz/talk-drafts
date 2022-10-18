<!-- .slide: data-state="cover" -->
<!-- .#slide: data-state="alt title" -->
<!-- .#slide: data-background="#ff0000" -->

# Using [`ansible-test` action] under GitHub Actions CI/CD workflows

```diff
--- a/old-noisy-collection-template-ci-workflow
+++ b/new-workflow-with-ansible-test-action
- copy-and-paste driven
- entangled voodoo magic
- huge boilerplate
- maintenance burden and pain
+ maintenance made easy
+ uniform config
```
<!-- .element: style="font-size: 1em;" -->

<span style="display: block; text-align: right;">
_by [@webknjaz 🇺🇦]_
</span>

<footer>
  <center>
    <small>Ansible Contributor Summit 2022.10</small>
  </center>
</footer>
<!-- .element: style="padding-top: 1em;" -->

[`ansible-test` action]: https://github.com/marketplace/actions/ansible-test
[@webknjaz 🇺🇦]: https://github.com/sponsors/webknjaz

Note: (39s)

Hello!

Today, I'll be talking about testing collections under GitHub Actions
CI/CD. This presentation will be specifically scoped around Ansible
Collections that are hosted on GitHub and run testing on its native
continuous integration platform.

It's been... what, like 2 years, since the collection migration?
Almost 3? There are many community collections with established
development workflows. Yet, there's still room for the maintainer
experience improvement.

And here's what I've done to reduce some of that maintenance burden.
