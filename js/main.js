
function clicou(){
    //alert("obrigado por clicar"); // função feita para ser chamado pelo html para a ação do clique
    document.getElementById("agradecimento").innerHTML = "Clique aqui também";
    //console.log(documento.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://globallab.org/en/");
    //window.location.href = "https://globallab.org/en/"; essa opção não abre uma nova aba

}

function trocar(elemento){ // testando elementos - multiplos
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto"); // testando movimento do mouse
    elemento.innerHTML = " Obrigada por passar o mouse";
}


function voltar(elemento){  // testando elementos - multiplos
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("trocar texto"); // testando movimento do mouse
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){ // funcao que carrega com o body
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}


/*
var d = new Date();
console.log("hoje é"+ d.getDate()+"/"+ d.getMonth());

var count ;
for (count=0; count <=5; count++){
alert(count);

}

var count = 0;
while (count < 5){
    console.log(count);
    //alert(count);
    count = count +1;
}

var idade = prompt("qual sua idade");
if (idade >= 18 ){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

var nome = "Ana Carolliny";
var idade =26;
var idade2 = 10;

//alert(nome +" tem  " +  idade);
//alert(idade + idade2);

console.log(nome);
console.log(idade); 

var lista = ["maca", "pera","laranja"];
//lista.push("uva");
//lista.pop();
//alert(lista.length);
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));

var fruta = {nome:"maca", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

*/


