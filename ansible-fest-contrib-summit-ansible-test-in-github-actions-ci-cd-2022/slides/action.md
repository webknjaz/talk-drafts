<!-- .slide: data-transition="slide-in fade-out" -->

# Action

* Encapsulates the environment setup seamlessly
* Integrated in the template
* Integrated with GH Docker services
* Coverage reporting
* Publishes nicely-looking outcome as job summary
* To be integrated in skeleton

Note: (1m55s)

Which is why I've started working on a GitHub Action encapsulating the
`ansible-test`-related configuration and runtime setup.
I got this idea when we were migrating the collections out of Core.

But I only started actively working on it a little over a year ago. I've
started adding it to some of the Ansible Community Collections to get
more feedback, more corner cases and experience running it in the wild.

With the help of the community, I've managed to make a sufficient amount
of improvements for the action to be integrated into the collection
template repository.

It includes all the things that were present in the collection template
and more. It adds a seamless integration with the Docker network that
GitHub creates for the services that the projects may request it to run.

It removes the need to hardcode the collection namespace and name by
reading this information from `galaxy.yml`.

On top of that, it's got a few bells and whistles now — after running
the tests, it publishes their outcome and coverage information to the
workflow summary page.

And more importantly, the improvements to the action are now available
to the collection projects immediately without having to synchronize
with the upstream template.

Oh, and it will eventually be included into the `ansible-core`'s default
collection skeleton too.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

# Action: sanity

```yaml
- name: >-
    Perform sanity testing against
    Ansible version ${{ matrix.ansible }}
  uses: ansible-community/ansible-test-gh-action@release/v1
  with:
    ansible-core-version: ${{ matrix.ansible }}
    testing-type: sanity
```
<!-- .element: style="font-size: 0.915em;" -->

Note: (8s)

Here's what a sanity testing invocation looks like. It's practically a
zero-configuration setup.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

# Action: units

```yaml
- name: >-
    Perform unit testing against
    Ansible version ${{ matrix.ansible }}
  uses: ansible-community/ansible-test-gh-action@release/v1
  with:
    ansible-core-version: ${{ matrix.ansible }}
    testing-type: units
```
<!-- .element: style="font-size: 0.915em;" -->

Note: (5s)

And unit testing doesn't look any more complicated than that.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

# Action: integration

```yaml
- name: >-
    Perform integration testing against
    Ansible version ${{ matrix.ansible }}
    under Python ${{ matrix.python }}
  uses: ansible-community/ansible-test-gh-action@release/v1
  with:
    ansible-core-version: ${{ matrix.ansible }}
    target-python-version: ${{ matrix.python }}
    testing-type: integration
```
<!-- .element: style="font-size: 0.915em;" -->

Note: (10s)

Finally, integaration testing tends to have a one more matrix factor
added. But other than that, it's pretty much straightforward.
