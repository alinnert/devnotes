# System-Infos

## Linux-Version anzeigen (z. B. `3.13.0-24-generic`)

~~~
uname -r
~~~

~~~
uname --kernel-release
~~~

## Ubuntu-Version anzeigen (z. B. `Ubuntu 14.04 LTS`)

~~~
cat /etc/issue
~~~

~~~
lsb_release -a
~~~

## CPU-Infos anzeigen

~~~
cat /proc/cpuinfo
~~~

## Suche in CPU-Info nach PAE-Unterstützung

~~~
grep pae /proc/cpuinfo
~~~

