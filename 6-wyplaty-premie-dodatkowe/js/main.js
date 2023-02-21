let button = document.getElementById('oblicz');
const wyplata = (e) => {
    let pracownicy = document.querySelectorAll('[id^="pracownik"]');
    for (let i = 0; i < pracownicy.length; i++) {
        let time = pracownicy[i].querySelector(".czas").value;
        let gotowka = pracownicy[i].querySelector(".stawka").value;
        let salary = 0
        let overTime = 0

        if (time > 160) {
            overTime = time - 160;
        } else if (time < 100) {
            pracownicy[i].style.background = "red";
        }
        salary = time * gotowka + overTime * gotowka * 2;
        console.log(pracownicy[i].querySelector(".wyplata"))

        pracownicy[i].querySelector(".wyplata").innerText = salary;
    }
}
pracownicy.addEventListener('click', wyplata);