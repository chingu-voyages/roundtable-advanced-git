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

```bash
git commit --trailer "Signed-off-by:C O Mitter \ <committer@example.com>" --trailer "Helped-by:C O Mitter \ <committer@example.com>"
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

# Resources

- [Git worktrees](https://morgan.cugerone.com/blog/how-to-use-git-worktree-and-in-a-clean-way/)
- [Git website](https://git-scm.com/docs)
- [Boot.dev git course](https://www.boot.dev/lessons/65e6780d-fdde-447a-9898-b30b73793a3a)
- [Dangit git](https://dangitgit.com/)
