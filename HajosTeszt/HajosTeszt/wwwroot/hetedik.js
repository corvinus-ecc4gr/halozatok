var kérdések;
var kérdésSorszám;

function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));
}

var kérdésMegjelenítés = function (kérdésSzáma) {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdésSorszám].questionText
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSorszám].image
    válasz1.innerText = kérdések[kérdésSzáma].answer1
    válasz1.innerText = kérdések[kérdésSzáma].answer1
    válasz1.innerText = kérdések[kérdésSzáma].answer1

}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
}
windows.onload = () => { letöltés(); }

function Vissza() {
    if (kérdésSzáma == 0) {
        kérdésSzáma = kérdések.length - 1;
        letöltés();
    }
    else {
        kérdésSzáma--;
        letöltés();
    }
}
document.getElementById("válasz1").onclick
document.getElementById("válasz2").onclick

function Elore() {
    if (kérdésSzáma == kérdések.length - 1) {
        kérdésSzáma = 0;
        letöltés();
    }
    else {
        kérdésSzáma++;
        letöltés();
    }
}