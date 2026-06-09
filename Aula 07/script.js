let resultado = document.querySelector('#resultado')

function exibirNome (){
    let nome = document.querySelector('#nome').value
    alert(nome)
}


function somar(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
resultado.innerHTML = valA + valB
}

function subtrair(){
    let valA = Number(document.querySelector('#valorC').value)
    let valB = Number(document.querySelector('#valorD').value)
    resultado.innerHTML = valA - valB
}

function divisão(){
    let valA = Number(document.querySelector('#valorE').value)
    let valB = Number(document.querySelector('#valorF').value)
    resultado.innerHTML = valA / valB
}

function multiplicação(){
    let valA = Number(document.querySelector('#valorG').value)
    let valB = Number(document.querySelector('#valorH').value)
    resultado.innerHTML = valA * valB
}
