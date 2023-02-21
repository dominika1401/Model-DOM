let formularz = document.getElementById('form');
let wszytskieZgodyChx = document.getElementById('wszystkieZgody');

const validate = (event) => {
    let imieNazwisko = document.getElementById('imieNazwisko');
    let email = document.getElementById('email');
    let zgoda1 = document.getElementById('zgodaMarketingowa1');
    let errors = document.getElementById('errors')
    errors.innerHTML = '';
    if (imieNazwisko.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imię i nazwisko';
        errors.appendChild(liError);
    }
    if (email.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz email';
        errors.appendChild(liError);
    }
    if (!email.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres email musi zawierać @';
        errors.appendChild(liError);
    }
    if (!zgoda1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś Zgody 1!';
        errors.appendChild(liError);
    }
    if (errors.children.length > 0) {
        event.preventDefault();
    }

}

const wszystkieZg = (event) => {
    let zgoda1 = document.getElementById('zgodaMarketingowa1');
    let zgoda2 = document.getElementById('zgodaMarketingowa2');

    zgoda1.checked = event.target.checked;
    zgoda2.checked = event.target.checked;

    zgoda1.disabled = event.target.checked;
    zgoda2.disabled = event.target.checked;
}
formularz.addEventListener('submit', validate);
wszytskieZgodyChx.addEventListener('change', wszystkieZg);
