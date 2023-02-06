let formLogin = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault();
}
formLogin.addEventListener('submit', submitForm);

let imie = document.forms.form.fname.value;
let nazwisko = document.forms.form.lname.value;
console.log(`Imię: ${imie}, Nazwisko: ${nazwisko}`);