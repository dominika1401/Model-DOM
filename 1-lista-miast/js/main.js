let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
let lista =  document.createElement('ol');
for (let i = 0; i < cities.length; i++) {
    let newElem = document.createElement('li');
    newElem.innerHTML = cities[i];
    document.body.appendChild(lista);
    lista.appendChild(newElem);
    let attrNode = document.createAttribute('class');
    attrNode.value = 'city';
    newElem.setAttributeNode(attrNode);
}
console.log(document)