# Dateien, Index und Stage

## Dateien wiederherstellen

### Datei aus Commit wiederherstellen

~~~ sh
git checkout <commit-id> -- ./path/to/file
~~~

### Datei aus lokalem Repo (HEAD) wiederherstellen

~~~ sh
git checkout -- ./path/to/file
~~~

### Lokale Änderungen rückgängig machen

Auf Stand von HEAD setzen

~~~ sh
git reset --hard
~~~

## Index

### Neue Dateien nur indizieren

Indiziert Dateien nur, schiebt sie aber nicht in den Stage.

~~~ sh
git add -N .
~~~

~~~ sh
git add --intent-to-add .
~~~

::: info
Kann aber nicht für Stashes verwendet werden. Hierzu Dateien stattdessen in den Stage schieben.
:::

### Tracked Dateien aus Index entfernen

Z. B. nachdem man eine Datei im Repository nachträglich auf `.gitignore` gesetzt hat.

~~~ sh
git rm --cached ./path/to/file
~~~

## Stage

### Datei aus Stage entfernen

~~~ sh
git reset ./path/to/file
~~~

### Dateien im Index stagen

~~~ sh
git add -u .
~~~

~~~ sh
git add --update .
~~~

### Nur Teile einer Datei stagen

~~~ sh
git add -p ./path/to/file
~~~

~~~ sh
git add --patch ./path/to/file
~~~
