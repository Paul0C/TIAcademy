window.onload = function(){
	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const soma = document.querySelector("#sm");
	const btn = document.querySelector("#btn");

	btn.addEventListener('click', ()=>{
		var vv1 = Number(valor1.value);
		var vv2 = Number(valor2.value);
		var ssm = Number(soma.value);
		var resultado = Number(vv1) + Number(vv2);
        
        if(resultado == ssm){
        	alert("A soma está correta!");
        } else{
        	alert("A soma está incorreta :c");
        
        }
        

	});
}


