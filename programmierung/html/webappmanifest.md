# Web application manifest

## Manifest einbinden

~~~ html
<link rel="manifest" href="/webapp.webmanifest">
~~~

## Manifest-JSON

~~~ json
{
  "name": "DevNotes",
  "short_name": "DevNotes",
  "start_url": ".",
  "display": "standalone",
  "description": "Persönliche Notizen von Andreas Linnert",
  "lang": "de-DE",
  // Zum Ausblenden der Titel-Leiste
  "display_override": ["window-controls-overlay"],
  "icons": [
    {
      "src": "favicon.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "icon-64.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "icon-100.png",
      "sizes": "100x100",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
~~~