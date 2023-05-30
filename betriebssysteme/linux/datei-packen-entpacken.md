# Dateien packen und entpacken

## tar

### Dateien packen

~~~ sh
tar -czvf archive.tar.gz directory
~~~

~~~ sh
tar --create --gzip --verbose --file archive.tar.gz directory
~~~

### Dateien entpacken

~~~ sh
tar -xzvf archive.tar.gz
~~~

~~~ sh
tar --extract --gzip --verbose --file archive.tar.gz
~~~

### Inhalt eines Archivs anzeigen

~~~ sh
tar -ztvf archive.tar.gz
~~~

## zip

### Dateien packen

~~~ sh
zip archive.zip file1 file2
~~~

### Dateien entpacken

~~~ sh
unzip archive.zip
~~~

### Dateien in Verzeichnis entpacken

~~~ sh
unzip archive.zip -d /path/to/directory
~~~

### Dateien beim Entpacken ausschließen

~~~ sh
unzip archive.zip -x file1 file2
~~~

### Dateien entpacken und überschreiben

~~~ sh
unzip -o archive.zip
~~~

### Inhalt eines Archivs anzeigen

~~~ sh
unzip -l archive.zip
~~~
