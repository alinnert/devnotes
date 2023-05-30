# Systemdienste

## Skript bei jedem Systemstart ausführen

~~~ sh
update-rc.d some-file defaults
~~~

Muss im Ordner `/etc/init.d/` liegen und ausführbar sein.

## Service starten, beenden, neustarten

~~~ sh
/etc/init.d/apache2 start/stop/restart
~~~

~~~ sh
sudo service service-name start/stop/restart
~~~

## Apache2-Modul (de)aktivieren

~~~ sh
a2enmod some-module
~~~

~~~ sh
a2dismod some-module
~~~

## Netzwerk neustarten

~~~ sh
sudo /etc/init.d/networking restart
~~~

~~~ sh
sudo ifdown eth0 & ifup eth0
~~~

