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

The common usage of it is to remove an accidentally commited file from 
the history completely

### Difference between .. and ...

- using `..` will show the diff between commits
- using `...` will show the difference at the merge base

### Specify the specific parent

If `HEAD` has several parents you can use `HEAD^2` to specify second parent or
`HEAD^1` to specify the forst one

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
- refernce issues
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

In order to handle different filetypes you can create custom drivers

