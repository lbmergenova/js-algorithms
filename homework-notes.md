# Git Basics

Git is a free, open source tool that helps you save and manage different versions of your files and code.  
*Git — это бесплатный инструмент с открытым исходным кодом, который помогает сохранять и управлять различными версиями ваших файлов и кода.*

## Key Git Concepts

- **Repository**: A folder where Git tracks your project and its history.
*Папка, в которой Git отслеживает проект и историю изменений*

- **Clone**: Make a copy of a remote repository on your computer.  
*Создание локальной копии удалённого репозитория*

- **Stage**: Tell Git which changes you want to save next.  
*Подготовка изменений для следующего коммита*

- **Commit**: Save a snapshot of your staged changes.  
*Сохранение снимка подготовленных изменений*  

- **Branch**: Work on different versions or features at the same time.
*Отдельная версия проекта для разработки функций*

- **Merge**: Combine changes from different branches.  
*Объединение изменений из разных веток*  

- **Pull**: Get the latest changes from a remote repository.  
*Получение последних изменений из удалённого репозитория*

- **Push**: Send your changes to a remote repository.  
*Отправка своих изменений в удалённый репозиторий*
 


## Working with Git

### Initialize Repository

Initialize Git on a folder, making it a **Repository**  
To initialize Git in the current folder, use `git init`  
Git creates a hidden folder called **.git** inside your project to keep track of changes in that folder. 

### Stage Change

When a file is changed, added or deleted, it is considered modified  
You select the modified files you want to Stage  
To add a file to the staging area, use `git add <file>`  
To add multiple files to the staging area, use `git add --all`, `git add -A`, `git add .`  
To see staged and unstaged changes, use `git status`.
To unstage a file, use `git restore --staged <file>` 

### Commit Changes

The Staged files are Committed, which prompts Git to store a permanent snapshot of the files  
To commits use some key commands:  
`git commit -m "message"` - Commit staged changes with a message  
`git commit -a -m "message"` - Commit all tracked changes (skip staging)  

> **Troubleshooting Common Commit Mistakes**  
> ***Forgot to stage a file?***  
> If you run `git commit -m "message"` but forgot to git add a file, just add it and commit again.  
Or use `git commit --amend` to add it to your last commit.  
> ***Typo in your commit message?***  
> Use `git commit --amend -m "Corrected message"` to fix the last commit message.  
> ***Accidentally committed the wrong files?***  
> You can use `git reset --soft HEAD~1` to undo the last commit and keep your changes staged.   

### View Commit History

Git allows you to see the full history of every commit.  
To see commit history, use `git log`   
For a shorter view, use `git log --oneline`  
To see which files changed in each commit, use `git log --stat`  

You can revert back to any previous commit.  
Git does not store a separate copy of every file in every commit, but keeps track of changes made in each commit!  



## Git Config

### Configuration Levels
There are three levels of configuration:
- System (all users): git config --system
- Global (current user): git config --global
- Local (current repo): git config --local


### Viewing Your Configuration
#### List All Settings
```bash
git config --list
user.name=Your Name
user.email=you@example.com
core.editor=code --wait
alias.st=status
init.defaultbranch=main
...
```

#### View a Specific Setting
```bash
git config user.name
Your Name
```

### Changing or Unsetting Config Values 

To change a value, just run the git config command again with the new value.  
exemple: `git config user.name "New Name"`  
To remove a setting, use --unset:  
example: `git config --global --unset code.editor`


## .gitignore

The .gitignore file tells Git which files and folders to ignore (not track).

To create a .gitignore file use for exemple `touch .gitignore`

#### Wildcards & Patterns
Wildcards let you match many files or folders at once:

| Pattern | Description |
|---------|-------------|
| `*` | Matches any number of characters. |
| `?` | Matches a single character. |
| `[abc]` | Matches any character in the set. |
| `[!abc]` | Matches any character **not** in the set. |


*Examples* 
```text
*.tmp         # all .tmp files
my?ile.txt    # matches my1ile.txt, myAile.txt, etc.
log[0-9].txt  # matches log1.txt ... log9.txt
```


#### Negation (!)
Use ! to not ignore something that would otherwise be ignored. This is called an exception:  
*.log  
!important.log  
This ignores all .log files except important.log.

#### How to Stop Tracking a File
If you add a file to .gitignore but Git is still tracking it, you need to tell Git to stop:  
`git rm --cached filename.txt`  
This removes the file from the repository but keeps it on your computer. Next time you commit, Git will ignore it.