const num = Number(prompt("Zadej číslo z rulety (0-36)"))
const even = (num % 2 == 0)     //sudé číslo

if (num === 0) {
    text = "Číslo " + num + " je jako jediné číslo zelené barvy";
}

if (even >= 1 && even <= 10) {
    text = "Číslo " + even + " je sudé a černé barvy";
    } else {
        text = "Číslo " + num + "je liché a červené barvy";
    }

if (even >= 11 && even <= 18) {
        text = "Číslo " + num + " je sudé a červené barvy";
    } else {
        text = "Číslo " + num + "je liché a černé barvy";
    }

if (even >= 19 && even <= 28) {
        text = "Číslo " + num + " je sudé a černé barvy";
    } else {
        text = "Číslo " + num + "je liché a červené barvy";
    }
    
if (even >= 29 && even <= 36) {
        text = "Číslo " + num + " je sudé a červené barvy";
    } else {
        text = "Číslo " + num + " je liché a černé barvy";
    }



document.body.innerHTML += `<p>${text}.</p>`