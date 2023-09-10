import { getLibs } from '../../scripts/utils.js';
const { createTag } = await import(`${getLibs()}/utils/utils.js`);

const  setTags =  async (ele, ts) => {
  let tagLink;
  ts.forEach((tag) => {
    if (tag.includes('Kylian Mbappé')) {
      let spTag;
      spTag = tag.replaceAll('Kylian Mbappé', 'kylian-mbappe');
      tagLink = createTag('a', { class: 'tag', href: `/family/${spTag.trim()}`}, tag.trim());
    } else {
        tagLink = createTag('a', { class: 'tag', href: `/family/${tag.trim().replaceAll(' ', '-').toLocaleLowerCase()}`}, tag.trim());
    }
    // ele.append(tagLink)
    ele.append(tagLink)
    // ele.innerHTML = ele.innerHTML.replace(`${tag.trim()}`, tagLink)
  });
};

// Add decorators for tags and brand names
// NIKE tree of football

export default async function init(el) {
    el.querySelector('div').className = 'hide'
    const tags = el.textContent.trim().split(',');
    console.log(tags);
    setTags(el, tags);

}
