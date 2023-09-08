import { getLibs } from '../../scripts/utils.js';
const { createTag } = await import(`${getLibs()}/utils/utils.js`);


// const labels = [
//     'Brand', 'Model', 'Color', 'Style Code', 'Family', 'Year', 'Traction', 'MSRP', 'Credit'
// ]
const labels = [
  'Brand', 'Model', 'Color', 'Style Code', 'Year', 'Traction', 'MSRP', 'Credit', 'Tags'
]

const  setTags =  async (ele, ts) => {
  console.log((`setting tags for  ${ts}`));
  ele.querySelector('div').className = 'hide'
  ts.forEach((tag) => {

    const tagLink = createTag('a', {class: 'boot-tag',  href: `/family/${tag.trim().replaceAll(' ', '-').toLocaleLowerCase()}`}, tag.trim());
    console.log('tagLink');
    console.log(ele.innerText);
    ele.append(tagLink)
    // ele.innerHTML = ele.innerHTML.replace(`${tag.trim()}`, tagLink)
  });
};

// Add decorators for tags and brand names
// NIKE tree of football

export default async function init(el) {
    // const { createTag } = await import(`${getLibs()}/utils/utils.js`);
    const details = createTag('div', { class: 'boot_details'});
    const children = Array.from(el.querySelectorAll(':scope > div'));
    // 1st, always img 
    children[0].className = 'boot_main-img';
    children.shift();

    children.forEach((element, idx) => {
        const lineItem = createTag('p', { class: `boot_line-item ${labels[idx]}`}, `${labels[idx]}: `);
        lineItem.append(element);
        if (labels[idx] === 'Tags') {
          const tags = element.childNodes[1].textContent.trim();
          const tagsArr = tags.split(',');
          setTags(element, tagsArr);



          // const metaItem = createTag('meta', { name: 'family', content: tags});
	        // document.body.append(metaItem);
          // console.log(tagsArr);

          // tagsArr.forEach((tag) => {

          //   const tagLink = createTag('a', { href: `/${tag.trim()}`}, tag.trim());
          //   console.log('tagLink');
          //   console.log(element);
          //   // element = tagLink;
          // });


        }

        // lineItem.setAttribute('content', `${element.childNodes[1].textContent.trim()}`);
        details.append(lineItem); 
    });


    el.append(details);
}
