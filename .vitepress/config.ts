import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DevNotes',
  description: 'My personal notes',
  base: '/devnotes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux', link: '/linux/datei-operationen' },
    ],

    sidebar: [
      {
        text: 'Linux',
        items: [
          { text: 'Datei-Operationen', link: '/linux/datei-operationen' },
          { text: 'Dateien übertragen', link: '/linux/datei-transfer' },
          {
            text: 'Dateien packen/entpacken',
            link: '/linux/datei-packen-entpacken',
          },
          { text: 'Dienste', link: '/linux/system-dienste' },
          { text: 'System-Infos', link: '/linux/system-infos' },
          { text: 'Laptop', link: '/linux/hardware-laptop' },
          { text: 'Netz-Laufwerke', link: '/linux/netzlaufwerke' },
          { text: 'GUI', link: '/linux/gui' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alinnert/devnotes' },
    ],
  },
})
