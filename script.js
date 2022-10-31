function kattintas() {
    var nev = document.getElementById("nev").value;
    document.getElementById("nevvisszaig").innerHTML = nev;

    var cim = document.getElementById("cim").value;
    document.getElementById("cimvisszaig").innerHTML = cim;

    var telefon = document.getElementById("telefon").value;
    document.getElementById("telefonvisszaig").innerHTML = telefon;
}
function focusnev() {
    document.getElementById("nev").style.background = "rgb(200, 200, 250)";
}
function blurnev() {
    document.getElementById("nev").style.background = "white";
}
function focuscim() {
    document.getElementById("cim").style.background = "rgb(200, 200, 250)";
}
function blurcim() {
    document.getElementById("cim").style.background = "white";
}
function focustelefon() {
    document.getElementById("telefon").style.background = "rgb(200, 200, 250)";
}
function blurtelefon() {
    document.getElementById("telefon").style.background = "white";
}