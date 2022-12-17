// let exibe = document.querySelector(".visor");
let res = 0

function limpa(){
document.getElementById("visor").innerHTML = "";
res = ""

}

function telavisao() {
    document.getElementById("visor").innerHTML = "MEU LORO PARAGUAIO";
  }

function clickbotao(clicar) {
    if (clicar == 0){
        b0 = 0 ;
        res = res + 0
        document.getElementById("visor").innerHTML = res;}
    if (clicar == "1") {
        b1 = 1;
        res = res + b1;
        document.getElementById("visor").innerHTML = res;}
    if (clicar == "2") {
        b2 = 2;
        res = res + b2;
        document.getElementById("visor").innerHTML = res;} 
    if (clicar == "3") {
        b3 = 3;
        res = res + b3
        document.getElementById("visor").innerHTML = res;}
    if (clicar == "4") {
        b4 = 4;
        res = res + b4
        document.getElementById("visor").innerHTML = res;}
    if (clicar == "5") {
        b5 = 5;
        res = res + b5
        document.getElementById("visor").innerHTML = res;}
    if (clicar == "6") {
        b6 = 6;
        res = res + b6
        document.getElementById("visor").innerHTML = res;}
    if (clicar == "7") {
        b7 = 7;
        res = res + b7
        document.getElementById("visor").innerHTML = res;}
    if (clicar == "8") {
        b8 = 8;
        res = res + b8
        document.getElementById("visor").innerHTML = res;}
    if (clicar == "9") {
        b9 = 9;
        res = res + b9
        document.getElementById("visor").innerHTML = res;}
    if (clicar == "=") {
        document.getElementById("visor").innerHTML = res;
    } else {

    }
}
