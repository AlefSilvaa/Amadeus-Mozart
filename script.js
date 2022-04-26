//String nome = "turma 47"
// nome = "Alef"
// nome = 49

/*
   var nome = "Turma 47" 
   let idade = 18
   const pais = "Estados Unidos"
*/

/*array.indexOf(elementoDePesquisa, [pontoInicial = 0])*/

function clique(){
    alert("Você clicou no botão")
}

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assusnto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.ariaValueMax.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert ('Formulario enviado com sucesso!')
    } else {
        alert ('Preencha o formulario corretamente antes de enviar...')
    }
}

function mapaZoom(){
  mapa.style.width = '800px'
  mapa.style.height= '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height= '250px'
}