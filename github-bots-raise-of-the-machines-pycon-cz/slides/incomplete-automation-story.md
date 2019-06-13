## Automate all the things

<center>
![](img/orly-accidentally-publishing-to-pypi.png)
<!-- .element: style="border: none;" -->
</center>

Note: (2m24s‒2m30s)

TODO: Add flow diagrams

You've heard (from a friend)
that you can automate more things.
Sounds fun...
So you make your CI pipeline to also build and publish your
software whenever a Git tag is created.
Going further,
you don't want to hardcode your software version in a text file.
You set up the build scripts to reuse Git tag for that.

You can now relax and be happy about your little automation project.
Your job here is done!

One day,
you integrate a change log generator tool —
Towncrier.
Now,
your release workflow became a bit more complicated.
Everyone, who submits a Pull Request,
has to to additionally include a change note.
And now, to do a release,
maintainers should first
manually run Towncrier to create a changelog,
then commit the results
and finally push a Git tag.

Next day,
another maintainer pushes a new tag.
But he doesn't know about the new release instuctions, yet.
You notice it!
you open your CI/CD!
and try chasing that job which builds and publishes your software!
It's about to release an artifact without a changelog!

Maybe you are lucky
and you've got to be faster than the automation.
You cancel that job.
You won this race and started quickily cleaning up the mess.
You hope nobody noticed that embarrassing tag in the Git tree!
Phew...! That was close!

But maybe not.
Maybe the automation got faster than you and published that
incomplete artifact.
Oops!
You'll have to do things properly now and publish a post-release.


By now, you must've realized
that incomplete automation may be misleading.
It can probably be more harmful to have incomplete automation
than not to have it at all.

Partial automation of multi-step processes is still quite
vulnerable to human errors.

Automate all parts of your workflow so that nothing would be forgotten!

>>>>>

<!-- .slide: data-transition="slide-in fade-out" -->

<center>
![](img/stories/incomplete-automation/01-base-ci.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/02-add-cd.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/03-add-git-tag-trigger.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/04-pipeline-triggered.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/05-lint-passed.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/06-tests-passed.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/07-dist-published.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/08-manual-log-greneration-needed.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/09-somebody-pushed-a-tag.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/10-you-notice-it.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/11-you-try-to-contain-it.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/12-disaster-prevented.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/13-too-late.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/14-post-release.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/15-rtfm.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/16-manual-steps-are-harmful.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>
