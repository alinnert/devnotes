# Dateien, Index und Stage

## Dateien wiederherstellen

### Datei aus Commit wiederherstellen

~~~
git checkout <commit-id> -- .\path\to\file
~~~

### Datei aus lokalem Repo (HEAD) wiederherstellen

~~~
git checkout -- .\path\to\file
~~~

### Lokale Änderungen rückgängig machen

Auf Stand von HEAD setzen

~~~
git reset --hard
~~~

## Index

### Neue Dateien nur indizieren

Indiziert Dateien nur, schiebt sie aber nicht in den Stage.

~~~
git add -N .
~~~

~~~
git add --intent-to-add .
~~~

::: info
Kann aber nicht für Stashes verwendet werden. Hierzu Dateien stattdessen in den Stage schieben.
:::

### Tracked Dateien aus Index entfernen

Z. B. nachdem man eine Datei im Repository nachträglich auf `.gitignore` gesetzt hat.

~~~
git rm --cached .\path\to\file
~~~

## Stage

### Datei aus Stage entfernen

~~~
git reset .\path\to\file
~~~

### Dateien im Index stagen

~~~
git add -u .
~~~

~~~
git add --update .
~~~

### Nur Teile einer Datei stagen

~~~
git add -p .\path\to\file
~~~

~~~
git add --patch .\path\to\file
~~~
