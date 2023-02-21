let formLogin = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault();
    let imie = document.forms.form.fname.value;
    let nazwisko = document.forms.form.lname.value;
    console.log(`Imię: ${imie}, Nazwisko: ${nazwisko}`);
}
formLogin.addEventListener('submit', submitForm);

