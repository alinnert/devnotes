# Branches

## Lokal

### Lokalen Branch erstellen

~~~ sh
git checkout -b <branch-name>
~~~

### Lokalen Branch löschen

~~~ sh
git branch -d <branch-name>
~~~

~~~ sh
git branch --delete <branch-name>
~~~

### Lokalen Branch pushen und upstream-branch zuweisen

~~~ sh
git push -u <remote-name> <remote-branch-name>
~~~

~~~ sh
git push --set-upstream <remote-name> <remote-branch-name>
~~~

## Remote

### Remote-Branches anzeigen

~~~ sh
git branch -r
~~~

~~~ sh
git branch --remotes
~~~

### Remote-Branch löschen

~~~ sh
git push -d <remote-name> <branch-name>
~~~

~~~ sh
git push --delete <remote-name> <branch-name>
~~~
