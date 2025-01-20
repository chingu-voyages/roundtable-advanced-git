# Git configuration

- To setup git properly use `git config`
- You can always edit the `~/.gitconfig` file for global configuration
- Edit the `.git/config` file for a per repository configuration
- Use the `--global` for setting up global configuration
- Use the `--local` for setting up local configuration

- To initialize a git repository

```bash
git init
```

# Git config options

- Every command we use can change either the local or the global configuration depending on the flag

- To view the current global configuration:

```bash
git config --global --list
```

- To view the current local configuration

```bash
git config --local --list
```

# Set configuration

- To set configuration

```bash
git config --global --set alias.l1 "log --oneline -n 10"
```

- With this set we can run `git l1` as if we were running `git log --oneline -n 10`

- You can add this either in the `~/.gitconfig` or in the `./.git/config` files depending if you want to do it globally or not

# Pagination

- Git uses under the hood `less` to show its results, that makes that it paginates them, however you can disable

- Per command, **always goes between the git and the command**

```bash
git --no-pager log
```

- You can disable it by changing its default pager

```bash
git config --global --set core.pager cat
```

# Adding chunks to the staging area

I often find myself making a mini code review of my code every time that I've written, so for that I mainly use 2 commands:

1. First we want to be able to see the changes that has been made in each file

```bash
git diff
```

**WARNING** This will not show information from files that aren't in the repo

2. Then we want to be able to _select_ the information that we want to add to the staging area

```bash
git add -p
```

# Rephrasing your commit

- To rephrase your last commit

```bash
git commit --amend
```

- **_WARNING_** **Do not amend your commit once pushed**

# Adding info to the commit

When working with someone in a specific commit, you **should** give that person the credit he/she deserves, so for that

```bash
git commit --trailer "Signed-off-by:C O Mitter \ <committer@example.com>" --trailer "Helped-by:C O Mitter \ <committer@example.com>"
```

# Finding a commit that created a bug

Finding where a bug was introduced is alway tricky in a medium sized project, more so in a large project. To find we will take an
overlook to the _git bisect_ command

```bash
man git-bisect
tldr git-bisect
```

To start git bisect

```bash
git bisect start
```

Then we need to define the first good and bad commits.
For telling bisect that the current commit is bad we run

```bash
git bisect bad
git log --oneline
```

# Finding a commit that created a bug

Then we need to tell which one is a good commit

```bash
git bisect good <commitish>
```

After that _git-bisect_ will give us a commit and we need to tell it if it is a good or a bad commit

When there are no more commits to go to, _git-bisect_ will tell us which one is the commit which introduced a bug

If you have atomic commits, then it will be very easy to find by analizing the commit, which line was the culprit for introducing that bug

# Fixing the bug

Once you've identified the bug there is a desision to make, how are we going to fix the bug. There are two main ways:

1. Introducing a fix commit. This is recommended if the bug is in a common branch (eg. main, dev, etc).
   You will create a new commit at the end of the tree where you fix the code

2. Rebasing. **Only run this in a feature branch** we will take a look at git rebase, with this we will alter the git history and will be as the bug
   never happened

```bash
git rebase -i <commitish>
```

# Adding a commit without any files

```bash
git commit --allow-empty -m "Initial commit"
```

# Git Worktrees

You can clone a remote repository into a **Git Worktree** configuration by running

```bash
git clone --bare https://github.com/chingu-voyages/roundtable-advanced-git.git
```

That will display all the git files that you usually see inside of the `.git` directory, to add those to a hidden file we will need
to execute:

```bash
git clone --bare https://github.com/chingu-voyages/roundtable-advanced-git.git .bare
echo "gitdir: ./.bare" > .git
```

This will clone the repo into the `.bare` directory and tell git that its configuration files are located inside the `.bare`
directory

# Adding a branch

To add an existing branch to the worktree

```bash
git worktree add <the path to where the branch directory will be>
```

To add a new branch to the worktree

```bash
git worktree add -b <name of the branch> <the path to where the branch directory will be>
```

# Resources

- [Git worktrees](https://morgan.cugerone.com/blog/how-to-use-git-worktree-and-in-a-clean-way/)
- [Git website](https://git-scm.com/docs)
- [Boot.dev git course](https://www.boot.dev/lessons/65e6780d-fdde-447a-9898-b30b73793a3a)
- [Dangit git](https://dangitgit.com/)
