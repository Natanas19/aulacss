function cadastrar() {
  const nome = document.getElementById("nomeCompleto").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const mesas = JSON.parse(localStorage.getItem("mesasSelecionadas")) || [];

  if (!nome || !telefone || !email) {
    alert("Preencha todos os campos antes de continuar.");
    return;
  }

  // cria objeto reserva
  const reserva = {
    nome,
    telefone,
    email,
    mesas,
    codigo: gerarCodigoUnico()
  };

  // obtém reservas anteriores e adiciona a nova
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  reservas.push(reserva);
  localStorage.setItem("reservas", JSON.stringify(reservas));

  // limpa mesas temporárias
  localStorage.removeItem("mesasSelecionadas");

  // exibe mensagem de agradecimento
  mostrarAgradecimento(reserva);
}

function gerarCodigoUnico() {
  return 'GT-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function mostrarAgradecimento(reserva) {
  document.body.innerHTML = `
    <div class="agradecimento">
      <h1>Reserva Confirmada!</h1>
      <p>Obrigado, <strong>${reserva.nome}</strong> 🎉</p>
      <p>Mesa reservada: <strong>${reserva.mesas.join(', ')}</strong></p>
      <p>Código da reserva: <strong>${reserva.codigo}</strong></p>
      <div id="qrcode"></div>
      <button onclick="window.location.href='inicial.html'">Voltar ao Início</button>
    </div>
  `;

  gerarQRCode(reserva.codigo);
}

// gera QR code usando API do Google Charts (simples e local)
function gerarQRCode(texto) {
  const url = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(texto)}`;
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'QR Code da reserva';
  img.style.marginTop = '20px';
  document.getElementById('qrcode').appendChild(img);
}
