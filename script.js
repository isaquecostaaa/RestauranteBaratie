const nome = "João";
const pedidoRefeicao = "salmão";
const refeicaoQtde = 1;
const pedidoBebida = "Refrigerante";
const bebidaQtde = 1;
const mesa = 1;

if (nome && pedidoRefeicao && refeicaoQtde && pedidoBebida && bebidaQtde && mesa) {
alert(`Nome: ${nome}, Mesa: ${mesa}, Pedido: ${refeicaoQtde}x ${pedidoRefeicao} e ${bebidaQtde}x ${pedidoBebida}`)
} else {
  alert("Dados incompletos");
}