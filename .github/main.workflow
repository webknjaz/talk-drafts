workflow "On push" {
  on = "push"
  resolves = [
    "Deploy to GitHub Pages",
    "Install npm deps",
  ]
}

action "Stop if not master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Deploy to GitHub Pages" {
  uses = "re-actors/dpl-action@master"
  needs = ["Install npm deps"]
  secrets = ["GITHUB_TOKEN"]
  args = "--provider=pages"
}

action "Install npm deps" {
  uses = "actions/npm@master"
  needs = ["Stop if not master"]
  args = "install"
}
