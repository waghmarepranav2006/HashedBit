const textContainer = document.getElementById('text-container');
const colorInput = document.getElementById('colorbox');
const sizeSlider = document.getElementById('fontsize');
const fontDropdown = document.getElementById('list');
const cssDisplay = document.getElementById('css-props');

document.getElementById('colorchange').addEventListener('click', () => {
    textContainer.style.color = colorInput.value;
});

sizeSlider.addEventListener('input', () => {
    textContainer.style.fontSize = sizeSlider.value + "px";
});

document.getElementById('bold').addEventListener('click', () => {
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

document.getElementById('italic').addEventListener('click', () => {
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

document.getElementById('underline').addEventListener('click', () => {
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

fontDropdown.addEventListener('change', () => {
    textContainer.style.fontFamily = fontDropdown.value;
});

document.getElementById('getstyle').addEventListener('click', () => {
    const s = textContainer.style;
    
    let cssText = `color: ${s.color || 'black'}; `;
    cssText += `font-size: ${s.fontSize || '55px'}; `;
    cssText += `font-family: ${s.fontFamily || 'sans-serif'}; `;
    cssText += `font-weight: ${s.fontWeight || 'normal'}; `;
    cssText += `font-style: ${s.fontStyle || 'normal'}; `;
    cssText += `text-decoration: ${s.textDecoration || 'none'};`;

    cssDisplay.innerText = cssText;
});