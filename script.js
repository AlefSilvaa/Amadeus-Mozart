//String nome = "turma 47"
// nome = "Alef"
// nome = 49

/*
   var nome = "Turma 47" 
   let idade = 18
   const pais = "Estados Unidos"
*/

function clique(){
    alert("Você clicou no botão")
}

let nome = window.document.getElementById('nome')
let email = window.document.getElementById('nemail')
let assunto = window.document.getElementsByName('assusnto')

function enviar(){
    if(nome.value == "" || email.value == "" || assusto.value == ""){
        alert("Todos os campos devem ser preenchidos!")
        return flase
    }else{
    alert("Olá" + nome.value + "! seu feedback foi enviado com sucesso!")
    return true
}
}