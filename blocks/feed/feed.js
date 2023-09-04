import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
    const family = el.querySelector('div').textContent.trim();
    console.log(family);
    const { createTag } = await import(`${getLibs()}/utils/utils.js`);
    const qResp = await fetch('/boots/query-index.json');
    if (!qResp.ok) return;
    const list = createTag('div', { class: 'blog-list-container' });
    const qJson = await qResp.json();
    console.log(qJson);
  for (const boot of qJson.data) {
    console.log(boot.family.toLowerCase());
    if (boot.family.toLowerCase().includes(family)) {
        console.log(boot.family);
        const resp = await fetch(`${boot.path}.plain.html`);
        if (!resp.ok) return;
        const bootEntry = createTag('a', { class: 'bootList-item', href: `${boot.path}`  });
        const title = createTag('p', { class: 'bootList-item-title' }, `${boot.title}`);
        const img = createTag('img', { class: 'bootList-item-img', src: `${boot.image}` }, `${boot.title}`);
        bootEntry.append(img);
        bootEntry.append(title);
        el.append(bootEntry);
    }

  }
}
