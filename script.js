const num = Number(prompt("Zadej číslo z rulety (0-36)"))
const even = (num % 2 == 0)     //sudé číslo

if (1 <= even <= 10) {
    text = "Číslo " + num + " je sudé a černé barvy";
    } else if (11 <= even <= 18) {
        text = "Číslo " + num + " je sudé a červené barvy";
    } else if (19 <= even <= 28) {
        text = "Číslo " + num + " je sudé a černé barvy";
    } else if (29<= even <= 36) {
        text = "Číslo " + num + " je sudé a červené barvy";
    } else {
        text = "Číslo " + num + " je liché"
    }

document.body.innerHTML += "<p>" + text + "</p>"