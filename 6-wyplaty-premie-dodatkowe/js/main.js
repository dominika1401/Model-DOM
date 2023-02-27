let button = document.getElementById('oblicz');
const wyplata = (e) => {
    let pracownicy = document.querySelectorAll('[id^="pracownik"]');
    for (let i = 0; i < pracownicy.length; i++) {
        let time = pracownicy[i].querySelector(".czas");
        let gotowka = pracownicy[i].querySelector(".stawka").value;
        let salary = 0
        let overTime = 0

        if (time.value > 160) {
            overTime = time.value - 160;
        } else if (time.value < 100) {
            pracownicy[i].style.background = "red";
        }
        salary = time.value * gotowka + overTime * gotowka * 2;
        // console.log(pracownicy[i].querySelector(".wyplata"))

        pracownicy[i].querySelector(".wyplata").innerText = salary;
    }
    let najlepsiPracownicy = document.querySelector('#najlepsi-pracownicy');

    let timeArray = [];
    let time = document.querySelectorAll(".czas");

    for (let i = 0; i < time.length; i++) {
        console.log(time[i])
        timeArray[i] = time[i].value + " " + pracownicy[i].querySelector('.pracownik').textContent;

    }
    console.log(timeArray);
    timeArray.sort((a,b) => {
        console.log(+a);
    })
}
pracownicy.addEventListener('click', wyplata);
