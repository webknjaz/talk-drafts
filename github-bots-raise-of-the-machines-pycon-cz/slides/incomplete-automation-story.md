## Automate all the things

<center>
![](img/orly-accidentally-publishing-to-pypi.png)
<!-- .element: style="border: none;" -->
</center>

Note:

Oh,<br>
and this is only the beginning!

Let's see what happens next!

>>>>>

<!-- .slide: data-transition="slide-in fade-out" -->

<center>
![](img/stories/incomplete-automation/01-base-ci.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

You've heard (from a friend)<br>
that you can automate more things.<br>
Sounds fun...

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/02-add-cd.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

So you make your CI pipeline to also build and publish your
software whenever a Git tag is created.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/03-add-git-tag-trigger.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

Going further,<br>
you don't want to hardcode your software version in a text file.<br>
You set up the build scripts to reuse Git tag for that.

You can now relax and be happy about your little automation project.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/04-pipeline-triggered.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

It.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/05-lint-passed.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

Just.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/06-tests-passed.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

Works!

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/07-dist-published.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

Your job here is done!

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/08-manual-log-greneration-needed.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

One day,<br>
you integrate a change log generator tool —<br>
Towncrier.<br>
Now,<br>
your release workflow became a bit more complicated.<br>
Everyone, who submits a Pull Request,<br>
has to to additionally include a change note.<br>
And now, to do a release,<br>
maintainers should first<br>
manually run Towncrier to create a changelog,<br>
then commit the results<br>
and finally push a Git tag.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/09-somebody-pushed-a-tag.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

Next day,<br>
another maintainer pushes a new tag.<br>
But he doesn't know about the new release instuctions, yet.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/10-you-notice-it.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

You notice it!

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/11-you-try-to-contain-it.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

You open your CI/CD!<br>
and try chasing that job which builds and publishes your software!<br>
It's about to release an artifact without a changelog!

Maybe you are lucky<br>
and you've got to be faster than the automation.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/12-disaster-prevented.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

You cancel that job.<br>
You won this race and started quickily cleaning up the mess.<br>
You hope nobody noticed that embarrassing tag in the Git tree!<br>
Phew...! That was close!

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/13-too-late.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

But maybe not.<br>
Maybe the automation got faster than you and published that<br>
incomplete artifact.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/14-post-release.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

Oops!<br>
You'll have to do things properly now and publish a post-release.

By now, you must've realized<br>
that incomplete automation may be misleading.<br>
It can probably be more harmful to have incomplete automation<br>
than not to have it at all.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/15-rtfm.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

Partial automation of multi-step processes is still quite
vulnerable to human errors.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

<center>
![](img/stories/incomplete-automation/16-manual-steps-are-harmful.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note:

Automate all parts of your workflow so that nothing would be forgotten!
