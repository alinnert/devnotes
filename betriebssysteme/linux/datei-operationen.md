# Datei-Operationen

## Datei ausführbar machen

~~~ sh
chmod +x some-file
~~~

## Eine Datei suchen

~~~ sh
find / -name some-file
~~~

## Ordner samt Inhalt löschen

~~~ sh
rm -rf some-folder
~~~

~~~ sh
rm --recursive --force some-folder
~~~

## Symlink erstellen

~~~ sh
ln -s link-target new-link
~~~

~~~ sh
ln --symbolic link-target new-link
~~~

Wenn `new-link` bereits existiert, wird `link-target` (letztes Pfadsegment) innerhalb von `new-link` erstellt.

Wenn `new-link` **nicht** existiert, wird der Inhalt von `link-target` innerhalb von `new-link` verfügbar sein.
