## Automations work while you’re on vacation

<center>
![](img/ooo.png)
<!-- .element: style="border: none;" -->
</center>

Note: (1m06s)

At some point you discover you can also react to actions<br>
that users perform on GitHub.<br>
You set up robots to help you greet first-timers<br>
when they submit their very first issue or a PR<br>
and thank to the merged PR authors.

After all hard maintenance work you deserve to take a break.<br>
So you're planning a vacation.<br>
You even set up a robot<br>
informing everyone who tries to tag you<br>
that you're not going to see that for a while.

You don't worry that your temporary absence will impact the project health.<br>
You're now confident that those tiny chatty robots are your friends!

It doesn't matter whether you closely pay attention to what's going on in your project<br>
or are taking some time off:<br>
properly set up bots will keep taking care of workflows<br>
even while you are away.

>>>>>

## Bots ease maintenance burden

<center>
![](img/too-many-issues.png)
<!-- .element: style="border: none;" -->
</center>
<center>
![](img/too-many-notifications.png)
<!-- .element: style="border: none;" -->
</center>

Note: (26s)

When your project is way more popular than your team can handle,<br>
you can empower the community to participate in maintenance.<br>
Parts of your project can be partially or even fully managed by community maintainers<br>
requiring zero attention from the Core team which **is** outnumbered.

This is how Ansible Core operates, by the way.<br>
But that's a story for another time...

>>>>>

## Other bot use-cases 🤖

* linting/autoformatting
* backporting
* facilitating release processes
* and much more! 🎉

Note: (17s)

Here's a few things you can use robots for.<br>
They can do linting or even autoformat your code.<br>
They can backport Pull Requests.<br>
They can help orchestrate your release processes.<br>
And so much more,<br>
their application is limited only by your imagination!

>>>>>

## The Future Is Now

<center>
![](img/robots-talking-on-gh.jpg)
<!-- .element: style="border: none;" -->
<em>(https://twitter.com/gabro27/status/1173547934132178944)</em>
</center>

Note: (48s)

Look at this!<br>
Three!!! Three(!) bots cooperate on GitHub<br>
in order to address a security vulnerability.<br>
The first one watches the dependency updates and CVEs.<br>
Once some security issue's been fixed,<br>
it sends a PR updating the dependency.<br>
The CI checks it and another bot does the merge.<br>
Oh, and look at **this**!<br>
There's a third bot that celebrates the fix with a GIF picture!

Isn't it the future we are looking for?

-----

# GitHub Apps to the rescue! 🤖

<!-- .slide: data-state="alt title" -->
<center>
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="130%" height="720.000000pt" viewBox="0 0 1280.000000 720.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,720.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M5340 6130 c-199 -17 -205 -18 -358 -97 -79 -40 -159 -84 -176 -97 -63 -48 -225 -120 -386 -172 -194 -64 -359 -101 -657 -149 -239 -39 -308 -55 -374 -85 -26 -11 -66 -20 -96 -20 -187 -1 -828 -128 -978 -195 -29 -12 -59 -32 -66 -43 -11 -15 -31 -22 -84 -27 -257 -26 -736 -141 -850 -204 -40 -22 -68 -29 -135 -34 -47 -3 -148 -21 -225 -41 -250 -63 -436 -141 -568 -238 -60 -45 -72 -59 -109 -135 -39 -81 -40 -88 -34 -151 8 -81 30 -130 86 -200 106 -132 380 -197 663 -157 211 29 465 103 516 149 14 13 24 14 57 4 55 -15 255 -4 384 22 214 42 439 112 509 157 21 14 68 16 303 17 153 1 278 0 278 -1 0 -1 -73 -93 -163 -205 -343 -426 -431 -583 -408 -725 13 -79 24 -106 73 -169 29 -37 57 -60 89 -74 28 -11 50 -29 54 -40 11 -36 112 -146 162 -177 26 -17 75 -41 109 -54 56 -21 63 -27 90 -78 57 -110 102 -169 147 -195 80 -47 288 -126 332 -126 40 0 41 -1 73 -66 70 -141 94 -170 179 -212 135 -67 179 -80 295 -86 295 -16 620 135 754 350 45 72 85 188 88 254 l1 35 255 7 c648 18 1079 71 1452 177 143 41 295 87 348 106 25 9 90 28 145 43 93 25 115 27 320 28 121 0 228 2 238 2 28 3 56 79 67 183 5 52 10 100 10 107 0 6 9 12 20 12 21 0 20 1 41 -145 16 -118 13 -115 125 -115 l95 0 14 34 c8 19 17 61 20 93 15 149 13 143 50 143 20 0 111 -35 237 -91 336 -151 301 -142 533 -141 110 1 238 4 285 8 l86 6 24 -76 c23 -73 23 -76 6 -95 -30 -33 -29 -94 7 -386 20 -154 38 -306 42 -337 6 -50 12 -63 49 -100 23 -24 59 -74 80 -113 46 -85 149 -193 231 -241 48 -29 72 -53 120 -122 417 -599 815 -773 1275 -560 148 69 266 157 585 438 332 293 571 452 984 660 l141 70 0 146 0 146 -187 -98 c-200 -104 -428 -234 -506 -290 -26 -19 -49 -34 -50 -34 -9 0 25 145 37 159 104 124 133 166 189 279 61 121 65 133 81 255 10 71 19 156 20 190 l1 62 35 6 c19 3 42 9 51 13 12 5 45 -28 131 -131 64 -76 134 -156 157 -178 l41 -39 0 80 c0 77 -1 82 -31 110 -17 16 -44 46 -61 66 l-29 37 56 -24 c30 -14 58 -25 60 -25 3 0 5 21 5 48 l-1 47 -84 39 c-47 22 -85 42 -85 46 0 4 17 19 38 34 28 19 51 26 85 26 l47 0 0 101 0 102 -221 -8 -222 -7 6 24 c4 12 7 29 7 36 0 8 19 12 63 12 35 0 132 3 215 7 l152 6 0 851 0 851 -77 -3 c-129 -4 -150 -14 -182 -81 l-27 -58 -23 61 c-44 115 -101 226 -124 239 -35 21 -228 8 -256 -18 -21 -18 -23 -18 -50 -2 -25 14 -45 15 -165 8 -157 -10 -168 -15 -191 -95 -8 -28 -23 -118 -34 -199 -11 -82 -22 -151 -24 -154 -3 -2 -38 5 -79 16 -115 32 -340 69 -498 81 -166 13 -369 6 -564 -20 l-128 -17 -14 33 c-29 69 -16 84 77 84 33 0 49 5 53 16 9 24 7 73 -5 95 -9 18 -17 19 -67 13 l-57 -6 -13 34 c-16 46 -51 63 -128 63 -74 0 -113 -23 -129 -74 -11 -37 -15 -38 -148 -44 -55 -2 -103 -9 -110 -16 -12 -12 -13 -83 -1 -103 5 -8 42 -9 125 -5 l117 6 6 -25 c4 -14 4 -41 0 -60 -6 -31 -9 -34 -43 -34 -67 0 -354 -20 -511 -35 -287 -29 -397 -50 -636 -125 -70 -22 -145 -40 -166 -40 -21 0 -38 -4 -38 -9 0 -13 -22 -20 -155 -47 -95 -20 -495 -76 -502 -70 0 0 -10 51 -21 113 -11 61 -26 124 -34 140 -13 27 -16 28 -100 31 -65 2 -89 -1 -101 -12 -15 -15 -21 -56 -33 -208 -5 -72 -9 -88 -23 -88 -13 0 -21 24 -39 118 -37 190 -59 218 -188 233 -259 30 -355 81 -924 485 -162 116 -353 250 -425 299 l-129 89 -211 63 c-228 68 -251 71 -465 53z m5701 -1030 c150 -12 388 -51 494 -81 39 -11 77 -22 86 -25 13 -4 14 -14 7 -65 -4 -34 -10 -64 -13 -68 -2 -4 -237 -6 -521 -3 -515 4 -517 4 -536 25 -25 30 -128 174 -128 180 0 9 166 30 295 37 72 4 142 7 156 8 14 1 86 -3 160 -8z m-969 -209 l3 -59 -65 -6 c-36 -3 -139 -8 -230 -11 -191 -7 -191 -7 4 73 86 35 129 47 191 52 44 4 83 8 87 8 3 1 8 -25 10 -57z m-734 -48 l-3 -48 -40 0 c-40 0 -40 0 -43 42 -3 42 -3 42 35 46 21 2 42 4 46 5 4 1 7 -19 5 -45z m-340 -50 c-4 -23 -68 -32 -68 -9 0 14 17 23 53 25 12 1 17 -5 15 -16z m2542 -493 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m-325 -30 c-10 -11 -26 -20 -35 -20 -9 0 -25 9 -35 20 -18 20 -17 20 35 20 52 0 53 0 35 -20z m-346 -14 l22 -24 -180 -7 c-98 -4 -184 -4 -190 -1 -6 4 -11 16 -11 26 0 18 10 20 118 23 64 1 140 4 168 5 42 2 54 -2 73 -22z m1609 -105 c-15 -5 -21 7 -13 26 7 17 8 17 15 -2 4 -11 3 -22 -2 -24z m-3775 -1 c-4 -5 -93 -11 -198 -14 -196 -5 -167 2 85 22 106 8 129 6 113 -8z m1993 -536 c-3 -9 -6 -24 -6 -35 0 -17 -8 -19 -71 -19 -69 0 -71 1 -65 23 3 12 6 28 6 35 0 8 21 12 71 12 61 0 70 -2 65 -16z m-1090 -49 c4 -14 3 -29 0 -33 -4 -3 -54 -8 -111 -10 l-105 -4 -10 27 c-6 15 -8 31 -4 36 3 5 54 9 114 9 109 0 110 0 116 -25z m-423 -18 c5 -16 7 -30 5 -33 -3 -2 -122 -5 -264 -7 -256 -2 -260 -2 -319 23 l-60 25 70 3 c584 25 556 25 568 -11z m451 -267 c11 -84 6 -80 122 -80 99 0 105 1 113 23 7 18 10 12 16 -33 4 -30 14 -65 22 -78 13 -22 20 -23 95 -20 l81 3 12 -75 c7 -41 18 -127 24 -190 22 -210 32 -259 59 -291 30 -36 81 -59 133 -59 38 0 39 0 74 -77 20 -43 45 -88 57 -100 27 -29 79 -39 118 -23 37 15 92 100 120 186 l21 61 52 7 c107 12 101 16 121 -76 10 -46 33 -137 52 -203 30 -100 41 -125 67 -147 18 -15 38 -28 45 -28 6 0 12 -3 12 -8 0 -13 -209 -62 -315 -73 -248 -27 -608 35 -813 140 -52 27 -78 79 -74 151 3 49 -2 71 -38 156 -88 204 -146 405 -175 592 -15 104 -42 151 -100 179 -30 14 -82 93 -69 106 2 2 40 5 83 6 l78 2 7 -51z m2456 -319 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0 10 -4 10 -9z m-1527 -141 c3 -13 0 -20 -9 -20 -8 0 -14 10 -14 26 0 28 15 25 23 -6z m235 3 c3 -21 0 -23 -47 -23 -28 0 -51 4 -51 9 0 5 -3 17 -6 26 -6 14 1 16 47 13 47 -3 54 -6 57 -25z m-228 -299 c0 -18 -54 -123 -60 -119 -5 3 -15 25 -23 49 -15 43 -15 45 6 60 22 15 77 22 77 10z m1150 -452 c0 -8 -138 -134 -300 -273 -279 -242 -517 -348 -755 -336 -67 3 -122 12 -165 27 -76 27 -195 108 -261 177 -67 71 -111 125 -106 129 2 3 26 0 53 -7 111 -25 306 -37 444 -28 258 19 489 85 770 223 91 44 183 83 205 87 61 9 115 10 115 1z"/></g></svg>
</center>

Note: (13s)

Now,
let's take a look at what GitHub ecosystem actually has to offer us!<br>
We are interested in GitHub Apps, in particular,<br>
as they provide first-class support for bots!

>>>>>

## GitHub Apps: installable thus reusable

<center>
![](img/chronographer-bot-install.png)
<!-- .element: style="border: none;" -->
</center>

Note: (36s)

When you install a GitHub App,<br>
first, you need to select where you want to install it.<br>
This may be either a user account or an organization.<br>
The installation creates a kind of bond —<br>
a unique connection of the profile chosen and an App instance.<br>
This means that whenever you develop a GitHub App,<br>
it is not exclusive to a single user account or a single repository,<br>
it can be installed into more profiles without any need to be deployed separately.

>>>>>

## GitHub Apps: more granular privileges

<center>
![](img/install-chronographer-granular-permissions.png)
<!-- .element: style="border: none;" -->
</center>

Note: (23s)

GitHub Apps have advanced access control management,<br>
compared to other integration methods.<br>
App defines which privileges it needs<br>
and they are shown to the user who is installing it.<br>
It is also possible to restrict App access to only selected subset of repositories.<br>
You don't have to expose things you don't want to!

>>>>>

## GitHub Apps: don't pretend to be humans

(no need for a dedicated user account)

<center>
![](img/no-response-bot.png)
<!-- .element: style="border: none;" -->
</center>

Note: (51s)

When using a GitHub App,<br>
its primary interaction method is acting "as a bot".<br>
When app posts things like issues,<br>
pull requests<br>
or comments,<br>
GitHub UI puts a `[bot]` label next to the name of the GitHub App,<br>
which created those.<br>
It is clearly distinguishable when some action was done by a GitHub App.<br>
An App does not require a dedicated user account to operate.<br>
Yet, if an App needs to perform some actions on behalf of a user,<br>
it should authenticate them using OAuth2 flow to be able to do so.<br>
User authentication also has a restricted privileges set attached to it.

>>>>>

## GitHub Apps: rate limiting is per installation

<!--
```http
HTTP/1.1 403 Forbidden
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 403 Forbidden
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266
{
   "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
   "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
```
-->
<center>
<!-- ![](http://beamusup.com/wp-content/uploads/2014/03/rate-limit-exceeded.png) -->
![](img/rate-limit-exceeded.png)
<!-- .element: style="border: none;" -->
<!-- ![](https://http.cat/429)-->
<!-- .element: style="border: none;" -->
</center>

Note: (20s)

Each GitHub App installation gets a dedicated rate limit,<br>
which is completely separate from other installations.<br>
Unlike GitHub Apps,<br>
OAuth tokens issued for user accounts,<br>
have just one overall rate limit.<br>
So please,<br>
stop using bot accounts in favor of proper GitHub Apps!

>>>>>

## GitHub Apps: can listen to events

<center>
![](img/github-app-events.png)
<!-- .element: style="border: none;" -->
</center>

Note: (41s)

Since bots are supposed to be reactive,<br>
they need a way to know what's happening on GitHub.<br>
GitHub App developer selects a number of events,<br>
which fit the previously chosen permissions.<br>
GitHub platfrom will then send events of those types,<br>
using webhooks.<br>
This technology, in essense,<br>
is just HTTP POST requests to the URL set in the App settings.<br>
Those HTTP requests contain JSON payload with event data.<br>
Typically, such a web app would react to those events.<br>
It will probably also hit GitHub APIs,<br>
while processing them.

>>>>>

## GitHub Apps: can use more APIs than other types

<center>
![](https://developer.github.com/assets/images/github-apps/github_apps_checks_api_success.png)
<!-- .element: style="border: none;" -->
</center>

Note: (21s)

By choosing to use GitHub Apps,<br>
you also get access to some of the APIs,<br>
which are not available otherwise.<br>
One example of such API is Checks API,<br>
which has many powerful features.<br>
It lets you embed the results of your App activity<br>
right into the GitHub UI!

-----

# GitHub Apps: demo time ⏲

<!-- .slide: data-state="alt title" -->
<center>
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="130%" height="720.000000pt" viewBox="0 0 1280.000000 720.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,720.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M5340 6130 c-199 -17 -205 -18 -358 -97 -79 -40 -159 -84 -176 -97 -63 -48 -225 -120 -386 -172 -194 -64 -359 -101 -657 -149 -239 -39 -308 -55 -374 -85 -26 -11 -66 -20 -96 -20 -187 -1 -828 -128 -978 -195 -29 -12 -59 -32 -66 -43 -11 -15 -31 -22 -84 -27 -257 -26 -736 -141 -850 -204 -40 -22 -68 -29 -135 -34 -47 -3 -148 -21 -225 -41 -250 -63 -436 -141 -568 -238 -60 -45 -72 -59 -109 -135 -39 -81 -40 -88 -34 -151 8 -81 30 -130 86 -200 106 -132 380 -197 663 -157 211 29 465 103 516 149 14 13 24 14 57 4 55 -15 255 -4 384 22 214 42 439 112 509 157 21 14 68 16 303 17 153 1 278 0 278 -1 0 -1 -73 -93 -163 -205 -343 -426 -431 -583 -408 -725 13 -79 24 -106 73 -169 29 -37 57 -60 89 -74 28 -11 50 -29 54 -40 11 -36 112 -146 162 -177 26 -17 75 -41 109 -54 56 -21 63 -27 90 -78 57 -110 102 -169 147 -195 80 -47 288 -126 332 -126 40 0 41 -1 73 -66 70 -141 94 -170 179 -212 135 -67 179 -80 295 -86 295 -16 620 135 754 350 45 72 85 188 88 254 l1 35 255 7 c648 18 1079 71 1452 177 143 41 295 87 348 106 25 9 90 28 145 43 93 25 115 27 320 28 121 0 228 2 238 2 28 3 56 79 67 183 5 52 10 100 10 107 0 6 9 12 20 12 21 0 20 1 41 -145 16 -118 13 -115 125 -115 l95 0 14 34 c8 19 17 61 20 93 15 149 13 143 50 143 20 0 111 -35 237 -91 336 -151 301 -142 533 -141 110 1 238 4 285 8 l86 6 24 -76 c23 -73 23 -76 6 -95 -30 -33 -29 -94 7 -386 20 -154 38 -306 42 -337 6 -50 12 -63 49 -100 23 -24 59 -74 80 -113 46 -85 149 -193 231 -241 48 -29 72 -53 120 -122 417 -599 815 -773 1275 -560 148 69 266 157 585 438 332 293 571 452 984 660 l141 70 0 146 0 146 -187 -98 c-200 -104 -428 -234 -506 -290 -26 -19 -49 -34 -50 -34 -9 0 25 145 37 159 104 124 133 166 189 279 61 121 65 133 81 255 10 71 19 156 20 190 l1 62 35 6 c19 3 42 9 51 13 12 5 45 -28 131 -131 64 -76 134 -156 157 -178 l41 -39 0 80 c0 77 -1 82 -31 110 -17 16 -44 46 -61 66 l-29 37 56 -24 c30 -14 58 -25 60 -25 3 0 5 21 5 48 l-1 47 -84 39 c-47 22 -85 42 -85 46 0 4 17 19 38 34 28 19 51 26 85 26 l47 0 0 101 0 102 -221 -8 -222 -7 6 24 c4 12 7 29 7 36 0 8 19 12 63 12 35 0 132 3 215 7 l152 6 0 851 0 851 -77 -3 c-129 -4 -150 -14 -182 -81 l-27 -58 -23 61 c-44 115 -101 226 -124 239 -35 21 -228 8 -256 -18 -21 -18 -23 -18 -50 -2 -25 14 -45 15 -165 8 -157 -10 -168 -15 -191 -95 -8 -28 -23 -118 -34 -199 -11 -82 -22 -151 -24 -154 -3 -2 -38 5 -79 16 -115 32 -340 69 -498 81 -166 13 -369 6 -564 -20 l-128 -17 -14 33 c-29 69 -16 84 77 84 33 0 49 5 53 16 9 24 7 73 -5 95 -9 18 -17 19 -67 13 l-57 -6 -13 34 c-16 46 -51 63 -128 63 -74 0 -113 -23 -129 -74 -11 -37 -15 -38 -148 -44 -55 -2 -103 -9 -110 -16 -12 -12 -13 -83 -1 -103 5 -8 42 -9 125 -5 l117 6 6 -25 c4 -14 4 -41 0 -60 -6 -31 -9 -34 -43 -34 -67 0 -354 -20 -511 -35 -287 -29 -397 -50 -636 -125 -70 -22 -145 -40 -166 -40 -21 0 -38 -4 -38 -9 0 -13 -22 -20 -155 -47 -95 -20 -495 -76 -502 -70 0 0 -10 51 -21 113 -11 61 -26 124 -34 140 -13 27 -16 28 -100 31 -65 2 -89 -1 -101 -12 -15 -15 -21 -56 -33 -208 -5 -72 -9 -88 -23 -88 -13 0 -21 24 -39 118 -37 190 -59 218 -188 233 -259 30 -355 81 -924 485 -162 116 -353 250 -425 299 l-129 89 -211 63 c-228 68 -251 71 -465 53z m5701 -1030 c150 -12 388 -51 494 -81 39 -11 77 -22 86 -25 13 -4 14 -14 7 -65 -4 -34 -10 -64 -13 -68 -2 -4 -237 -6 -521 -3 -515 4 -517 4 -536 25 -25 30 -128 174 -128 180 0 9 166 30 295 37 72 4 142 7 156 8 14 1 86 -3 160 -8z m-969 -209 l3 -59 -65 -6 c-36 -3 -139 -8 -230 -11 -191 -7 -191 -7 4 73 86 35 129 47 191 52 44 4 83 8 87 8 3 1 8 -25 10 -57z m-734 -48 l-3 -48 -40 0 c-40 0 -40 0 -43 42 -3 42 -3 42 35 46 21 2 42 4 46 5 4 1 7 -19 5 -45z m-340 -50 c-4 -23 -68 -32 -68 -9 0 14 17 23 53 25 12 1 17 -5 15 -16z m2542 -493 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m-325 -30 c-10 -11 -26 -20 -35 -20 -9 0 -25 9 -35 20 -18 20 -17 20 35 20 52 0 53 0 35 -20z m-346 -14 l22 -24 -180 -7 c-98 -4 -184 -4 -190 -1 -6 4 -11 16 -11 26 0 18 10 20 118 23 64 1 140 4 168 5 42 2 54 -2 73 -22z m1609 -105 c-15 -5 -21 7 -13 26 7 17 8 17 15 -2 4 -11 3 -22 -2 -24z m-3775 -1 c-4 -5 -93 -11 -198 -14 -196 -5 -167 2 85 22 106 8 129 6 113 -8z m1993 -536 c-3 -9 -6 -24 -6 -35 0 -17 -8 -19 -71 -19 -69 0 -71 1 -65 23 3 12 6 28 6 35 0 8 21 12 71 12 61 0 70 -2 65 -16z m-1090 -49 c4 -14 3 -29 0 -33 -4 -3 -54 -8 -111 -10 l-105 -4 -10 27 c-6 15 -8 31 -4 36 3 5 54 9 114 9 109 0 110 0 116 -25z m-423 -18 c5 -16 7 -30 5 -33 -3 -2 -122 -5 -264 -7 -256 -2 -260 -2 -319 23 l-60 25 70 3 c584 25 556 25 568 -11z m451 -267 c11 -84 6 -80 122 -80 99 0 105 1 113 23 7 18 10 12 16 -33 4 -30 14 -65 22 -78 13 -22 20 -23 95 -20 l81 3 12 -75 c7 -41 18 -127 24 -190 22 -210 32 -259 59 -291 30 -36 81 -59 133 -59 38 0 39 0 74 -77 20 -43 45 -88 57 -100 27 -29 79 -39 118 -23 37 15 92 100 120 186 l21 61 52 7 c107 12 101 16 121 -76 10 -46 33 -137 52 -203 30 -100 41 -125 67 -147 18 -15 38 -28 45 -28 6 0 12 -3 12 -8 0 -13 -209 -62 -315 -73 -248 -27 -608 35 -813 140 -52 27 -78 79 -74 151 3 49 -2 71 -38 156 -88 204 -146 405 -175 592 -15 104 -42 151 -100 179 -30 14 -82 93 -69 106 2 2 40 5 83 6 l78 2 7 -51z m2456 -319 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0 10 -4 10 -9z m-1527 -141 c3 -13 0 -20 -9 -20 -8 0 -14 10 -14 26 0 28 15 25 23 -6z m235 3 c3 -21 0 -23 -47 -23 -28 0 -51 4 -51 9 0 5 -3 17 -6 26 -6 14 1 16 47 13 47 -3 54 -6 57 -25z m-228 -299 c0 -18 -54 -123 -60 -119 -5 3 -15 25 -23 49 -15 43 -15 45 6 60 22 15 77 22 77 10z m1150 -452 c0 -8 -138 -134 -300 -273 -279 -242 -517 -348 -755 -336 -67 3 -122 12 -165 27 -76 27 -195 108 -261 177 -67 71 -111 125 -106 129 2 3 26 0 53 -7 111 -25 306 -37 444 -28 258 19 489 85 770 223 91 44 183 83 205 87 61 9 115 10 115 1z"/></g></svg>
</center>

Note: (5s)

Let's take a look at a few examples of GitHub Apps usage.

>>>>>

## check-in: CLI for hitting Checks API 💻

```
$ pip install check-in
```
<!-- .element: class="fragment" -->

Note: (57s)

When GitHub first announced Checks API,<br>
I was very excited and wanted to try it out.<br>
I started looking into it and realized<br>
that it required a type of integration I wasn't familiar with back then —<br>
GitHub Apps.
I also found out that most of CIs don't support it natively<br>
and wanted to work around this.<br>
I still wanted to be able to post my test outcomes from within CI jobs to this new shiny API.<br>
So I've created this CLI for publishing things to Checks API.<br>
It needed a few hacks with pygithub wrapper<br>
but I've got it working.<br>
And now, you can try out this API using just CLI and proper credentials.<br>
I've never got to use it in CIs, though.

>>>>>

## check-in: Checks Page 💻

<center>
![](img/checks-api-check-in.png)
<!-- .element: style="border: none;" -->
</center>

Note: (30s)

Look! You can use it to put kittens on GitHub!

On the left, you can see dedicated sections for GitHub Apps.<br>
They are called Check Suites.<br>
There's a number of named Check Runs under each.<br>
On the right, there's a content related to the selected Check.<br>
You can see a test outcome,<br>
a button,<br>
a picture,<br>
some Markdown-formatted description<br>
and an annotation.

You can customize all of it!

>>>>>

## ansiwatch: enforce Ansible content compliance Ⓐ

<center>
![](img/checks-api-ansiwatch.png)
<!-- .element: style="border: none;" -->
</center>

Note: (10s)

Next, I've wrapped a CLI linter tool and exercised Annotations generation.<br>
It's a way to attach linter messages right to the appropriate lines in diff.

>>>>>

## chronographer: journaling the history 🗃

<center>
![](img/checks-api-chronographer-success.png)
<!-- .element: style="border: none;" -->
</center>

Note: (32s)

Then,<br>
a while back I've researched rewriting Pip's legacy PR linter integration.<br>
It enforces changelog fragments to be always present in Pull Requests.<br>
As a result,<br>
I wrote chronographer app which is about to be used by a few projects in the Python ecosystem.

Here's how its successful outcome report looks!

If a submitter has added a change fragment in their PR,<br>
this page will show them that everything's fine.

>>>>>

## chronographer: journaling the history 🗃

<center>
![](img/checks-api-chronographer-failure.png)
<!-- .element: style="border: none;" -->
</center>

Note: (32s)

Now, look at the failure.<br>
The PR author forgot to add a change fragment.

This patch is going to be missed in the release changelog.<br>
It's all well-visible in the UI which also has text details on what's happened.

Checks API allows us to be more illustrative and improve the UX in creative ways!

It also provides ways to request rerunning checks right from the GitHub UI!

-----

# How to write a bot with<br>GitHub Apps

<!-- .slide: data-state="alt title" -->

Note: (3s)

Let's talk about how to write such application in general.

>>>>>

## GitHub Apps: main lifecycle/workflow

<center>
![](img/gh-app-lifecycle.sequence.svg)
<!-- .element: style="border: none;" -->
</center>

Note: (25s)
Essentially, GitHub App is a web application<br>
and the processing loop is fairly simple:
* Once something happens, GitHub sends an event using HTTP POST to the
  URL we've specified when setting up the app
* Our web-app then accepts it and invokes an event handler
* The handler evaluates the logic and pokes GitHub API if needed

>>>>>

## Writing GitHub Apps: problems

* low-level half-baked frameworks
* 99% of copy-paste to set up a basic web-app with routing
* API communication mismatches

Note: (16s)

There's several problems I was observing with creating GitHub Apps in Python ecosystem.

Like frameworks requiring a lot of boilerplate because of being too low-level.

Or, GitHub sending data in inconsistent format in some cases.

>>>>>

## Writing GitHub Apps: advices

* UNIX-way: bot should solve one problem but in a good way
* check out prior art
* use high-level frameworks

Note: (10s)

When writing GitHub Apps I'd advice avoiding creation of big monoliths,<br>
thinking about app structure upfront<br>
and checking what others did.

>>>>>

## GitHub Apps: framework wishes

* Abstract away:
  * GitHub event dispatching
  * Installations auth
  * JWT auth
* Provide helpers for typical problems

Note: (14s)

For me,<br>
the ideal framework should at least abstract away repeatable and low-level things.<br>
It should take care of the auth internally<br>
and provide helper functions and decorators for dealing with generic tasks.

>>>>>

## [`octomachinery`](https://octomachinery.dev): fantastic beast

What if we could just do this?

```python
...

@process_event_actions('issue_comment', {'created'})
@process_webhook_payload
async def on_comment(*, action, issue, comment, installation, changes=None):

    github_api = RUNTIME_CONTEXT.app_installation_client

    await github_api.do_smth( ... )
```
```python
from octomachinery.app.server.runner import run as run_app
...
run_app()
```

Note: (35s)

Can the UX of developing a bot look like this?<br>
Could it be enough to have just this code snippet<br>
for a bot to react to a new comment?

Yes, it's all you need to start.<br>
Since there was no higher-level solution I've decided to write my own.<br>
I was aiming for simplicity and it looks like I achieved something here.

So hey —<br>
it looks like it's getting easier to write GitHub bots in Python over time :)

-----

# GitHub Actions: GitHub Apps Serverless?

<!-- .slide: data-state="alt title" -->

Note: (16s)

GitHub Apps are great<br>
but what if I told you that in some cases<br>
you could avoid maintaining a web-app deployment?<br>
It became possible with introduction of GitHub Actions last fall!<br>
Let's take a closer look.

>>>>>

## GitHub Actions: CI/CD Lego

<center>
  ![](img/actions-log-animation.gif)
  <!-- .element: style="border: none;" -->
  <em>
    <small>
      (img src: https://techcrunch.com/2019/08/08/github-actions-is-now-a-ci-cd-service/)
    </small>
  </em>
</center>

Note: (40s)

GitHub now allows to process reactions to some events within their own<br>
infrastructure in a virtualized environment!<br>
It remindes me of the Serverless concept.<br>
Users define workflows which are collections of subsequent steps triggered by selected events.<br>
Workflow steps may contain actions which are reusable and sharable building blocks.

So all we need to do<br>
is to wrap our application into an Action.<br>
Then, we have to teach it to read the event data
and GitHub access token from within that environment.

>>>>>

## GitHub Actions: chronographer 🗃

<center>
![](img/actions-chronographer-failure.png)
<!-- .element: style="border: none;" -->
</center>

Note: (13s)

Here's an example of Chronographer running as an Action!<br>
The difference is that it uses a check suite of the GitHub Actions,<br>
not GitHub App's one.

You can see it on the left.

>>>>>

<center>
## GitHub Actions: Beta access 🗃

# https://github.com/features/actions/signup
<!-- .element: style="font-size: 1.55em;" -->
</center>
&nbsp;

Note: (6s)

This feature isn't yet enabled for everyone.<br>
Register here, if you want to try it out.<br>
You'll get access immediatelly.

-----

# Key takeaways

* Automate all the things: partial automation is harmful
* GitHub has a variety of Apps and Actions in the Marketplace,
  and you can write your own
* GitHub Actions are like Lego for your CI: make your custom workflow

<!-- .#slide: data-state="alt title" -->

Note: (13s)

In conclusion:

Always do complete automation.<br>
Use Apps from GitHub Marketplace.<br>
Develop your own if nothing fits.<br>
GitHub Actions often can perfectly fit in your workflow.

-----

## Resources

* https://octomachinery.dev
* https://github.com/sanitizers/chronographer-github-app
* https://github.com/webknjaz/ansiwatch-bot
* https://github.com/webknjaz/check-in
* https://developer.github.com/apps/
* https://github.community/t5/GitHub-API-Development-and/bd-p/api
* https://developer.github.com/actions/
* https://github.com/features/actions/signup

Note: (3s)

Here's some resources you can check out to learn more!

-----

<center>
# Q&A
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="300.000000pt" viewBox="0 0 1280.000000 460.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,460.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1300 4479 c-89 -18 -140 -47 -140 -80 0 -11 -9 -24 -20 -31 -11 -7 -20 -17 -20 -22 0 -5 -18 -28 -40 -52 -22 -24 -46 -55 -52 -69 -6 -14 -17 -25 -24 -25 -28 0 -48 -71 -48 -175 0 -112 19 -175 53 -175 11 0 21 -9 25 -23 3 -12 26 -46 51 -75 25 -30 45 -56 45 -58 0 -12 -32 -1 -49 17 -15 16 -26 19 -50 14 -17 -4 -31 -12 -31 -20 0 -7 -17 -16 -37 -20 -107 -19 -156 -68 -156 -152 0 -24 -2 -43 -4 -43 -3 0 -19 11 -37 25 -18 14 -36 22 -39 19 -3 -4 -18 8 -33 25 -37 44 -99 73 -163 77 -162 9 -280 -172 -211 -323 18 -41 18 -43 1 -52 -12 -7 -21 -32 -30 -91 -7 -45 -15 -88 -17 -95 -7 -17 44 -45 83 -46 20 -1 23 -3 9 -6 -47 -12 -57 -53 -13 -53 16 -1 9 -8 -25 -26 -29 -15 -59 -41 -75 -66 -25 -37 -28 -51 -29 -134 -2 -103 -13 -130 -60 -143 -26 -7 -31 -16 -56 -102 -19 -64 -30 -128 -35 -200 -5 -98 -4 -107 14 -120 16 -11 21 -30 26 -96 7 -94 23 -137 63 -175 29 -27 123 -58 177 -58 64 0 107 44 122 123 7 37 7 37 -27 37 -19 0 -56 -7 -83 -16 -46 -16 -49 -16 -62 1 -15 22 -17 44 -4 64 8 13 16 12 51 -4 45 -20 104 -25 119 -9 6 5 6 28 0 59 -16 78 -3 150 33 191 19 22 41 67 58 122 l28 87 -24 26 c-13 14 -24 29 -24 34 0 4 20 29 44 55 69 74 79 134 34 223 -10 21 -15 43 -11 50 4 6 9 27 13 46 5 32 8 35 39 35 l35 1 13 70 c8 39 12 87 9 107 -3 28 1 41 18 57 12 12 30 21 39 21 9 0 17 7 17 15 0 8 4 15 8 15 5 0 14 -60 20 -132 12 -137 53 -340 73 -364 6 -8 20 -14 30 -14 29 0 25 -55 -6 -92 -52 -61 -55 -150 -9 -220 24 -38 31 -68 15 -68 -4 0 -8 -10 -7 -22 1 -17 -17 -36 -71 -77 -84 -62 -93 -81 -93 -206 0 -44 -5 -107 -10 -140 -17 -103 -42 -409 -36 -439 7 -35 -19 -302 -41 -409 -19 -99 -23 -281 -6 -298 7 -7 16 -10 19 -6 4 3 13 57 21 119 26 213 23 202 66 209 42 7 45 0 22 -52 -12 -29 -14 -31 -15 -11 0 38 -24 20 -32 -24 -3 -21 -12 -64 -18 -94 -7 -30 -13 -77 -14 -105 -2 -43 -5 -50 -24 -53 -16 -3 -25 -15 -35 -50 -12 -40 -18 -47 -48 -54 -147 -34 -220 -103 -307 -287 -36 -77 -45 -214 -14 -230 32 -17 197 -41 332 -48 195 -9 513 26 548 61 9 8 15 64 19 180 l6 167 -36 37 c-35 37 -36 38 -33 113 1 41 5 80 9 85 3 5 11 76 18 158 7 81 15 142 19 134 4 -7 2 -76 -5 -153 -6 -77 -10 -142 -8 -144 2 -3 10 2 18 10 23 23 35 108 45 329 10 208 21 317 41 425 6 33 8 94 5 135 -7 89 9 281 29 331 8 20 17 71 21 113 6 62 4 80 -10 102 -10 14 -20 23 -23 21 -2 -3 -10 -65 -18 -137 -8 -89 -17 -135 -26 -141 -17 -11 -66 -12 -73 -1 -9 15 23 45 44 39 11 -3 20 -4 20 -4 1 1 7 65 14 142 l13 140 -31 33 c-21 22 -30 41 -28 58 2 13 -1 24 -7 24 -15 0 -2 30 31 68 16 18 26 37 23 42 -12 19 17 20 71 1 53 -17 61 -18 103 -4 25 8 54 17 64 20 12 4 17 0 17 -15 0 -11 13 -34 29 -51 40 -43 37 -99 -8 -145 l-31 -32 11 -119 c14 -161 15 -164 39 -158 14 4 26 -1 35 -13 17 -24 11 -34 -21 -34 -53 0 -61 13 -68 107 -4 48 -9 110 -13 136 -6 47 -6 47 -26 30 -17 -16 -19 -27 -14 -105 3 -48 12 -102 21 -120 18 -41 29 -161 30 -348 1 -82 6 -160 13 -180 13 -39 33 -283 33 -400 0 -146 27 -300 53 -300 10 0 5 120 -10 247 -3 31 -2 53 4 53 5 0 14 -63 21 -141 6 -78 16 -147 22 -155 7 -8 9 -22 4 -36 -4 -13 -7 -27 -5 -33 14 -49 7 -81 -26 -120 l-35 -40 5 -169 c4 -130 8 -171 20 -183 8 -8 66 -24 128 -35 157 -28 488 -30 634 -4 142 26 136 20 129 124 -6 79 -11 96 -57 184 -73 143 -130 195 -251 228 -53 15 -59 20 -71 53 -13 39 -32 67 -43 65 -26 -3 -35 3 -24 14 16 16 15 57 -3 92 -8 15 -15 50 -15 76 0 51 -17 110 -31 110 -5 0 -9 -10 -9 -22 -1 -19 -3 -17 -15 11 -23 52 -20 59 22 52 42 -7 36 15 63 -205 16 -137 26 -155 50 -96 10 25 10 55 1 150 -7 65 -16 133 -21 149 -13 47 -42 361 -36 387 7 25 -17 316 -34 419 -5 33 -10 98 -10 145 -1 102 -13 160 -37 177 -10 7 -23 16 -29 20 -5 4 -30 18 -55 31 -24 12 -34 15 -21 6 31 -23 28 -34 -6 -22 -24 9 -28 16 -28 47 1 20 5 42 9 49 5 7 4 12 -2 12 -18 0 -13 25 15 73 40 73 30 185 -22 228 -8 6 -14 27 -14 45 0 28 4 34 21 34 26 0 41 36 68 161 17 81 40 266 41 334 1 19 1 19 14 3 7 -10 20 -18 28 -18 19 0 59 -55 48 -66 -4 -5 -1 -51 8 -102 l16 -93 36 3 c31 3 35 0 36 -22 1 -14 6 -37 12 -51 8 -21 7 -32 -8 -54 -47 -72 -33 -160 36 -230 37 -38 43 -49 34 -65 -6 -10 -17 -23 -25 -27 -24 -14 26 -174 72 -230 l36 -43 -5 -104 -5 -104 28 -6 c28 -5 64 2 112 25 24 11 30 11 38 -2 13 -20 11 -42 -4 -64 -13 -17 -16 -17 -62 -1 -27 9 -64 16 -82 16 -28 0 -33 -4 -33 -23 0 -35 42 -110 70 -125 31 -16 124 -9 177 13 83 35 113 89 118 216 2 52 7 71 24 88 15 15 21 33 21 65 0 69 -19 186 -43 272 -21 71 -25 78 -56 89 -51 17 -59 35 -53 115 8 110 -32 186 -123 233 -25 14 -27 16 -9 17 11 0 23 3 27 6 12 12 -18 44 -42 44 -34 0 -22 8 19 14 77 10 79 15 56 144 -8 45 -20 77 -30 85 -16 12 -16 15 3 57 24 53 26 112 6 169 -35 100 -98 144 -205 145 -74 0 -114 -16 -173 -73 -21 -20 -41 -36 -45 -35 -17 2 -41 -9 -46 -22 -11 -28 -26 -13 -26 27 0 84 -41 129 -139 150 -30 6 -51 16 -51 24 0 7 -14 16 -31 20 -24 5 -35 2 -50 -14 -17 -18 -49 -29 -49 -17 0 2 23 32 50 66 28 34 50 69 50 76 0 8 9 14 19 14 14 0 25 14 38 48 38 99 13 302 -38 302 -10 0 -19 7 -19 15 0 8 -29 50 -65 94 -36 44 -65 87 -65 96 0 48 -170 95 -270 74z m-5 -889 c-3 -5 -13 -10 -21 -10 -8 0 -14 5 -14 10 0 6 9 10 21 10 11 0 17 -4 14 -10z m175 0 c0 -5 -9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9 10 20 10 11 0 20 -4 20 -10z m-670 -196 c0 -21 -4 -33 -10 -29 -5 3 -10 19 -10 36 0 16 5 29 10 29 6 0 10 -16 10 -36z m1140 0 c0 -21 -4 -33 -10 -29 -5 3 -10 19 -10 36 0 16 5 29 10 29 6 0 10 -16 10 -36z m35 -124 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-1420 -341 c12 -19 -3 -22 -27 -5 l-22 16 21 0 c12 0 25 -5 28 -11z m1644 -8 c-17 -13 -26 -16 -31 -8 -8 13 9 27 36 27 16 0 15 -2 -5 -19z m-1279 -634 c0 -14 -49 -42 -57 -34 -4 4 45 47 53 47 2 0 4 -6 4 -13z m310 -78 c0 -23 -4 -29 -21 -29 -16 0 -19 4 -14 21 5 15 1 25 -14 35 -11 8 -18 21 -15 29 11 27 64 -20 64 -56z m328 30 c-10 -6 -18 -21 -18 -34 0 -18 -5 -25 -20 -25 -28 0 -27 47 2 77 20 21 23 22 37 8 15 -15 14 -17 -1 -26z m-734 -106 c-4 -32 -7 -60 -6 -63 0 -43 4 -60 12 -60 6 0 10 6 10 14 0 8 4 18 10 21 9 6 8 -16 -6 -82 -4 -24 -19 -29 -41 -15 -10 6 -10 33 -1 125 7 64 16 117 20 117 5 0 5 -26 2 -57z m1096 10 c0 -27 5 -79 10 -117 6 -38 9 -70 8 -71 -2 -1 -13 -5 -25 -9 -19 -6 -22 -1 -32 45 -11 50 -6 85 6 41 3 -12 10 -22 16 -22 6 0 8 32 5 90 -3 50 -2 90 3 90 5 0 9 -21 9 -47z m-1151 -605 c0 -7 -4 -22 -9 -33 -7 -17 -9 -15 -9 13 -1 17 4 32 9 32 6 0 10 -6 9 -12z m1210 -30 c1 -5 -3 -8 -9 -8 -5 0 -10 12 -9 28 0 24 1 25 9 7 5 -11 9 -23 9 -27z m-1172 0 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m399 -60 c-9 -108 -23 -138 -66 -138 -36 0 -39 12 -6 30 31 16 36 29 43 110 5 58 16 90 31 90 2 0 1 -42 -2 -92z m334 73 c5 -11 10 -37 10 -59 0 -71 11 -104 41 -121 37 -21 37 -31 -1 -31 -43 0 -57 30 -67 138 -9 90 -4 111 17 73z m387 -13 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-767 -87 c0 -21 -57 -68 -68 -56 -4 4 0 12 9 18 9 7 19 22 23 35 9 27 36 29 36 3z m449 -6 c2 -11 11 -25 20 -31 9 -7 13 -15 9 -19 -12 -12 -68 35 -68 56 0 27 33 21 39 -6z m-825 -41 l29 -36 -34 4 c-30 3 -34 7 -37 36 -4 41 5 40 42 -4z m57 19 c13 -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z m1051 3 c7 4 8 2 4 -4 -11 -18 -26 -14 -25 6 0 10 3 12 6 4 2 -6 10 -9 15 -6z m96 -18 c-3 -29 -7 -33 -37 -36 l-34 -4 29 36 c37 44 46 45 42 4z m-864 -314 c22 -9 20 -24 -3 -24 -12 0 -21 -8 -24 -22 -3 -14 -5 -9 -6 15 -1 37 4 42 33 31z m513 -36 c0 -26 -1 -32 -4 -15 -3 18 -10 27 -24 27 -33 0 -19 27 17 29 5 1 10 -18 11 -41z m-880 -195 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m1220 -5 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m-876 -8 c23 0 24 -13 3 -34 -8 -9 -25 -21 -36 -27 -18 -9 -18 -9 -9 10 6 11 12 35 12 53 1 18 3 25 6 16 2 -10 13 -18 24 -18z m559 -18 c0 -15 5 -33 12 -40 19 -19 -1 -14 -33 9 -42 30 -37 50 14 58 4 0 7 -12 7 -27z m-840 4 c0 -15 -14 -35 -21 -30 -15 9 -10 34 6 34 8 0 15 -2 15 -4z m1118 -13 c-4 -22 -22 -20 -26 1 -2 10 3 16 13 16 10 0 15 -7 13 -17z m-1048 -108 c80 -8 154 -15 164 -15 11 0 17 -3 14 -6 -6 -6 -380 25 -387 32 -8 7 62 4 209 -11z m1159 11 c-7 -7 -381 -38 -387 -32 -3 3 3 6 14 7 10 0 78 6 149 14 136 13 231 18 224 11z"/><path d="M4017 4478 c-32 -4 -78 -16 -102 -27 -36 -16 -45 -25 -45 -45 0 -14 -6 -29 -14 -33 -19 -11 -126 -145 -126 -158 0 -6 -10 -15 -22 -20 -30 -14 -49 -77 -51 -165 -1 -92 25 -180 53 -180 10 0 22 -9 25 -21 4 -11 27 -43 51 -70 24 -27 44 -54 44 -59 0 -13 -32 -1 -47 17 -14 18 -71 9 -79 -12 -3 -7 -29 -19 -57 -25 -29 -7 -62 -19 -75 -27 -36 -22 -62 -73 -62 -120 0 -24 -4 -43 -10 -43 -5 0 -10 13 -10 29 0 16 -5 31 -12 33 -7 3 -13 22 -14 43 -2 69 -77 108 -210 108 -139 -1 -241 -52 -231 -118 2 -16 7 -38 12 -47 4 -12 3 -18 -5 -18 -7 0 -30 -16 -51 -35 -22 -19 -48 -35 -59 -35 -43 0 -120 -49 -120 -76 0 -7 10 -22 22 -33 20 -19 20 -22 5 -39 -20 -22 -24 -67 -13 -180 8 -89 26 -146 52 -160 15 -8 14 -12 -6 -39 -18 -26 -20 -34 -10 -53 14 -27 60 -47 130 -56 37 -5 73 -19 113 -45 32 -21 75 -43 95 -50 20 -6 64 -25 98 -41 115 -54 235 -57 327 -8 37 20 52 14 19 -7 -28 -17 -52 -76 -52 -127 0 -48 26 -112 54 -135 17 -15 22 -51 7 -51 -6 0 -8 -9 -6 -21 5 -25 -42 -89 -65 -89 -9 0 -28 -14 -42 -30 -32 -37 -43 -97 -34 -184 4 -33 5 -108 4 -166 -2 -58 -1 -175 1 -260 7 -239 5 -501 -3 -650 -6 -103 -5 -144 6 -174 31 -93 48 -41 48 156 l0 126 36 12 c19 7 38 10 41 7 8 -9 -8 -87 -18 -87 -5 0 -9 9 -9 20 0 11 -4 20 -9 20 -18 0 -38 -264 -22 -284 9 -11 5 -16 -18 -24 -22 -8 -32 -20 -38 -43 -8 -30 -14 -34 -63 -44 -119 -24 -187 -85 -254 -224 -36 -76 -41 -96 -44 -174 -2 -49 0 -93 5 -98 15 -15 196 -39 343 -46 195 -8 519 22 548 51 3 4 8 81 10 170 l4 163 -36 41 c-36 40 -37 42 -38 124 -2 241 3 402 12 388 5 -8 10 -79 10 -157 0 -79 4 -143 9 -143 26 0 30 68 24 495 -6 521 -6 692 2 838 6 95 4 111 -11 128 -9 10 -21 19 -26 19 -4 0 -8 -60 -8 -133 0 -147 -4 -157 -57 -157 l-33 0 16 25 c12 18 22 24 35 20 18 -6 19 2 19 139 l0 145 -35 28 c-26 21 -33 33 -29 50 4 14 2 23 -5 23 -17 0 -13 29 9 57 11 14 20 34 20 44 0 26 20 29 62 8 48 -24 89 -24 139 1 40 21 59 20 59 -5 0 -7 11 -27 25 -43 26 -31 33 -62 14 -62 -6 0 -9 -10 -7 -22 2 -17 -6 -29 -29 -46 -18 -12 -35 -33 -38 -45 -3 -12 -4 -78 -3 -147 3 -123 3 -125 26 -125 21 0 41 -19 42 -37 0 -13 -65 -9 -78 4 -8 8 -12 55 -12 146 0 102 -3 133 -12 130 -30 -10 -39 -52 -32 -148 6 -98 8 -320 3 -495 -2 -98 -4 -352 -4 -652 0 -132 2 -155 18 -170 16 -16 17 -11 18 122 0 77 4 149 9 160 5 12 9 -36 9 -128 1 -85 6 -157 12 -168 7 -15 7 -24 -1 -34 -7 -9 -11 -38 -9 -73 4 -53 1 -62 -29 -99 l-32 -41 0 -171 c0 -193 -11 -169 90 -190 160 -34 495 -37 686 -6 136 22 127 13 122 119 -4 74 -11 105 -37 168 -66 156 -131 210 -292 242 -21 5 -28 13 -33 40 -5 28 -12 36 -37 41 -29 7 -30 8 -14 26 13 13 16 27 11 51 -4 18 -11 76 -16 128 -5 52 -9 96 -10 98 0 1 -4 2 -10 2 -5 0 -10 -10 -11 -22 0 -16 -5 -9 -16 20 -8 24 -13 46 -10 49 3 3 21 0 40 -6 l34 -12 6 -156 c3 -86 10 -160 15 -165 5 -5 15 -2 23 8 15 18 17 106 11 509 -2 116 -2 371 0 568 l3 358 -50 45 c-27 25 -60 52 -72 61 -17 11 -21 21 -17 39 4 15 2 24 -5 24 -20 0 -11 31 21 71 54 67 50 193 -8 238 -20 15 -25 27 -22 53 2 28 7 33 28 33 20 0 27 8 37 38 26 78 55 245 62 349 3 64 11 112 19 120 9 9 12 6 12 -18 0 -45 52 -119 100 -144 29 -15 53 -40 86 -91 l45 -71 43 6 c42 7 43 6 50 -24 3 -20 0 -39 -9 -53 -26 -41 -68 -237 -62 -295 5 -51 4 -54 -45 -115 -67 -83 -90 -136 -92 -213 -1 -49 3 -69 20 -91 45 -60 204 -94 274 -58 30 15 77 70 123 142 17 27 35 43 47 43 63 0 185 304 167 417 -4 20 -14 44 -23 54 -15 16 -15 25 -6 57 21 68 40 157 40 189 1 59 -34 135 -84 181 -25 23 -53 42 -61 42 -11 0 -13 7 -8 29 5 22 2 32 -13 43 -10 7 -40 44 -65 83 -44 65 -47 74 -47 135 0 129 -81 202 -225 204 -94 1 -149 -26 -203 -98 -22 -30 -43 -68 -47 -85 -10 -45 -25 -38 -25 12 0 47 -26 98 -62 120 -13 8 -46 20 -75 27 -28 6 -54 17 -56 25 -10 24 -56 27 -84 5 -54 -42 -52 -13 3 47 19 20 40 50 46 65 7 15 20 28 29 28 20 0 33 29 49 105 20 94 -12 245 -51 245 -10 0 -19 5 -19 12 0 16 -107 155 -125 162 -8 3 -15 17 -15 31 0 49 -135 88 -253 73z m-17 -888 c0 -5 -9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9 10 20 10 11 0 20 -4 20 -10z m180 0 c0 -5 -12 -10 -26 -10 -14 0 -23 4 -19 10 3 6 15 10 26 10 10 0 19 -4 19 -10z m-670 -201 c0 -16 -4 -29 -10 -29 -5 0 -10 16 -10 36 0 21 4 33 10 29 6 -3 10 -19 10 -36z m1140 6 c0 -19 -4 -35 -10 -35 -5 0 -10 16 -10 35 0 19 5 35 10 35 6 0 10 -16 10 -35z m-1133 -218 c5 -63 5 -66 -15 -60 -21 5 -21 0 -13 128 2 44 23 -6 28 -68z m443 -964 c0 -25 -4 -31 -15 -27 -8 4 -15 17 -15 30 0 13 -3 24 -7 24 -19 1 -33 18 -27 33 5 14 9 14 35 -5 22 -16 29 -30 29 -55z m-310 54 c0 -8 -11 -19 -25 -25 -31 -14 -33 1 -3 22 27 19 28 19 28 3z m590 -13 c0 -8 -4 -14 -10 -14 -5 0 -10 -11 -10 -25 0 -18 -5 -25 -20 -25 -27 0 -26 37 1 67 23 23 39 22 39 -3z m310 -16 c0 -4 -11 -2 -25 4 -14 6 -25 17 -25 25 0 11 6 10 25 -4 13 -10 25 -21 25 -25z m-986 -122 c-8 -52 3 -136 17 -136 5 0 9 9 9 19 0 11 5 23 10 26 11 7 13 -46 4 -82 -4 -16 -14 -23 -30 -23 -24 0 -24 0 -24 120 0 72 4 120 10 120 6 0 7 -18 4 -44z m1033 -76 l2 -120 -28 0 c-28 0 -29 2 -33 55 -1 30 0 55 5 55 4 0 7 -11 7 -25 0 -14 4 -25 9 -25 12 0 21 52 21 121 0 33 3 59 8 59 4 0 8 -54 9 -120z m-587 -580 c0 -112 -16 -150 -60 -150 -37 0 -37 5 0 37 29 24 30 28 30 107 0 46 3 86 7 89 18 18 23 -1 23 -83z m148 77 c6 -7 10 -47 9 -91 -2 -74 -1 -79 26 -101 34 -30 34 -35 -4 -35 -42 0 -59 44 -59 155 0 83 6 99 28 72z m-601 -54 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m1043 11 c0 -21 -4 -33 -10 -29 -5 3 -10 19 -10 36 0 16 5 29 10 29 6 0 10 -16 10 -36z m-53 -16 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m-937 7 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m350 -68 c0 -14 -12 -32 -30 -45 -24 -18 -30 -20 -30 -7 0 9 7 18 15 21 8 4 15 17 15 30 0 15 6 24 15 24 9 0 15 -9 15 -23z m260 -1 c0 -13 7 -26 15 -30 18 -6 20 -26 3 -26 -19 0 -58 42 -58 62 0 11 7 18 20 18 14 0 20 -7 20 -24z m-618 -104 c-38 -5 -52 5 -52 39 l0 31 38 -33 c35 -33 36 -34 14 -37z m61 50 c-4 -10 -9 -10 -22 0 -9 7 -17 13 -19 14 -2 1 8 1 21 0 15 0 23 -6 20 -14z m851 6 c-3 -4 -12 -8 -20 -8 -8 0 -14 4 -14 8 0 4 9 8 19 8 11 0 17 -4 15 -8z m86 -7 c0 -39 -11 -51 -48 -51 l-36 0 34 35 c40 40 50 43 50 16z m-630 -301 c13 -8 11 -11 -7 -16 -12 -3 -24 -16 -26 -28 -2 -12 -5 -5 -6 17 -1 38 10 46 39 27z m249 3 c-1 -16 -18 -48 -18 -37 -1 7 -11 14 -23 18 -19 5 -21 8 -8 16 18 11 50 13 49 3z m314 -274 c-4 -4 -6 15 -3 44 l5 52 3 -44 c2 -24 0 -47 -5 -52z m-577 31 c23 0 16 -37 -13 -59 -27 -22 -46 -20 -25 1 7 7 13 30 13 53 1 22 3 32 6 23 2 -10 11 -18 19 -18z m-339 -27 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m598 15 c1 -13 5 -34 9 -47 l8 -24 -31 22 c-17 12 -31 31 -31 41 0 16 8 21 40 29 3 0 5 -9 5 -21z m-535 -32 c0 -15 -14 -35 -21 -30 -15 9 -10 34 6 34 8 0 15 -2 15 -4z m820 -10 c0 -22 -27 -27 -33 -5 -4 14 0 19 14 19 10 0 19 -6 19 -14z m-652 -103 c-53 -2 -143 -2 -200 0 -57 1 -13 3 97 3 110 0 156 -2 103 -3z m650 0 c-53 -2 -143 -2 -200 0 -57 1 -13 3 97 3 110 0 156 -2 103 -3z"/><path d="M6753 4455 c-71 -22 -136 -64 -130 -85 3 -11 -3 -26 -14 -36 -10 -9 -19 -21 -19 -25 0 -5 -18 -34 -40 -65 -22 -32 -40 -66 -40 -76 0 -11 -7 -18 -19 -18 -41 0 -63 -140 -37 -240 20 -78 40 -110 66 -110 11 0 20 -7 20 -14 0 -8 23 -37 50 -64 47 -47 62 -72 41 -72 -5 0 -17 7 -25 16 -20 20 -72 10 -86 -15 -5 -10 -30 -24 -56 -31 -84 -24 -141 -110 -119 -180 5 -14 2 -20 -9 -20 -11 0 -16 10 -17 28 0 15 -13 49 -27 76 -39 71 -81 91 -197 91 -78 0 -97 -4 -146 -28 -59 -28 -109 -86 -109 -123 1 -10 7 -30 15 -44 18 -32 19 -60 2 -60 -7 0 -26 -27 -42 -61 -22 -44 -42 -69 -77 -95 -64 -46 -77 -73 -55 -120 9 -19 17 -56 17 -82 0 -69 26 -195 49 -235 11 -20 17 -44 14 -56 -15 -58 59 -121 142 -121 27 0 53 -10 91 -35 69 -46 193 -105 220 -105 13 0 57 -14 99 -31 49 -19 100 -32 143 -34 37 -3 69 -5 72 -5 3 0 -5 -9 -16 -19 -12 -9 -23 -26 -25 -35 -3 -12 -25 -26 -59 -39 -30 -11 -57 -24 -58 -29 -2 -4 -8 -6 -13 -3 -15 10 -48 -14 -64 -46 -15 -28 -82 -216 -108 -303 -12 -38 -11 -39 27 -71 38 -32 38 -32 26 -71 -16 -51 -34 -70 -25 -26 15 73 -40 1 -66 -86 -7 -23 -19 -48 -27 -55 -8 -6 -13 -7 -11 -2 34 87 81 227 76 231 -24 24 -96 -105 -112 -201 -8 -50 -106 -316 -151 -411 -49 -103 -106 -281 -99 -305 4 -11 12 -18 18 -16 12 4 75 153 104 245 18 56 39 70 88 58 24 -6 25 -8 11 -34 -8 -15 -22 -36 -31 -47 -15 -19 -16 -19 -10 12 4 18 3 33 -2 33 -12 0 -49 -74 -59 -115 -3 -16 -15 -39 -25 -50 -25 -29 -40 -72 -33 -100 6 -23 4 -24 -28 -19 -31 6 -35 3 -53 -33 -11 -21 -23 -40 -26 -43 -14 -11 -30 -51 -24 -60 14 -23 -15 -46 -72 -58 -79 -16 -156 -63 -195 -117 -18 -25 -50 -67 -71 -93 -68 -85 -87 -135 -87 -229 l0 -82 38 -10 c68 -18 175 -30 312 -37 208 -10 555 24 585 58 19 21 55 202 55 277 0 67 -2 73 -36 111 -30 33 -35 45 -29 68 4 15 7 39 8 53 1 14 9 33 18 41 9 9 37 76 63 150 45 129 66 176 66 151 0 -6 -23 -75 -51 -153 -27 -78 -49 -146 -47 -151 2 -5 13 -2 25 6 24 17 93 184 123 298 27 103 114 344 143 397 52 94 84 240 52 233 -5 -1 -36 -73 -68 -160 -32 -87 -66 -166 -76 -177 -14 -14 -26 -16 -50 -11 -39 8 -40 21 -2 30 16 3 34 12 40 18 18 23 64 162 63 189 -2 18 3 28 12 28 7 0 17 11 20 24 3 13 8 31 12 39 3 10 -3 17 -20 21 -17 4 -23 11 -19 22 4 12 15 13 49 8 57 -8 66 0 100 89 16 40 36 82 45 95 26 34 61 146 57 183 -4 39 -23 49 -32 16 -12 -50 -38 -99 -46 -91 -6 6 0 37 15 79 31 87 31 94 0 139 -30 44 -31 56 -7 56 12 0 14 2 4 8 -20 13 -6 35 39 60 41 24 79 74 79 105 0 21 6 21 60 2 57 -20 86 -19 137 6 24 12 45 20 46 18 1 -2 12 -18 25 -36 24 -35 28 -58 12 -68 -6 -4 -8 -15 -5 -24 4 -13 -5 -26 -30 -45 l-35 -27 0 -90 c0 -53 -4 -89 -10 -89 -6 0 -10 30 -10 70 0 73 -8 85 -34 48 -22 -31 -23 -206 -1 -234 9 -11 15 -42 15 -79 1 -94 5 -102 56 -108 52 -5 57 -8 48 -31 -4 -10 -15 -16 -28 -14 -20 3 -21 -1 -24 -144 l-3 -147 31 -34 c36 -42 37 -47 6 -47 -48 0 -56 29 -56 210 0 172 -6 204 -30 174 -12 -13 -15 -103 -16 -468 -2 -451 2 -516 32 -516 11 0 14 29 16 158 l2 157 6 -157 c3 -86 8 -160 12 -163 4 -4 0 -21 -8 -38 -12 -23 -14 -35 -5 -54 19 -41 12 -66 -26 -105 -31 -32 -38 -47 -45 -100 -10 -78 10 -294 28 -313 29 -28 265 -55 489 -55 157 0 346 19 411 40 l34 12 0 81 c0 93 -21 148 -105 276 -64 97 -123 140 -222 161 -43 10 -50 15 -65 50 -12 28 -23 40 -37 40 -24 0 -28 22 -6 40 13 10 15 9 15 -9 0 -11 6 -21 14 -21 34 0 51 126 37 275 -12 122 -14 422 -5 527 8 88 0 157 -21 184 -13 17 -16 17 -25 4 -5 -8 -10 -40 -11 -70 -1 -58 -4 -58 -14 2 -4 29 -9 36 -22 31 -13 -5 -15 -2 -10 18 4 13 7 27 7 30 0 4 15 10 34 13 65 12 70 28 57 173 -22 244 -20 234 -60 273 -20 19 -51 48 -70 63 -25 21 -32 33 -28 52 2 14 0 25 -4 25 -16 0 -9 37 10 54 11 10 25 31 31 47 12 28 15 29 74 29 49 0 76 7 133 34 39 19 73 39 77 44 3 6 23 16 44 23 51 16 127 68 203 137 35 33 78 62 94 66 70 17 115 77 97 127 -6 15 -3 39 11 73 16 44 18 68 13 166 -3 63 -5 122 -5 130 0 8 1 30 1 47 2 42 -22 68 -81 88 -35 12 -58 30 -94 76 -27 32 -54 59 -61 59 -9 0 -13 19 -12 64 1 55 -3 68 -23 90 -74 79 -307 78 -384 -2 -28 -29 -50 -78 -42 -92 3 -4 -2 -10 -10 -14 -9 -3 -15 -19 -15 -41 0 -22 -4 -34 -10 -30 -5 3 -10 21 -10 38 0 41 -31 92 -67 110 -15 8 -52 18 -81 22 -31 4 -56 13 -59 21 -7 19 -70 18 -89 -1 -9 -8 -20 -15 -25 -15 -17 0 -9 21 26 67 20 26 38 57 41 69 3 12 14 24 24 27 45 12 53 208 12 300 -11 26 -27 47 -35 47 -8 0 -21 10 -30 23 -8 12 -46 54 -85 92 -38 39 -71 79 -73 90 -9 45 -181 70 -276 40z m260 -882 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-173 -13 c0 -5 -12 -10 -26 -10 -14 0 -23 4 -19 10 3 6 15 10 26 10 10 0 19 -4 19 -10z m670 -140 c0 -16 -4 -30 -10 -30 -5 0 -10 14 -10 30 0 17 5 30 10 30 6 0 10 -13 10 -30z m-1150 -100 c0 -16 -4 -30 -9 -30 -5 0 -11 14 -13 30 -3 20 0 30 9 30 8 0 13 -12 13 -30z m1160 -89 c0 -44 24 -79 76 -111 23 -15 32 -26 26 -34 -6 -6 -13 -26 -17 -44 -5 -26 -16 -37 -57 -58 -27 -14 -51 -24 -53 -22 -7 8 9 317 16 312 5 -3 9 -22 9 -43z m-1136 -82 c3 -17 6 -52 6 -78 0 -25 7 -75 15 -110 9 -35 14 -66 12 -68 -2 -2 -18 0 -35 3 -24 5 -34 14 -42 39 -6 18 -20 41 -31 50 -19 18 -19 19 0 39 27 28 41 69 41 117 0 48 25 54 34 8z m-87 -11 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m193 -863 c0 -10 -10 -15 -30 -15 -27 0 -33 -6 -50 -46 -11 -25 -18 -50 -14 -55 3 -5 0 -9 -5 -9 -15 0 -14 7 6 60 24 66 26 68 86 79 4 0 7 -6 7 -14z m664 -38 c-13 -10 -24 -28 -24 -39 0 -27 -24 -17 -28 12 -5 32 44 74 64 57 10 -10 8 -16 -12 -30z m297 13 c13 -10 21 -19 17 -20 -14 0 -58 23 -58 32 0 14 16 9 41 -12z m-1098 -85 c-16 -33 -38 -50 -28 -22 20 56 26 67 35 62 5 -3 3 -19 -7 -40z m395 3 c14 -21 18 -38 12 -52 -10 -29 -36 -27 -32 2 2 13 -4 32 -13 42 -16 18 -13 40 5 40 4 0 17 -14 28 -32z m764 -43 c-2 -19 -6 -35 -8 -35 -2 0 -4 16 -4 35 0 19 4 35 8 35 4 0 6 -16 4 -35z m-1353 -564 c-7 -23 -14 -39 -16 -37 -3 2 1 23 8 45 7 23 14 39 16 37 3 -2 -1 -23 -8 -45z m1378 -33 c-2 -13 -4 -5 -4 17 -1 22 1 32 4 23 2 -10 2 -28 0 -40z m-1423 -51 c11 -23 21 -45 24 -49 2 -4 -11 -3 -28 4 -36 12 -45 27 -36 63 9 35 18 31 40 -18z m61 3 c10 -11 14 -20 9 -20 -5 0 -15 9 -22 20 -7 11 -11 20 -9 20 2 0 12 -9 22 -20z m975 -15 c0 -14 7 -28 15 -31 16 -6 21 -34 6 -34 -4 0 -20 9 -33 20 -19 14 -24 26 -21 45 7 33 33 33 33 0z m-640 -37 c0 -21 -14 -36 -43 -47 -34 -13 -47 -14 -47 -2 0 5 11 12 24 15 14 3 28 15 31 26 7 22 35 28 35 8z m935 -18 c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m95 -25 c0 -34 -1 -35 -42 -35 l-41 0 39 35 c21 19 40 34 42 35 1 0 2 -16 2 -35z m-27 -284 c17 -6 19 -21 21 -129 3 -143 -9 -156 -16 -17 -3 53 -8 98 -11 102 -4 3 -13 1 -21 -6 -11 -9 -15 -8 -20 5 -18 47 0 64 47 45z m-369 -16 c-6 -16 -44 -21 -44 -7 0 14 12 22 31 22 12 0 16 -5 13 -15z m-763 -26 l24 -20 -28 4 c-25 4 -30 0 -39 -25 -15 -44 -21 -26 -7 21 14 47 18 49 50 20z m-419 -99 c-9 -27 -19 -50 -24 -50 -10 0 -11 -1 8 53 21 63 36 60 16 -3z m27 -91 c-7 -14 -14 -18 -21 -11 -13 13 -2 32 18 32 12 0 13 -4 3 -21z m291 -10 c-11 -19 -10 -24 5 -35 10 -7 15 -19 12 -27 -6 -15 -77 -40 -77 -26 0 5 4 9 9 9 8 0 17 18 41 84 6 16 13 26 16 23 3 -3 0 -15 -6 -28z m868 -56 c6 -20 10 -38 8 -40 -8 -8 -56 41 -56 58 0 36 36 22 48 -18z m-1045 -83 c64 -24 116 -45 113 -47 -6 -6 -368 126 -381 138 -5 6 26 -3 70 -19 44 -16 133 -49 198 -72z m1335 63 c-5 -25 -28 -28 -28 -4 0 12 6 21 16 21 9 0 14 -7 12 -17z m15 -110 c-56 -2 -151 -2 -210 0 -59 1 -13 3 102 3 116 0 164 -2 108 -3z"/><path d="M8816 4438 c-34 -46 -137 -274 -174 -388 -37 -114 -69 -237 -77 -305 l-7 -51 83 -55 c46 -31 113 -65 148 -77 58 -20 66 -20 98 -7 46 19 67 19 84 -2 8 -9 72 -65 142 -125 70 -59 124 -108 119 -108 -5 0 -56 38 -113 85 -57 47 -107 85 -111 85 -37 0 83 -125 197 -205 92 -65 246 -194 315 -263 78 -78 170 -134 170 -103 0 4 -53 52 -117 106 -65 53 -122 104 -127 112 -9 16 10 63 26 63 4 0 8 -15 9 -32 0 -29 11 -43 96 -113 119 -99 123 -102 135 -81 5 9 14 14 19 11 5 -4 3 -15 -6 -28 -30 -43 -20 -66 72 -154 104 -101 161 -148 190 -157 41 -13 33 12 -18 57 -75 66 -44 66 36 0 68 -56 68 -56 111 -46 35 8 44 8 44 -3 0 -8 9 -14 20 -14 13 0 21 -9 25 -27 11 -52 34 -91 67 -116 57 -43 137 -55 174 -26 8 6 17 -5 28 -35 20 -52 42 -73 93 -91 28 -10 37 -18 34 -32 -2 -10 -5 -43 -5 -74 -1 -50 3 -62 31 -97 21 -26 29 -43 22 -47 -6 -4 -8 -14 -5 -22 4 -9 -7 -27 -28 -47 -34 -30 -35 -35 -38 -110 -2 -53 -7 -81 -15 -84 -10 -3 -13 14 -13 64 0 65 -1 67 -17 51 -16 -16 -18 -37 -16 -169 3 -173 13 -218 48 -218 34 0 55 -10 55 -27 0 -9 -8 -13 -22 -11 -20 3 -23 -2 -26 -34 -2 -22 1 -38 7 -38 6 0 11 -9 11 -20 0 -11 -4 -20 -10 -20 -6 0 -10 -33 -10 -79 0 -77 1 -81 33 -110 l32 -31 -31 0 c-51 0 -54 10 -54 187 0 152 -6 184 -27 150 -11 -18 -13 -838 -1 -860 20 -38 28 0 30 141 l2 147 3 -140 c2 -80 8 -149 15 -162 8 -17 8 -26 -2 -38 -8 -10 -11 -34 -8 -72 5 -53 2 -61 -24 -95 -29 -36 -30 -39 -35 -181 -4 -101 -2 -146 5 -151 28 -17 242 -36 407 -36 178 0 389 20 408 39 15 15 -8 198 -34 264 -38 99 -126 169 -232 183 -42 6 -46 9 -54 43 -7 29 -14 37 -36 39 -28 3 -35 16 -16 28 18 11 -3 254 -22 254 -5 0 -9 -12 -10 -27 l-1 -28 -7 25 c-24 81 -24 83 6 76 51 -13 55 -24 60 -172 2 -76 6 -141 9 -144 3 -3 11 3 19 13 10 14 12 106 10 433 -1 372 -3 417 -18 432 -16 15 -17 8 -17 -103 0 -81 -3 -115 -10 -105 -5 8 -10 38 -10 66 0 28 -3 66 -6 84 l-7 32 -13 -28 c-12 -29 -12 -29 -13 17 -1 47 8 59 46 59 36 0 42 30 43 201 l0 166 -66 61 c-43 40 -65 66 -61 76 3 8 -1 20 -9 27 -13 10 -12 16 9 38 35 37 47 64 47 104 0 45 32 77 60 59 11 -7 26 -12 33 -12 27 0 205 126 279 198 66 64 78 72 83 56 4 -10 11 -27 16 -36 5 -10 9 -32 9 -50 1 -80 76 -170 155 -186 32 -7 40 -12 38 -29 -2 -14 19 -40 61 -82 64 -61 83 -70 102 -51 8 8 20 5 42 -7 24 -13 32 -25 32 -46 0 -77 104 -167 192 -167 18 0 19 -5 14 -34 -5 -28 -2 -39 16 -57 52 -49 139 -107 172 -113 39 -8 83 -54 117 -124 12 -23 27 -45 34 -50 13 -7 15 -11 15 -32 0 -19 93 -70 126 -70 37 0 82 33 125 94 23 31 29 50 29 91 0 45 -6 62 -45 120 -32 49 -43 75 -39 91 11 41 -107 188 -205 256 -43 30 -46 31 -90 19 -28 -8 -47 -8 -49 -2 -2 5 -17 30 -34 55 -31 48 -91 89 -144 101 -18 3 -40 15 -50 26 -9 10 -23 19 -29 19 -22 0 -24 25 -4 51 l18 24 -62 63 c-34 34 -69 62 -79 62 -13 0 -18 8 -18 28 0 36 -47 103 -97 136 -28 20 -50 26 -89 26 -28 0 -54 3 -58 7 -4 4 -19 9 -34 11 -37 5 -38 9 -15 35 52 57 56 109 13 178 -16 27 -27 55 -24 64 8 20 -20 51 -52 59 -40 10 -17 26 39 27 29 0 61 4 72 8 11 5 27 4 36 -2 22 -14 111 36 156 88 44 50 75 115 62 131 -5 7 -5 22 0 40 5 16 12 62 15 103 4 41 11 80 17 87 27 32 -40 154 -115 211 -56 43 -124 67 -143 52 -7 -7 -44 -14 -81 -16 -37 -2 -82 -8 -101 -13 -19 -5 -45 -7 -58 -4 -48 12 -158 -78 -203 -166 -16 -31 -18 -45 -10 -55 7 -9 7 -21 0 -39 -5 -15 -10 -47 -10 -71 0 -49 -16 -69 -26 -31 -8 32 -39 60 -59 52 -9 -3 -34 6 -57 20 -59 37 -108 42 -152 14 -20 -12 -36 -26 -36 -31 0 -5 -7 -9 -17 -9 -15 0 -15 1 0 18 10 10 17 30 17 44 0 17 7 27 20 31 31 8 26 64 -11 120 -40 60 -116 129 -174 156 -56 26 -66 26 -98 0 -31 -23 -45 -18 -92 31 -39 41 -108 90 -144 100 -34 10 -75 -25 -60 -52 7 -13 5 -15 -11 -11 -12 3 -22 -1 -26 -11 -3 -9 -13 -16 -21 -16 -16 0 -62 -49 -63 -67 0 -7 -6 -13 -13 -13 -14 0 -42 -36 -66 -82 -10 -20 -11 -34 -3 -58 l11 -31 -44 7 c-45 6 -45 6 -45 -23 0 -53 95 -160 182 -204 41 -21 196 -156 286 -248 42 -44 42 -44 25 -70 -67 -103 -78 -126 -78 -169 0 -30 -5 -48 -16 -55 -19 -12 -72 -1 -63 14 3 6 -3 13 -13 15 -17 5 -19 12 -15 53 3 40 0 52 -23 79 -15 18 -31 29 -36 26 -11 -6 -76 53 -67 61 3 3 28 -13 55 -35 58 -46 63 -47 63 -21 0 18 -112 131 -130 131 -5 0 -39 27 -77 60 -73 64 -96 71 -136 40 l-26 -21 -33 31 c-25 24 -28 29 -10 20 13 -6 26 -9 30 -6 8 8 -67 84 -90 92 -10 3 -18 10 -18 16 0 6 -8 21 -17 32 -10 11 17 -9 60 -44 43 -36 89 -73 103 -83 24 -18 24 -18 24 2 0 26 -73 98 -150 149 -63 41 -169 131 -288 243 -100 95 -191 166 -223 174 -13 4 -42 29 -64 56 -22 27 -44 49 -49 49 -5 0 -17 7 -27 16 -14 12 -15 22 -8 47 15 52 10 129 -11 175 -25 55 -99 158 -147 204 -29 27 -145 88 -169 88 -2 0 -14 -15 -28 -32z m589 -713 c44 -37 86 -73 93 -80 11 -10 11 -19 -2 -49 l-15 -37 -30 33 c-30 34 -34 51 -6 28 9 -7 19 -10 22 -6 9 8 -167 186 -184 186 -7 0 -10 7 -6 16 5 13 8 13 27 -4 11 -10 57 -49 101 -87z m-70 -15 c16 -16 25 -30 21 -30 -5 0 -24 14 -43 30 -18 17 -28 30 -20 30 7 0 26 -13 42 -30z m-75 11 c0 -17 -18 -21 -24 -6 -3 9 0 15 9 15 8 0 15 -4 15 -9z m-137 -227 c14 -11 16 -14 5 -11 -10 4 -20 2 -23 -3 -17 -27 -37 4 -28 40 5 19 7 20 15 7 5 -9 19 -24 31 -33z m616 -47 c15 -19 4 -27 -41 -27 -36 0 -37 1 -26 20 15 23 50 26 67 7z m-465 -73 c15 -14 27 -26 25 -27 -2 -2 -13 -9 -23 -17 -17 -14 -18 -13 -12 8 6 17 2 27 -16 42 -13 11 -18 19 -13 19 6 0 23 -11 39 -25z m507 -21 l34 -36 -42 33 c-24 18 -43 35 -43 37 0 12 21 -2 51 -34z m-81 23 c0 -2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z m-167 -202 c-3 -8 2 -23 11 -33 12 -13 14 -21 7 -26 -20 -11 -31 6 -31 46 0 23 4 38 10 34 5 -3 7 -12 3 -21z m1657 -9 c7 -8 8 -15 2 -15 -5 0 -15 7 -22 15 -7 8 -8 15 -2 15 5 0 15 -7 22 -15z m116 -122 c-7 -7 -26 7 -26 19 0 6 6 6 15 -2 9 -7 13 -15 11 -17z m-1061 -84 c34 -30 46 -71 25 -84 -6 -4 -8 5 -5 22 4 24 -2 33 -36 61 -23 17 -36 32 -30 32 5 0 26 -14 46 -31z m-145 -261 l25 -4 -28 -14 c-24 -12 -30 -11 -44 2 -17 18 -8 45 10 29 7 -5 23 -11 37 -13z m1381 -81 c-11 -12 -23 -19 -25 -16 -9 9 25 50 36 43 6 -4 2 -14 -11 -27z m-824 -614 c2 -6 -5 -14 -16 -18 -14 -4 -21 -15 -21 -32 0 -33 -24 -25 -28 9 -5 39 54 75 65 41z m248 1 c17 -11 25 -25 24 -43 -1 -21 -2 -22 -6 -5 -2 12 -15 26 -29 32 -13 7 -24 16 -24 22 0 14 7 13 35 -6z m65 -124 c0 -22 -4 -40 -10 -40 -11 0 -14 63 -3 73 11 12 13 8 13 -33z m1550 -311 c0 -30 -3 -32 -54 -44 -26 -6 -27 -5 -12 10 9 9 23 30 32 46 18 35 34 29 34 -12z m-1900 -279 c0 -11 7 -23 15 -26 8 -4 15 -13 15 -21 0 -11 -7 -10 -30 7 -31 22 -41 60 -15 60 8 0 15 -9 15 -20z m276 -45 c-11 -8 -22 -12 -25 -9 -6 6 19 24 34 24 6 -1 1 -7 -9 -15z m84 -1 c0 -33 -20 -54 -52 -54 l-32 0 34 35 c37 38 50 43 50 19z m-361 -311 c-1 -30 -4 -37 -6 -20 -2 15 -11 27 -18 27 -36 0 -20 29 23 39 1 1 1 -20 1 -46z m301 -183 c0 -27 -3 -50 -7 -50 -5 0 -6 22 -5 50 5 65 12 65 12 0z m-287 -79 c7 -9 -3 -5 -20 8 -34 23 -45 61 -18 61 9 0 16 11 17 28 1 15 3 2 5 -28 3 -30 10 -61 16 -69z m34 23 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m106 -1 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m54 1 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m53 -8 c0 -24 -17 -28 -23 -6 -3 13 0 20 9 20 8 0 14 -6 14 -14z m3 -93 c-51 -2 -135 -2 -185 0 -51 1 -10 3 92 3 102 0 143 -2 93 -3z"/></g></svg>
Sviatoslav Sydorenko<br>
@webknjaz [🇺🇦🇪🇺🇨🇿](https://github.com/webknjaz)<br>
2019, PyCon Balkan 🇷🇸
</center>
<!-- .slide: data-state="alt title" -->

Note: (4s)

It's all for today.<br>
Thank you for comming :)

Now, it's time for questions!

-----

# Hands-on: Creating GitHub Bots 🤖 to deal with boring routines

## 📅 Friday, ⏲ 09:50, 👨‍🏫 Room 2
## 💬 Slack: `#github-apps-workshop`

<!-- .slide: data-state="alt title" -->

Note: (43s)
And a final announcement.
I'm making a workshop tomorrow.
It's dedicated to basics of making
bots using GitHub Apps.

We'll have a walkthrough of the complete application creation and
deployment process:
from creating an App entity in the GitHub UI,
to actual coding
and to shipping your code via Heroku.

If you plan to participate,<br>
please make sure that you have Git,<br>
Python 3.7 and a code editor on your laptop.

Thank you and see you tomorrow!
