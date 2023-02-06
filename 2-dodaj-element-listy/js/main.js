function dodanie(){
    let lista=document.getElementById("items");
    let element=document.getElementsByClassName("item").length;
let liElement = document.createElement('li');
let txtNode = document.createTextNode("Item " + (element+1));
let attrNode = document.createAttribute('class');
attrNode.value='item';
lista.appendChild(liElement)
liElement.setAttributeNode(attrNode);
liElement.appendChild(txtNode);

console.log(lista);
}
document.querySelector("button").addEventListener('click', dodanie);

