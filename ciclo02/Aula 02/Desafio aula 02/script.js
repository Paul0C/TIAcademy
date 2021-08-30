var nome = prompt("Digite seu nome");
if(nome === numero2){
	console.log("A entrada é um inteiro");

}else {
	console.log("A entrada não é um inteiro");
}
document.write("Seja Bem-vindo:"+nome+"<br>");
var numero = parseInt(prompt(nome+" digite um número"));
alert("Uma string foi enviada");
alert("A string será convertida para número");
document.write("Você digitou um número:"+numero+"<br>");
var numero2 = 20;
var bool = (numero == numero2);
document.write("O retorno da comparação booleana é:"+bool+"<br>");
var soma = (numero+numero2);
document.write("A soma dos valores é:"+soma+"<br>");
var subtração = (numero-numero2);
document.write("A subtração dos valores é:"+subtração+"<br>");
var divisão = (numero%numero2);
document.write("O resto da divisão é de:"+divisão+"<br>");
var numero3 = parseInt(prompt(nome+" digite um número"));
var potencia = numero3 ** 2;
document.write("O quadrado do número digitado é:"+potencia+"<br>");
var frutas = prompt("Escolha uma dessas 4 frutas:laranja,uva,pera,manga");
switch(frutas){

	case "laranja": case "Laranja":
	document.write("A fruta escolhida é:" + frutas);
	console.log("laranja");
	break;

	case "uva": case "Uva":
	document.write("A fruta escolhida é:" + frutas);
	console.log("uva");
	break;

	case "pera": case "Pera":
	document.write("A fruta escolhida é:" + frutas);
	console.log("pera");
	break;

	case "manga": case "Manga":
	document.write("A fruta escolhida é:" + frutas);
	console.log("manga");
	break;

	default:
	document.write("A fruta escolhida não está na lista");

}