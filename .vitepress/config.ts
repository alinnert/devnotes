import { defineConfig } from 'vitepress'

const base = '/devnotes/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DevNotes',
  description: 'My personal notes',
  base,
  head: [['link', { rel: 'manifest', href: `${base}devnotes.webmanifest` }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: 'Inhalt',
      level: [2, 3],
    },

    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite',
    },

    editLink: {
      text: 'Diese Seite bearbeiten',
      pattern: 'https://github.com/alinnert/devnotes/edit/main/:path',
    },

    nav: [
      {
        text: 'Startseite',
        link: '/',
      },
      {
        text: 'Programmierung',
        link: '/programmierung/html/head',
        activeMatch: '^/programmierung/',
      },
      {
        text: 'Betriebssysteme',
        link: '/betriebssysteme/linux/datei-operationen',
        activeMatch: '^/betriebssysteme/',
      },
      {
        text: 'Software',
        link: '/software/ssh',
        activeMatch: '^/software/',
      },
    ],

    sidebar: {
      '/programmierung/': [
        {
          text: 'HTML',
          items: [
            {
              text: 'HTML Head',
              link: '/programmierung/html/head',
            },
            {
              text: 'Webapp Manifest',
              link: '/programmierung/html/webappmanifest',
            },
          ],
        },
      ],

      '/software/': [
        { text: 'SSH', link: '/software/ssh' },
        { text: 'ImageMagick', link: '/software/imagemagick' },
        { text: 'PowerShell', link: '/software/powershell' },
        {
          text: 'Git',
          items: [
            {
              text: 'Dateien, Index und Stage',
              link: '/software/git/dateien',
            },
            {
              text: 'Stash',
              link: '/software/git/stash',
            },
            {
              text: 'Branches',
              link: '/software/git/branches',
            },
            {
              text: 'Commits',
              link: '/software/git/commits',
            },
          ],
        },
      ],

      '/betriebssysteme/': [
        {
          text: 'Linux',
          items: [
            {
              text: 'Datei-Operationen',
              link: '/betriebssysteme/linux/datei-operationen',
            },
            {
              text: 'Dateien packen/entpacken',
              link: '/betriebssysteme/linux/datei-packen-entpacken',
            },
            {
              text: 'Dienste',
              link: '/betriebssysteme/linux/system-dienste',
            },
            {
              text: 'System-Infos',
              link: '/betriebssysteme/linux/system-infos',
            },
            {
              text: 'Laptop',
              link: '/betriebssysteme/linux/hardware-laptop',
            },
            {
              text: 'Netz-Laufwerke',
              link: '/betriebssysteme/linux/netzlaufwerke',
            },
            {
              text: 'GUI',
              link: '/betriebssysteme/linux/gui',
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alinnert/devnotes' },
    ],
  },
})
