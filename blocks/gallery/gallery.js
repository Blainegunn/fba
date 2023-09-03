// import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
    // const { createTag } = await import(`${getLibs()}/utils/utils.js`);
    console.log(el);
    // const details = createTag('div', { class: 'boot_details'});
    el.querySelector(':scope > div > div').className = 'gallery-wrapper';
    const children = Array.from(el.querySelectorAll(':scope > div > div > picture > img'));
    children.forEach( (item) => {
        item.className = 'gallery-img';
    });

    const childrenPic = Array.from(el.querySelectorAll(':scope > div > div > picture '));
    childrenPic.forEach( (item) => {
        item.className = 'gallery-pic';
    });
};
