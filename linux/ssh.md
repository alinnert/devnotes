# SSH

## Direktverbindung

### Verbindung aufbauen

~~~
ssh -p port username@host
~~~

~~~
ssh -l username -p port host
~~~

## SCP

### Datei herunterladen

~~~
scp username@example.com:/path/to/file.ext /local/dir
~~~

### Datei hochladen

~~~
scp /local/file.ext username@example.com:/remote/dir
~~~

