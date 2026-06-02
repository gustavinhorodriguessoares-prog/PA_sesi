
function exibirNome (){
    let nome = document.querySelector('#nome').value
    alert(nome)
}


function somar(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    alert(valA + valB)
}

function subtrair(){
    let valA = Number(document.querySelector('#valorC').value)
    let valB = Number(document.querySelector('#valorD').value)
    alert(valA - valB)
}

function divisão(){
    let valA = Number(document.querySelector('#valorE').value)
    let valB = Number(document.querySelector('#valorF').value)
    alert(valA / valB)
}

function multiplicação(){
    let valA = Number(document.querySelector('#valorG').value)
    let valB = Number(document.querySelector('#valorH').value)
    alert(valA * valB)
}
