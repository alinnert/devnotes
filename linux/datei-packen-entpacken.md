# Dateien packen und entpacken

## tar

### Dateien packen

~~~
tar -czvf archive.tar.gz directory
~~~

~~~
tar --create --gzip --verbose --file archive.tar.gz directory
~~~

### Dateien entpacken

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

## zip

### Dateien packen

~~~
zip archive.zip file1 file2
~~~

### Dateien entpacken

~~~
unzip archive.zip
~~~

### Dateien in Verzeichnis entpacken

~~~
unzip archive.zip -d /path/to/directory
~~~

### Dateien beim Entpacken ausschließen

~~~
unzip archive.zip -x file1 file2
~~~

### Dateien entpacken und überschreiben

~~~
unzip -o archive.zip
~~~

### Inhalt eines Archivs anzeigen

~~~
unzip -l archive.zip
~~~
