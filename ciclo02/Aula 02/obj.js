




/*
var nome="marcelo"; // var global
let sobreNome = "weihmayr";

if(true){
	console.log("Var nome="+ nome);
	var nm = nome;
	console.log("Chamando o sobreNome "+ sobrenome);
	let sn = "Da Silva";
	console.log(sobreNome);
}

console.log("Meu nome é "+nm+" "+sobreNome+" "+sn)
console.log("Var nome="+ nm);
*/

var Pessoa = {
	nome: "Marcelo",
	rua : "Rua lá",
	ncasa: "777",
	dados: function(){
		document.write(
			 	"Nome...:"+this.nome+"<br>"+
			 	"Rua ...:"+this.rua+"<br>"+
			 	"N. casa...:"+this.ncasa+"<br>"
				)
	}
}

Pessoa.dados();

/*console.log("Nome "+Pessoa.nome+
			" Endereço "+Pessoa.rua+" N."+Pessoa.ncasa);*/