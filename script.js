const num = Number(prompt("Zadej číslo z rulety (0-36)"))
const even = (num % 2 === 0)     //sudé číslo

if (num < 0 || num > 36) {
    text = "Zadané číslo " + num + " se nenachází na ruletě"
    } else if (num === 0) {
        text = "Číslo " + num + " je jako jediné číslo zelené barvy";
    } else if ((num >= 1 && num <= 10) || (num >= 19 && num <= 28)) {
     if (even) {
        text = "Číslo " + num + " je sudé a černé barvy";
    } else {
        text = "Číslo " + num + " je liché a červené barvy";
    }
} else {
     if (even) {
        text = "Číslo " + num + " je sudé a červené barvy";
    } else {
        text = "Číslo " + num + " je liché a černé barvy";
    }
}

document.body.innerHTML += `<p>${text}.</p>`