module.exports = {
  title: 'Yacht',
  tagline: 'A container management UI with a focus on templates and 1-click deployments.',
  url: 'https://yach.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'SelfhostedPro', // Usually your GitHub org/user name.
  projectName: 'Yacht', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yacht',
      logo: {
        alt: 'Yacht Logo',
        src: '/img/logo-light.svg',
        srcDark: '/img/logo.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/SelfhostedPro/Yacht',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/Installation/Getting_Started',
            },
            {
              label: 'Projects',
              to: 'docs/Projects/Projects',
            },
            {
              label: 'Developer Information',
              to: 'docs/Developer_Information/Guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/KpKutvC',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SelfhostedPro/Yacht',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SelfhostedPros. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/SelfhostedPro/Yacht-Docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SelfhostedPro/Yacht-Docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
