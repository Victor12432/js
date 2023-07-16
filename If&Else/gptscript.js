var caixa = 100;
var tanque = 500;
var pedidos = [];
function calcCaixa(preco, caixa) {
  return preco > 0 ? caixa + preco : prompt("Dê-me dinheiro, papai!!!").toUpperCase();
}
function calcTanque(litro, tanque) {
  if (tanque <= 0) {
    tanque += 500;
  }
  return litro <= tanque ? tanque - litro : tanque;
}
function calcPreco(preco) {
  return preco / 6;
}
do {
  var preco = parseFloat(prompt("Digite o valor a ser abastecido:"));
  var litro = calcPreco(preco);
  tanque = calcTanque(litro, tanque);
  caixa = calcCaixa(preco, caixa);
  pedidos.push({ preco, litro });
  alert(`Você pagou R$${preco.toFixed(1)} por ${litro.toFixed(1)} litros.\nAinda restam ${tanque.toFixed(1)} litros no tanque.\nO caixa possui R$${caixa}.`);
  var resp = prompt("Deseja continuar abastecendo?").toLowerCase();
} while (resp === "sim" || resp === "s");
alert("Todos os pedidos:");
pedidos.forEach((pedido, index) => {
  alert(`Pedido ${index + 1}: Valor: R$${pedido.preco.toFixed(1)}, Litros: ${pedido.litro.toFixed(1)}`);
});
alert("Volte sempre!");