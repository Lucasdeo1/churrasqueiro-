alert('Um site simples com objetivo de facilitar sua vida na hora de fazer aquele churrasco com os amigos, familiares e etc...SAIBA A QUANTIDADE IDEAL DE COMIDAS E BEBIDAS PARA O SEU CHURRAS!')
let inputadultos = document.getElementById("mens")
let inputcriancas = document.getElementById("kids")
let inputduracao = document.getElementById("duration")

//console.log(inputadultos, inputcriancas, inputduracao)

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando...")

    let adultos = inputadultos.value
    let criancas = inputcriancas.value
    let duracao = inputduracao.value

    let quanticarne = carneforpeople( duracao ) * adultos + ( carneforpeople ( duracao ) / 2 *criancas)
    let quanticerva = cervaforpeople( duracao ) * adultos 
    let quantirefri = bebidaforpeople( duracao ) * adultos + (bebidaforpeople( duracao ) / 2 * criancas)
    
    //console.log( quanticarne )

    resultado.innerHTML = `<p>${quanticarne/1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quanticerva/360)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantirefri/2000)} garrafas de bebida</p>`
}

function carneforpeople( duracao ) {
    let carne = 400
    if ( duracao >= 6 ) {
        return 650
    }
    else {
        return carne
    }
}

function cervaforpeople( duracao ) {
    if ( duracao >= 6 ) {
        return 2000
    }
    else {
        return 1200
    }
}

function bebidaforpeople( duracao ) {
    if ( duracao >= 6 ) {
        return 1500
    }
    else {
        return 1000
    }
}
