import { getLibs } from '../../scripts/utils.js';

const labels = [
    'Brand', 'Model', 'Color', 'Style Code', 'Family', 'Year', 'Traction', 'MSRP', 'Credit'
]

// Add decorators for tags and brand names
// NIKE tree of football

export default async function init(el) {
    const { createTag } = await import(`${getLibs()}/utils/utils.js`);
    console.log(el);
    const details = createTag('div', { class: 'boot_details'});
    const children = Array.from(el.querySelectorAll(':scope > div'));
    // 1st, always img 
    children[0].className = 'boot_main-img';
    children.shift();

    children.forEach((element, idx) => {
        const lineItem = createTag('p', { class: `boot_line-item ${labels[idx]}`}, `${labels[idx]}: `);
        lineItem.append(element);
        if (labels[idx] === 'Family') {
          const metaItem = createTag('meta', { name: 'family', content: `${element.childNodes[1].textContent.trim()}`});
	        document.body.append(metaItem)
        }

        lineItem.setAttribute('content', `${element.childNodes[1].textContent.trim()}`);
        details.append(lineItem); 
    });


    el.append(details);
}
