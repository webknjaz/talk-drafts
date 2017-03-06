# Notes

## Git and Horrible Terrible No Good Very Bad Day

### Git Bisect
**git bisect** to find bad commits

```bash
git bisect start
git bisect good <good-commit-hash>
git bisect bad <bad-commit-hash>  # usually HEAD

# While git iterates through commits, you should mark commits good or bad
git bisect good # or git bisect bad

# Do not forget to cleanup and return to where you started
git reset
```

### Git Revert
**git revert** to safely undo changes

git revert will create a new commit and will not affect repo history

### Git Reset

You can use `git reset` to safely move commits to other branch

```bash
# You accidentally comiited to master instead of feature-branch
git branch feature-branch
git reset HEAD~1  # or to commit which should be latest one on master
```

### Git Reflog

The whole history of `HEAD` movements can be obtained from `git reflog`

You can reset to commit from reflog or even `cherry-pick` one from it

### Git Filter-Branch

The common usage of it is to remove an accidentally committed file from
the history completely

### Difference between .. and ...

- using `..` will show the diff between commits
- using `...` will show the difference at the merge base

### Specify the specific parent

If `HEAD` has several parents you can use `HEAD^2` to specify second parent or
`HEAD^1` to specify the first one

## Jedi Mind Tricks for Git

### Working with hooks

- pre-commit

  - first thing executed after git commit
  - can abandon commit
  - no arguments

  **IDEA**: abandon commits on the master branch

  ```bash
  #!/bin/bash
  # Check where the HEAD is
  if [ "$(git symbolic-ref --short HEAD)" == "master" ]; then
      echo "This is not the branch you are looking for"
      exit 1
  fi
  exit 0
  ```
- commit-msg

  - executes before showing commit message editor
  - accepts one argument -- temporary file

  **IDEA** reference issue from the commit-message

#### Branch-based delivery

- work on feature branch (prevent work on master)
- reference issues
- run CI setup
- deliver through "ready" branches
- deploy if CI succeeds

### Handling Binary

Working with binaries in git is annoying. No useful messages, nothing

- git attributes
  with them you can assign behaviour per file or path
- custom drivers
  specify the behaviour scenario

#### Git Attributes

**Format**: `pattern attribute1 attribute2 ...`

Git Attributes are commonly used for:

- changing CRLF behaviour
- text/binary behaviour

In order to handle different file types you can create custom drivers

## Scaling Git at Microsoft

Preamble

- Windows repo is huge
- Splitting repo is no choice, thus submodules and subtrees won't work here
- **IDEA** virtual zing FS underneath Git

**GVFS**

- File system driver
- read object hook
- protocol to request a single blob/object was developed. This allows to download
  files on demand
- Cache server

The whole idea is to download only files that user need, and thus do not
fetch a lot of unnecessary files.

## Scaling Mercurial at Facebook

### Current state

- use monorepos
- not using feature branches
- rebasing instead of merging
- single commit per push
- team is mostly online
- use bookmarks instead of branches

### Problems

- size of `.hg` directory
- push rate is huge
- large files in repo

### Toolbelt

- Scale
  - pushrebase extension
  - remote file log
  - infinite push
    redirects branch push to blobstore. This allows unlimited branches
    - push every commit
    - sync between machines
- Better UX for hg log (smartlog)

  Something similar to `git log --oneline --graph`
- Hg absorb

  Identifies where the pending changes are

  (something like `git commit -p`)

  - hg fold
  - hg split

- Sparse checkouts

# External links

* [Github's recap](https://github.com/blog/2317-git-merge-2017-recap)
* [Tim Petterson's recap](https://extranet.atlassian.com/display/~tim@atlassian.com/2017/02/13/Git+Merge+2017)
* [Git rev](https://git.github.io/rev_news/2017/02/22/edition-24/)
* [SSI: @rgaiacs writes in detail about Git Merge 2017 organised by @github](https://www.software.ac.uk/blog/2017-02-28-git-merge-2017)
* [Edward Thomson: The Git Contributor Summit](http://www.edwardthomson.com/blog/git_contributor_summit.html)
* [Carmen Bremen: Review – Git Merge 2017](http://neoshops.de/2017/02/04/review-git-merge-2017/)
