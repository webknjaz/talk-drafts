workflow "On push" {
  on = "push"
  resolves = ["Deploy to GitHub Pages"]
}

action "Stop if not master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Deploy to GitHub Pages" {
  uses = "re-actors/dpl-action@master"
  needs = ["Stop if not master"]
  secrets = ["GITHUB_TOKEN"]
  args = "--provider=pages"
}
