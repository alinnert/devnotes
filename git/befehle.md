# Git - Wichtige Befehle

## Einen Branch erstellen

~~~
git checkout -b <branch-name>
~~~

## Aktuellen Branch pushen und einen upstream-branch zuweisen

~~~
git push --set-upstream/-u <remote-name> <remote-branch-name>
~~~

## Remote-Branches anzeigen

~~~
git branch --remotes/-r
~~~

## Remote-Branch löschen

~~~
git push --delete/-d <remote-name> <branch-name>
~~~

## Einzelne Datei aus einem bestimmten Commit wiederherstellen

~~~
git checkout <commit-id> -- .\path\to\file
~~~

## Einzelne Datei aus dem lokalen Repo (HEAD) wiederherstellen

~~~
git checkout -- .\path\to\file
~~~

## Staging von Dateien rückgängig machen

~~~
git reset .\path\to\file
~~~

## Alle Dateien stagen, außer untracked

~~~
git add --update/-u .
~~~

## Untracked Dateien in den Workspace (aber nicht in den Stash) schieben

Kann aber nicht für stashes verwendet werden. Hierzu Dateien einfach in den Stage schieben.

~~~
git add --intent-to-add/-N .
~~~

## Nur Teile einer Datei in den Stage schieben

~~~
git add --patch/-p .\path\to\file
~~~

## Tracked Dateien aus Index entfernen

Z. B. nachdem man eine Datei im Repository nachträglich auf `.gitignore` gesetzt hat.

~~~
git rm --cached .\path\to\file
~~~

## Changes zum letzten Commit hinzufügen

Wenn vor einem `git commit` ein `git add` vergessen wurde.

> Vermeiden, Changes zu einem Commit hinzuzufügen, der bereits gepusht wurde!

~~~
git commit --amend --no-edit
~~~

## Lokale Änderungen rückgängig machen

Auf Stand von HEAD setzen

~~~
git reset --hard
~~~

## Letzten Commit rückgängig machen

~~~
git reset --soft HEAD~<n>
~~~

`<n>` ist die Anzahl der Commits, die rückgängig gemacht werden sollen. Die Changes aus den Commits landen im Stage.

## Alles stashen, auch Dateien, die nicht im Index liegen

~~~
git stash --include-untracked/-u
~~~

## Lokalen Branch löschen

~~~
git branch --delete/-d <branch-name>
~~~

## Einzelnen Commit in aktuellen Branch mergen

~~~
git cherry-pick <commit-id>
~~~

## Commit löschen, der bereits gepusht wurde

Anleitung hier: <https://ncona.com/2011/07/how-to-delete-a-commit-in-git-local-and-remote/>