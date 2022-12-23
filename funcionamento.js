// let exibe = document.querySelector(".visor");
let res = ""
let resoperador = 0
let resfinal = 0
let operador = ""


function sleep(ms) {    // Função que chama o sleep
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function limpa(){
    res = ""
    resoperador = ""
    operador = ""
    document.getElementById("visor").innerHTML = "Apagando...";
    await sleep(1000);  // Chama a função sleep por meio do await
    document.getElementById("visor").innerHTML = "";


}

function telavisao() {    // Botão LOG é uma brincadeira interna rsrsrs
    document.getElementById("visor").innerHTML = "MEU LORO PARAGUAIO";
  }

function numericos(clicar) {
                    // Condição dos Botões numéricos

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
    if (clicar == ",") {
        bdecimal = ",";
        res = res + bdecimal
        document.getElementById("visor").innerHTML = res;}


   
}


function operacoes(clicar){
    if(clicar == "+") {    // Adição
        if(operador == "-") {
            resoperador = (Number(resoperador) - Number(res))
            document.getElementById("visor").innerHTML = "+";
            operador = "+"
            res = ""
        }
        if(operador == "/") {
            resoperador = (Number(resoperador) / Number(res)) 
            document.getElementById("visor").innerHTML = "+";
            operador = "+"
            res = ""
        }
        if(operador == "*") {
            res = (Number(res) * Number(resoperador)) 
            document.getElementById("visor").innerHTML = "+";
            operador = "+"
            resoperador = ""
        }
        else{
            operador = "+"
            resoperador = (Number(res) + Number(resoperador))
            res = ""
            document.getElementById("visor").innerHTML = "+";
        }
    }  // -------------------------------------------------------------------------

    if(clicar == "-") {   // Subtração
        if(operador == "+") {
            resoperador = (Number(res) + Number(resoperador)) 
            document.getElementById("visor").innerHTML = "-";
            operador = "-"
            res = ""
        }
        if(operador == "*") {
            resoperador = (Number(res) * Number(resoperador)) 
            document.getElementById("visor").innerHTML = "-";
            operador = "-"
            res = ""
        }
        if(operador == "/") {
            resoperador = (Number(resoperador) / Number(res)) 
            document.getElementById("visor").innerHTML = "-";
            operador = "-"
            res = ""
        }
        if(resoperador == 0) {
            operador = "-"
            resoperador = (Number(res))
            document.getElementById("visor").innerHTML = "-";
            res = ""
        } else {
            operador = "-"
            resoperador = (Number(resoperador) - Number(res))
            document.getElementById("visor").innerHTML = "-";
            res = ""
        }   
    } // -------------------------------------------------------------------------

    if(clicar == "*") {    // multiplicação
        if(operador == "-") {
            res = (Number(resoperador) - Number(res)) 
            document.getElementById("visor").innerHTML = "*";
            operador = "*"
            resoperador = ""
        }
        if(operador == "+") {
            res = (Number(res) + Number(resoperador)) 
            document.getElementById("visor").innerHTML = "*";
            operador = "*"
            resoperador = ""
        }
        if(operador == "/") {
            res = (Number(resoperador) / Number(res))
            document.getElementById("visor").innerHTML = "*";
            operador = "*"
            resoperador = ""
        }
        if(clicar == "*" && resoperador == 0) {
            operador = "*"
            resoperador = Number(res)
            document.getElementById("visor").innerHTML = "*";
            res = ""
        }
        if(res == ""){
            res = res
            operador = "*"
            document.getElementById("visor").innerHTML = "*"
        }
        else{
            operador = "*"
            resoperador = (Number(res) * Number(resoperador))
            res = ""
            document.getElementById("visor").innerHTML = "*";
        }
    
    } // -------------------------------------------------------------------------

    if(clicar == "/"){      // Divisão
        if(operador == "+"){
            resoperador = (Number(res) + Number(resoperador))
            document.getElementById("visor").innerHTML = "/"
            operador = "/"
            res = ""

        }
        if(operador == "-") {
            resoperador = (Number(resoperador) - Number(res))
            document.getElementById("visor").innerHTML = "*"
            operador = "/"
            res = ""
        }
        if(operador == "*") {
            res = (Number(res) * Number(resoperador));
            document.getElementById("visor").innerHTML = "/"
            operador = "/"
            resoperador = ""
        }
        if(clicar == "/" && resoperador == 0) {
            operador = "/"
            resoperador = Number(res)
            document.getElementById("visor").innerHTML = "/"
            res = ""
        }
        if(res == ""){
            res = res
            operador = "/"
            document.getElementById("visor").innerHTML = "/"
        }
        else{
            operador = "/"
            resoperador = ((Number(resoperador) / Number(res)))
            res = ""
            document.getElementById("visor").innerHTML = "/"
            console.log(resoperador);
        }

    } // -------------------------------------------------------------------------

}






                                 // Funão que controla apenas o botão de "IGUAL"


function resultadofim(){
    if(operador == "+") {  // Adição
        operador = ""
        resfinal = (Number(res) + Number(resoperador))
        resoperador = resfinal
        res = ""
        document.getElementById("visor").innerHTML = resfinal;
    }
    // -------------------------------------------------------------------------
    if(operador == "-") {  // Subtração
        operador = ""
        resfinal = (Number(resoperador) - Number(res))
        resoperador = resfinal
        res = ""
        document.getElementById("visor").innerHTML = resfinal;
    }
    // -------------------------------------------------------------------------
    if(operador == "*") {  // multiplicação
        operador = ""
        resfinal = (Number(res) * Number(resoperador))
        res = resfinal
        resoperador = ""
        document.getElementById("visor").innerHTML = resfinal;
    }
    // -------------------------------------------------------------------------
    if(operador == "/") {  // Divisao
        operador = ""
        resfinal = ((Number(resoperador) / Number(res)))
        resoperador = resfinal;
        res = ""
        document.getElementById("visor").innerHTML = resfinal;
    }

}