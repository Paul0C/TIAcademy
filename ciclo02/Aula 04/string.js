/*var nome = "Marcelo";

console.log(nome.length);
console.log(nome[0]);// M
*/






// var palavras ="Maçã doce";


//console.log( palavras.match(/D/gi) );







//console.log( palavras.search(/d/gi) );










// var str = "Lorem, ipsum dolor, sit amet";


// var mudarStr = str.replace(/fugiat/gi,'Xxxx');

// console.log(mudarStr)










var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();

//console.log(`Este é o c1: ${c1} Este é o c2 ${c2}`);
// var comparacao = comp1.localeCompare(c2);
// console.log(comparacao);


/*trim()
faz a remoção de espaços antes e depois da string especificada.
*/

var p = ' fpalavra+ ';

var r = p.trim();
console.log(r);
var s = r.replace(/f/gi, '');
console.log(s)
sub_a = s.replace('+',''); //remover e substituir o sinal de +
console.log(`Removido: ${sub_a}`);

// toLocaleString

var valor = 1.35 // 1,35;
var formatarMoeda = valor.toLocaleString('pt-BR',{
	 style: 'currency',
	 currency:'BRL'
})

console.log(formatarMoeda);

 


