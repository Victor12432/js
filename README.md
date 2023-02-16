# js
contendo do, if, for 

function inicio()
{
    var preco, litro, caixa = 0, tanque = 0;

    preco = parseInt(prompt("Digite o valor a ser abestecido: "));
    litro = preco / 5;

    console.log("Preço" = +preco);
    console.log("Litro" = +litro);

    //frentista
    if(preco > 0){
        tanque = tanque + litro;
        caixa = caixa + preco;

    }
    else{
        prompt("Faça o pagamento!");
    }

    console.log("Caixa" = +caixa);
    console.log("Tanque" = +tanque);

    //perseint é pra ler numeros inteiros
    //não a nessesidade de declarar tipagem
    //prompt é emissão na tela
    //let é quando eu sei o valor
    //se eu for alternar utilize var
    //|| é ou do portugol
    //isNan é pra se certificar que vai ter numero na função
    //&& é o e do portugol
    //++ é para add 1 no valor 
    //.rum no vscode
    //pra declara uma variavel basta ${variavel}
    //se tiver () do lado de uma palavra normalmente é funcao
}





