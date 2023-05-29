//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let classNames = [];
function getClassName(htmlElement) {
    let attribute = htmlElement.getAttribute('class');
    if(attribute) {
        classNames.push(attribute);
    }
    let children = htmlElement.children;
    if (children.length !== 0) {
        for (const child of children) {
            getClassName(child);
        }
    }
};
getClassName(document.body);

console.log(classNames);
