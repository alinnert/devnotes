# Branches

## Lokal

### Lokalen Branch erstellen

~~~
git checkout -b <branch-name>
~~~

### Lokalen Branch löschen

~~~
git branch -d <branch-name>
~~~

~~~
git branch --delete <branch-name>
~~~

### Lokalen Branch pushen und upstream-branch zuweisen

~~~
git push -u <remote-name> <remote-branch-name>
~~~

~~~
git push --set-upstream <remote-name> <remote-branch-name>
~~~

## Remote

### Remote-Branches anzeigen

~~~
git branch -r
~~~

~~~
git branch --remotes
~~~

### Remote-Branch löschen

~~~
git push -d <remote-name> <branch-name>
~~~

~~~
git push --delete <remote-name> <branch-name>
~~~
