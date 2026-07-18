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





# Основные этапы GitHub Flow:

1. Создать новую ветку от `main`: `git branch <name-branch>` потом `git checkout -b <name-branch>` или сразу `git checkout -b <name-branch>`, `git switch -c <name-branch>h`
2. Внести необходимые изменения в код `git add <file>`
3. Сделать один или несколько коммитов `git commit -m "message"`
4. Отправить ветку на GitHub с помощью `git push`.
5. Создать **Pull Request**.
6. Пройти код-ревью и при необходимости внести исправления.
7. После одобрения выполнить **Merge** Pull Request в ветку `main`.
8. При необходимости удалить рабочую ветку, так как она больше не нужна.


| Команда                                        | Описание                                                                                                                                              |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git branch`                                   | Показать список локальных веток. Текущая ветка отмечена `*`.                                                                                          |
| `git commit --allow-empty -m "Initial commit"` | Создать коммит без изменений в файлах. Полезно для создания первого коммита или тестирования.                                                         |
| `git log --oneline --decorate`                 | Показать историю коммитов в сокращённом виде с указанием веток и тегов.                                                                               |
| `git log --oneline --decorate --graph --all`   | Показать историю всех веток в виде графа.                                                                                                             |
| `git log --reverse --oneline <branch>`         | Показать историю ветки от самого первого коммита к последнему.                                                                                        |
| `git reset --hard HEAD~N`                      | Переместить ветку на `N` коммитов назад, удалив изменения из индекса и рабочей директории.                                                            |
| `git reset --soft`                             | Переместить указатель `HEAD`, сохранив изменения в индексе (обычно используется с указанием коммита).                                                 |
| `git reset --soft HEAD~1`                      | Отменить последний коммит, оставив все изменения подготовленными к новому коммиту (`staged`).                                                         |
| `git restore --staged <file>`                  | Убрать файл из области подготовки (`stage`), сохранив изменения в рабочем каталоге.                                                                   |
| `git push --force-with-lease`                  | Безопасно перезаписать историю удалённой ветки, если её никто не изменил после вашего последнего получения изменений.                                 |
| `git show --no-patch --oneline <branch>`       | Показать информацию о последнем коммите указанной ветки без списка изменений.                                                                         |
| `git show e43e9ed --oneline`                   | Показать информацию о конкретном коммите (при необходимости — и его изменения).                                                                       |
| `git cherry-pick`                              | Перенести один или несколько коммитов из другой ветки в текущую.                                                                                      |
| `git cherry-pick e43e9ed^..0b0de57`            | Перенести диапазон коммитов из одной ветки в текущую.                                                                                                 |
| `git rebase`                                   | Перенести коммиты текущей ветки поверх другой ветки, сохранив линейную историю.                                                                       |
| `git rebase -i --root`                         | Интерактивно изменить всю историю проекта, начиная с первого коммита.                                                                                 |
| `git push --force origin main`                 | Принудительно перезаписать удалённую ветку. Использовать с осторожностью.                                                                             |
| `git push -u origin <name-branch>`             | Отправить ветку на сервер и связать её с удалённой веткой (`upstream`).                                                                               |
| `git remote -v`                                | Показать список удалённых репозиториев и их URL.                                                                                                      |
| `git remote add origin <URL>`                  | Добавить удалённый репозиторий с именем `origin`.                                                                                                     |
| `git checkout --orphan main`                   | Создать новую ветку без истории коммитов.                                                                                                             |
| `git rm -rf .`                                 | Удалить все отслеживаемые файлы из рабочего каталога и подготовить удаление к коммиту.                                                                |
| `git rm -rf --cached .`                        | Удалить все файлы только из индекса Git, оставив их на диске.                                                                                         |
| `git branch -D <branch>`                       | Принудительно удалить локальную ветку.                                                                                                                |
| `git branch -m <new-name>`                     | Переименовать текущую ветку.                                                                                                                          |
| `git branch -vv`                               | Показать локальные ветки, их последние коммиты и связанные удалённые ветки.                                                                           |
| `git branch -r` | Показать список удалённых веток (remote branches), доступных в репозитории.     |   

 Переключились на новую ветку «experiment/test-branch»

git reflog

# Памятка по правилам ревью.

## Тон комментариев:

• 🟢 Предложение: «Предлагаю...», «Можно...» — автор сам решает
• 🔴 Критическое: «Нужно...», «Необходимо...» — обязательно к исправлению

## Итог ревью:

• Только предложения → Approve ✅ (PR можно принимать)
• Есть критические замечания → Request changes ❌ (PR блокируется до исправления)

## Что проверяем:

1. Корректность — правильно ли работает код?
2. Граничные случаи — пустые строки, undefined, отрицательные числа
3. Правила модуля — не используются ли запрещённые методы?
4. Читаемость — понятны ли имена?
5. Тесты — покрыты ли основные и граничные случаи?

> Правило модуля: нужно одобрение двух ревьюеров.


## Pin-сообщение

🔍 PR на ревью: [7 функций сравнения строк]
📎 Ссылка: https://github.com/твой-username/js-algorithms/pull/1
👥 Нужны ревью от: @username1, @username2
📋 2 аппрува для мержа
