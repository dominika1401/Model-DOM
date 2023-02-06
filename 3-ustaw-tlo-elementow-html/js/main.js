let pierwszy=document.getElementById('pierwszy');
let drugi=document.getElementById('drugi');
function setBackgroun() {
pierwszy.style.background="red";
drugi.style.background='yellow';
}
 
document.querySelector( "button" ).addEventListener("click", setBackgroun );