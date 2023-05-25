# Dateien packen und entpacken

## tar

### Datei packen

~~~
tar -czvf archive.tar.gz directory
~~~

~~~
tar --create --gzip --verbose --file archive.tar.gz directory
~~~

### Datei entpacken

~~~
tar -xzvf archive.tar.gz
~~~

~~~
tar --extract --gzip --verbose --file archive.tar.gz
~~~

### Inhalt eines Archivs anzeigen

~~~
tar -ztvf archive.tar.gz
~~~

