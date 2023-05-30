# SSH

## Direktverbindung

### Verbindung aufbauen

~~~ sh
ssh -p port username@host
~~~

~~~ sh
ssh -l username -p port host
~~~

## SCP

### Datei herunterladen

~~~ sh
scp username@example.com:/path/to/file.ext /local/dir
~~~

### Datei hochladen

~~~ sh
scp /local/file.ext username@example.com:/remote/dir
~~~

