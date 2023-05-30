# System-Infos

## Linux-Version anzeigen

Z. B.: `3.13.0-24-generic`

~~~ sh
uname -r
~~~

~~~ sh
uname --kernel-release
~~~

## Ubuntu-Version anzeigen

Z. B.: `Ubuntu 14.04 LTS`

~~~ sh
cat /etc/issue
~~~

~~~ sh
lsb_release -a
~~~

## CPU-Infos anzeigen

~~~ sh
cat /proc/cpuinfo
~~~

## Suche in CPU-Info nach PAE-Unterstützung

~~~ sh
grep pae /proc/cpuinfo
~~~
