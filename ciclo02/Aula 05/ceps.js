window.onload = function(){

	// alert("olá");


  //var url =

  const btnBuscaCep = document.querySelector("#btnBuscaCep");
  const cxCep = document.querySelector(".cxCep");

  const dadosCep = async function (cepUrl){
  	
  	 
  	var url = `https://viacep.com.br/ws/${cep}/json/`;
  	var consultaCep = await fetch(url);
  	var dadosCep    = await consultaCep.json()
  	console.log(consultaCep);

  }


  btnBuscaCep.addEventListener('click',()=>{

  	 let cep = cxCep.value;
  	 dadosCep(cep);

  })	

}