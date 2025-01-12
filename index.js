const vSenhaNormal = document.querySelector("#senhaNormal"); // Seleciona o elemento com o id 'senhaNormal' no HTML
const vSenhaPreferencial = document.querySelector("#senhaPreferencial"); // Seleciona o elemento com o id 'senhaPreferencial' no HTML
const vConsultorioNormal = document.querySelector("#consultorioNormal"); // Seleciona o elemento com o id 'consultorioNormal' no HTML
const vConsultorioPreferencial = document.querySelector("#consultorioPreferencial"); // Seleciona o elemento com o id 'consultorioPreferencial' no HTML

let senhaNormal = parseInt(localStorage.getItem("senhaNormal")) || 0; // Recupera a senha normal do localStorage e converte para inteiro, ou usa 0 se não houver valor
let senhaPreferencial = parseInt(localStorage.getItem("senhaPreferencial")) || 0; // Recupera a senha preferencial do localStorage e converte para inteiro, ou usa 0 se não houver valor

mostrarSenha(); // Chama a função para exibir as senhas e os consultórios

// Adiciona um ouvinte de evento para detectar pressionamentos de tecla
window.addEventListener("keydown", function (e) { // Escuta o evento 'keydown' quando uma tecla é pressionada
  const consultorio = Math.floor(Math.random() * 3) + 1; // Gera um número aleatório entre 1 e 3 para o consultório

  if (e.key === "n" || e.key === "N") { // Se a tecla pressionada for 'n' ou 'N'
    senhaNormal++; // Incrementa a senha normal
    localStorage.setItem("senhaNormal", senhaNormal); // Armazena a nova senha normal no localStorage
    localStorage.setItem("consultorioNormal", consultorio); // Armazena o consultório para a senha normal no localStorage
  } else if (e.key === "p" || e.key === "P") { // Se a tecla pressionada for 'p' ou 'P'
    senhaPreferencial++; // Incrementa a senha preferencial
    localStorage.setItem("senhaPreferencial", senhaPreferencial); // Armazena a nova senha preferencial no localStorage
    localStorage.setItem("consultorioPreferencial", consultorio); // Armazena o consultório para a senha preferencial no localStorage
  } else if (e.key === "r" || e.key === "R") { // Se a tecla pressionada for 'r' ou 'R'
    senhaNormal = 0; // Reseta a senha normal para 0
    senhaPreferencial = 0; // Reseta a senha preferencial para 0
    localStorage.clear(); // Limpa todos os itens armazenados no localStorage
  }

  mostrarSenha(); // Chama a função para atualizar a exibição das senhas e consultórios
});

// Função para mostrar as senhas e consultórios na interface
function mostrarSenha() {
  const consultorioNormal = localStorage.getItem("consultorioNormal") || "-"; // Recupera o consultório normal do localStorage ou usa '-' se não houver valor
  const consultorioPreferencial = localStorage.getItem("consultorioPreferencial") || "-"; // Recupera o consultório preferencial do localStorage ou usa '-' se não houver valor

  // Atualiza o painel de senha normal com o número formatado e o consultório
  vSenhaNormal.innerHTML = "N" + senhaNormal.toLocaleString("pt-br", { minimumIntegerDigits: 3 }); // Formata a senha normal para 3 dígitos e exibe no painel
  vConsultorioNormal.innerHTML = `Consultório: ${consultorioNormal}`; // Exibe o consultório normal no painel

  // Atualiza o painel de senha preferencial com o número formatado e o consultório
  vSenhaPreferencial.innerHTML = "P" + senhaPreferencial.toLocaleString("pt-br", { minimumIntegerDigits: 3 }); // Formata a senha preferencial para 3 dígitos e exibe no painel
  vConsultorioPreferencial.innerHTML = `Consultório: ${consultorioPreferencial}`; // Exibe o consultório preferencial no painel
}
