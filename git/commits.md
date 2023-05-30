# Commits

## Changes zum letzten Commit hinzufügen

Wenn vor einem `git commit` ein `git add` vergessen wurde.

> Vermeiden, Changes zu einem Commit hinzuzufügen, der bereits gepusht wurde!

~~~ sh
git commit --amend --no-edit
~~~

## Letzten Commit rückgängig machen

~~~ sh
git reset --soft HEAD~<n>
~~~

`<n>` ist die Anzahl der Commits, die rückgängig gemacht werden sollen. Die Changes aus den Commits landen im Stage.

## Einzelnen Commit in aktuellen Branch mergen

~~~ sh
git cherry-pick <commit-id>
~~~

## Commit löschen, der bereits gepusht wurde

Anleitung hier: <https://ncona.com/2011/07/how-to-delete-a-commit-in-git-local-and-remote/>
