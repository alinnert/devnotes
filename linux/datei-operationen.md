# Datei-Operationen

## Datei ausführbar machen

~~~
chmod +x some-file
~~~

## Eine Datei suchen

~~~
find / -name some-file
~~~

## Ordner samt Inhalt löschen

~~~
rm -rf some-folder
~~~

~~~
rm --recursive --force some-folder
~~~

## Symlink erstellen

~~~
ln -s link-target new-link
~~~

~~~
ln --symbolic link-target new-link
~~~

> Wenn `new-link` bereits existiert, wird `link-target` (letztes Pfadsegment)
> innerhalb von `new-link` erstellt.
> Wenn `new-link` nicht existiert, wird der Inhalt von `link-target`
> innerhalb von `new-link` verfügbar sein.

