import { getLibs } from '../../scripts/utils.js';
const { createTag } = await import(`${getLibs()}/utils/utils.js`);

const  setTags =  async (ele, ts) => {
  console.log((`setting tags for  ${ts}`));
  ts.forEach((tag) => {

    const tagLink = createTag('a', { class: 'tag', href: `/family/${tag.trim().replaceAll(' ', '-').toLocaleLowerCase()}`}, tag.trim());
    console.log('tagLink');
    console.log(ele.innerText);
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
