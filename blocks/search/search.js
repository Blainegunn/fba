import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
    const { createTag } = await import(`${getLibs()}/utils/utils.js`);

    const prompt = createTag('input', { class: 'search-prompt' });
    const go = createTag('button', { class: 'search-go' }, 'search');
    const searchResults = createTag('div', { class: 'search-results' });

    el.append(prompt);
    el.append(go);
    el.append(searchResults);

    go.addEventListener('click', async () => {
      const queryValue = prompt.value;
      console.log(queryValue);
      const qResp = await fetch('/boots/query-index.json');
      if (!qResp.ok) return;
      const qJson = await qResp.json();


      for (const boot of qJson.data) {
        console.log(queryValue.toLowerCase());
        if (boot.family.toLowerCase().includes(queryValue.toLowerCase())) {
            console.log(boot.family);
            const bootEntry = createTag('a', { class: 'bootList-item', href: `${boot.path}`  });
            const title = createTag('p', { class: 'bootList-item-title' }, `${boot.title}`);
            const img = createTag('img', { class: 'bootList-item-img', src: `${boot.image}` }, `${boot.title}`);
            bootEntry.append(img);
            bootEntry.append(title);
            searchResults.append(bootEntry);
        }
    
      }

    })

}
