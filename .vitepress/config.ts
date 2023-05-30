import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DevNotes',
  description: 'My personal notes',
  base: '/devnotes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: { label: 'Inhalt', level: [2, 3] },
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    editLink: {
      text: 'Diese Seite bearbeiten',
      pattern: 'https://github.com/alinnert/devnotes/edit/main/:path',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Git', link: '/git/dateien' },
      { text: 'Linux', link: '/linux/datei-operationen' },
    ],

    sidebar: {
      '/git/': [
        {
          text: 'Git',
          items: [
            { text: 'Dateien, Index und Stage', link: '/git/dateien' },
            { text: 'Stash', link: '/git/stash' },
            { text: 'Branches', link: '/git/branches' },
            { text: 'Commits', link: '/git/commits' },
          ],
        },
      ],
      '/linux/': [
        {
          text: 'Linux',
          items: [
            { text: 'Datei-Operationen', link: '/linux/datei-operationen' },
            {
              text: 'Dateien packen/entpacken',
              link: '/linux/datei-packen-entpacken',
            },
            { text: 'Dateien übertragen', link: '/linux/ssh' },
            { text: 'Dienste', link: '/linux/system-dienste' },
            { text: 'System-Infos', link: '/linux/system-infos' },
            { text: 'Laptop', link: '/linux/hardware-laptop' },
            { text: 'Netz-Laufwerke', link: '/linux/netzlaufwerke' },
            { text: 'GUI', link: '/linux/gui' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alinnert/devnotes' },
    ],
  },
})
