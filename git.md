# GIT COMMANDS

### INSTALL GIT BASH

1. Run the command `git --version`
2. If there's an error, install [Git Bash](https://git-scm.com/)
3. Choose default options, but override the branch name with main.
4. Reload VS Code to apply changes.

### INSTALL GITHUB CLI

1. Run the command `gh --version`
2. If there's an error, install [GitHub CLI](https://cli.github.com/)
3. Choose default options.
4. Reload VS Code to apply changes.

### CONFIGURE USER NAME

1. `git init`
2. Run the command `git config user.name`
3. If it's not correct, run the command `git config user.name "Xasbus"`
4. Set as default user name, run command:
   - `git config --global user.name "Xasbus"`

### CONFIGURE USER EMAIL

1. `git init`
2. Run the command `git config user.email`
3. If it's not correct,  run the command `git config user.email "my@email.com"`
4. Set as default user email, run command: 
   - `git config --global user.email "davidbilliot0828@gmail.com"`

### COPY THE REPOSITORY LINK

1. Open GitHub
2. Open the repository
3. Click on the green Code button
4. Copy the HTTPS link

### PULL FROM GITHUB

```
- git init
- git remote add origin https://github.com/myRepositoryLink
- git pull origin main
```

### DELETE UNUSED FILES

1. If there are files that VS Code doesn't need (like Glitch files), delete those.

### CREATE A NEW REPOSITORY IN GITHUB

1. Click on the cat icon at the top left.
2. Click on the green new button at the top left.
3. Enter the repository name.
4. Click Create repository.
5. Do not change the default settings.

### PUSH TO GITHUB FOR THE FIRST TIME

```
1. gh auth login
2. git remote set-url origin https://github.com/myRepositoryLink2
3. git add .
4. git commit -m "added files"
5. git push --set-upstream origin main
```
   
### PUSH TO GITHUB REGULARLY

```
- git add .
- git commit -m "the changes I made"
- git push
```

### RENAME DEFAULT BRANCH TO MAIN

- `git branch -M main`

### SET GLOBAL DEFAULT BRANCH TO MAIN

- `git config --global init.defaultBranch main`

### COMMAND DESCRIPTIONS

1. `git init`
   - Initializes source control
2. `git pull origin main` 
    - Copies files from the origin
3. `gh auth login`
   - Grants authorization to push to your repository
4. `git remote set-url origin`
   - Sets the origin
5. `git push --set-upstream origin main`
   - Pushes files to GitHub and makes origin and main the
6. default options
   - press enter 4 times or until complete

### DELETE SOURCE CONTROL

```
ls -a
rm -rf .git
```
- `-r` means recursive, 
- `-rf` means recursive and force

### VIEW BRANCHES

`git branch`
- Will list all branches (*) signals which branch you are currently using

### CREATE A BRANCH

`git branch name_New_Branch`

### SWITCH TO A BRANCH

`git switch branch_Name_Here`

### MERGE BRANCHES

`git merge myBranch`

- Merge the branches:
1. Switch to the target branch (main).
2. Merge the other branch (myBranch).

---
### MERGE TEST

1. `git init`
2. `touch index.html`
3. `git commit -m "added files"`
4. Create a github repository called merge-test.
5. `git remote add origin "https://github.com/Xasbus/merge-test.git"`
6. `git push --set-upstream origin main`
7. `git branch`
8. `git branch myBranch`
9. `git switch myBranch`
10. Add <p> Hello World!</p> to index.html
11. Save the changes CTRL + S
12. `git add .`
13. `git commit -m "updated file"`
14. `git switch main`
15. Change the history from `auto` to `all`.
16. `git merge myBranch`
17. `git push`
18. `git switch myBranch`
19. Add <p> Amazing World!</p> to index.html.
20. Save the changes CTRL + S
21. `git add .`
22. `git commit -m "updated file"`
23. `git switch main`
24. Add the file about.html with `touch about.html`
25. `git add .`
26. `git commit -m "added a file"`
27. `git merge myBranch`
28. Approve the editor and type `:qa` and `ENTER`
29. `git rebase myBranch`
30. `git push`
31. `git switch myBrance`
32. `git rebase main`
33. Add <h1>About Page</h1> to about.html
34. Save the changes CTRL + S
35. `git add .`
36. `git commit -m "added heading"`
37. `Git switch main`
38. Add <h2>About Page</h2 > to about.html
39. Save the changes CTRL + S
40. `git add .`
41. `git commit -m "added heading conflict"`
42. `git merge myBranch`
43. SHOWS CONFLICT
44. Select a resolution.
45. Save the changes CTRL + S
46. `git add .`
47. `git commit -m "merged changes"`
48. `git push`