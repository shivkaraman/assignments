function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const key in reactElement.attributes) {
        if (key === 'children') continue;
        domElement.setAttribute(key, reactElement.attributes[key]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    attributes: {
        href: 'https://goggle.com',
        target: '_blank',
    },
    children: 'Click Me To Vist Google',
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
