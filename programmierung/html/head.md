# HTML head

## Icons einbinden

### Minimal notwendige Icons

~~~ html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<!-- 180x180 -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<!-- Rest aus dem Manifest laden: 512x512, 192x192 -->
<link rel="manifest" href="application.webmanifest">
~~~

## Fonts

### Preload fonts

~~~ html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
>
~~~