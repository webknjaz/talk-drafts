<!-- .slide: data-transition="slide-in fade-out" -->

# "Batteries excluded"

```
$ python4.6
Python 4.6.2 (default, Jan 28 2049, 04:28:02)
[GCC 9.1.1] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import antigravity
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ModuleNotFoundError: No module named 'antigravity'
```
<!-- .element: style="font-size: 0.72396em;" -->

Note: (9s)

What does this mean for you?
When you'll import your favourite lib in 30 years from now,
it'll say you "Go Away!" with an `ImportError`.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

# "Batteries excluded"

<center>
![Slim stdlib](img/py_bunny_batteries_excluded.jpg)
</center>

Note: (3s)

Things, you are used to, may be gone.

-----

# 🐍 Python 0.9.0
## _(🐣 February 1991)_

<center>
![back to 1991](img/back-to-the-future.jpg)
</center>

Note: (7s)

Let's get back to the origins.
February 1991.
Python first saw the world.

>>>>>

<!-- .slide: data-transition="slide-in fade-out" -->

# Python distribution method

<center>
![](img/floppy-disk-500x500.jpg)
</center>

Note: (3s)

It was distributed like this.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

# Python distribution method

<center>
![](img/kisscc0-compact-disc-cd-rom-dvd-computer-optical-drives-cd-dvd-5b5f71aebf1270.2860211015329816787826.jpg)
</center>

Note: (1s)

Or this.

>>>>>

# Python in the XX century

<center>
![stdlib in the 90s](img/python_stdlib_battery.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note: (3s)

Core devs wanted to make it popular.

>>>>>

<!-- .slide: data-transition="slide-in fade-out" -->

# "Batteries included"

<center>
![](img/py_bunny_batteries_included.png)
<!-- .element: style="border: none; box-shadow: none;" -->
</center>

Note: (4s)

So they came up with a "batteries included" philosophy.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

# "Batteries included"

```
$ python3.7
Python 3.7.1 (default, Jan 28 2019, 08:25:13)
[GCC 7.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import antigravity
Created new window in existing browser session.
```
<!-- .element: style="font-size: 0.72396em;" -->

Note: (6s)

After installation,
users could import useful stuff right away.
Like `import antigravity`.

>>>>>

<!-- .slide: data-transition="fade-in fade-out" -->

# "Batteries included"

<center>
![XKCD #353 — import antigravity](img/xkcd-353-python.png)
<!-- .element: style="border: none;" -->
</center>

Note: (3s)

And it would just work.

-----

# Python in the XXI century
## Why didn’t you review my PR?

<center>
![](img/matrixise-core-devs-outnumbered.jpg)
<br>
_(by [@matrixise](https://speakerdeck.com/matrixise/python-loves-your-contributions?slide=58))_
</center>

Note: (8s)

But today Core Devs are hugely outnumbered.
For some very old libs you can wait for a review for over 500 days.

>>>>>


# “Kernel Python”

* [Twitter discussions](https://twitter.com/ChristianHeimes/status/1130257799475335169)
* [PEP 594 — Removing dead batteries from the standard library](https://www.python.org/dev/peps/pep-0594/)
* [Opinions @ discuss.python.org](https://discuss.python.org/t/pep-594-removing-dead-batteries-from-the-standard-library/1704)
* [Glyph: Toward a “Kernel Python”](https://glyph.twistedmatrix.com/2019/06/kernel-python.html)

Note: (s)

There's a number of proposals and PEPs to move maintanence of such stuff off CPython.
Check out these discussions and PEP 594.
