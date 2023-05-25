# Systemdienste

## Skript bei jedem Systemstart ausführen

(Muss im Ordner `/etc/init.d/` liegen und ausführbar sein)

~~~
update-rc.d some-file defaults
~~~

## Service starten, beenden, neustarten

~~~
/etc/init.d/apache2 start/stop/restart
~~~

~~~
sudo service service-name start/stop/restart
~~~

## Apache2-Modul (de)aktivieren

~~~
a2enmod some-module
~~~

~~~
a2dismod some-module
~~~

## Netzwerk neustarten

~~~
sudo /etc/init.d/networking restart
~~~

~~~
sudo ifdown eth0 & ifup eth0
~~~

