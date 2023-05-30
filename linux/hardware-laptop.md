# Laptop-Hardware

## Laptop nicht in Standby fahren, wenn Deckel geschlossen wird

Datei: `/etc/systemd/logind.conf`

~~~ sh
HandleLidSwitch=ignore
~~~

