// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Rehype plugin: ovije vsako markdown <table> v <div class="table-scroll">,
// da se na ozkih zaslonih skrola vodoravno (namesto da se stolpci zlepijo).
function rehypeTableWrap() {
  return (tree) => {
    const visit = (node) => {
      if (!node.children) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === 'element' && child.tagName === 'table') {
          node.children[i] = {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-scroll'] },
            children: [child],
          };
        } else {
          visit(child);
        }
      }
    };
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  // Produkcijska domena (Cloudflare Pages). Rabi jo sitemap + kanonični URL-ji.
  site: 'https://skolailab.com',

  markdown: {
    rehypePlugins: [rehypeTableWrap],
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // 404 in rss.xml nista za indeks; ostalo (vključno z /blog) gre v sitemap.
      filter: (page) => !/\/404\/?$/.test(page) && !/\/rss\.xml$/.test(page),
    }),
  ],
});