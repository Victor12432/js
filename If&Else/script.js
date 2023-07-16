var preco, litro, caixa = 100, tanque = 500;
preco = parseInt(prompt("Digite o valor a ser abestecido."));
litro = preco / 5;
if(preco > 0){
    tanque = tanque - litro;
    caixa = caixa + preco;
}
else{
    alert("Não é possível encher o Tanque")
}
alert(`Você pagou R$${preco} por ${litro} litros\nAinda resta ${tanque} litros no tanque e no caixa a R$${caixa}`)
alert("Volte sempre!")

/*script usando Do-While
var pedidos = []
function calcCaixa(preco, caixa) {
  if (preco > 0) {
    return caixa + preco;
  } else {
    return prompt("Dê-me dinheiro, papai!!!").toUpperCase();
  }
}
function calcTanque(litro, tanque) {
  if (tanque > 0) {
    if (litro <= tanque) {
      return tanque - litro;
    } else {
      alert(`Não temos capacidade para ${litro} litros, apenas para ${tanque} litros. Espere um pouco até o tanque encher.`);
      return tanque;
    }
  } else {
    return tanque + 500;
  }
}
function calcPreco(preco) {
  return preco / 6;
}
do {
  do {
    preco = parseFloat(prompt("Digite o valor a ser abastecido:"));
  } while (isNaN(preco));
  litro = calcPreco(preco);
  tanque = calcTanque(litro, tanque);
  caixa = calcCaixa(preco, caixa);
  pedidos.push({ preco: preco, litro: litro });
  alert(`Você pagou R$${preco} por ${litro.toFixed(1)} litros.\nAinda restam ${tanque.toFixed(1)} litros no tanque.\nO caixa possui R$${caixa}.`);
  var resp = prompt("Deseja continuar abastecendo?").toLowerCase();
} while (resp === "sim" || resp === "s");
alert("Todos os pedidos:");
for (var i = 0; i < pedidos.length; i++) {
  var pedido = pedidos[i];
  alert(`Pedido ${i + 1}: Valor: R$${pedido.preco.toFixed(1)}, Litros: ${pedido.litro.toFixed(1)}`);
}
alert("Volte sempre!");
*/