document.getElementById("botao").addEventListener("click",ValidaFormulario)

function ValidaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""
  document.getElementById("tel").value != ""){
  alert("Prontinho! Você receberá as novidades por email.")
}else{
  alert("Por favor, preencha os campos nome e email!")"
}

}


