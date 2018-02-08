export default (text = 'hello world', class1, class2) => {
    let element = document.createElement('div');
    element.innerText = text;
    element.className = class1;

    let p = document.createElement('p');
    p.innerText = 'p line';
    p.className = class2;

    element.appendChild(p);
    return element;
}