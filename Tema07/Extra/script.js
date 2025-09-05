// Fórmula: M = C * (1 + i)^t
// M = Montante final
// C = Capital inicial
// i = taxa de juros (em decimal)
// t = tempo (meses)

document.getElementById("form-juros").addEventListener("submit", function(event) {
  event.preventDefault(); // evita reload da página

  // Captura valores do formulário
  const capital = parseFloat(document.getElementById("capital").value);
  const taxa = parseFloat(document.getElementById("taxa").value) / 100;
  const tempo = parseInt(document.getElementById("tempo").value);

  // Cálculo
  const montante = capital * Math.pow(1 + taxa, tempo);
  const juros = montante - capital;

  // Exibe resultado
  document.getElementById("resultado").innerHTML = `
    💰 Montante Final: R$ ${montante.toFixed(2)} <br>
    📈 Juros Acumulados: R$ ${juros.toFixed(2)}
  `;
});
