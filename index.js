const vSenhaNormal = document.querySelector("#senhaNormal");
const vSenhaPreferencial = document.querySelector("#senhaPreferencial");
const vConsultorioNormal = document.querySelector("#consultorioNormal");
const vConsultorioPreferencial = document.querySelector("#consultorioPreferencial");

let senhaNormal = parseInt(localStorage.getItem("senhaNormal")) || 0;
let senhaPreferencial = parseInt(localStorage.getItem("senhaPreferencial")) || 0;

mostrarSenha();

window.addEventListener("keydown", function (e) {
  const consultorio = Math.floor(Math.random() * 3) + 1; // Gera consultórios de 1 a 3

  if (e.key === "n" || e.key === "N") {
    senhaNormal++;
    localStorage.setItem("senhaNormal", senhaNormal);
    localStorage.setItem("consultorioNormal", consultorio);
  } else if (e.key === "p" || e.key === "P") {
    senhaPreferencial++;
    localStorage.setItem("senhaPreferencial", senhaPreferencial);
    localStorage.setItem("consultorioPreferencial", consultorio);
  } else if (e.key === "r" || e.key === "R") {
    senhaNormal = 0;
    senhaPreferencial = 0;
    localStorage.clear(); // Limpa todas as informações relacionadas às senhas
  }

  mostrarSenha();
});

function mostrarSenha() {
  const consultorioNormal = localStorage.getItem("consultorioNormal") || "-";
  const consultorioPreferencial = localStorage.getItem("consultorioPreferencial") || "-";

  // Atualiza o painel de senha normal
  vSenhaNormal.innerHTML = "N" + senhaNormal.toLocaleString("pt-br", { minimumIntegerDigits: 3 });
  vConsultorioNormal.innerHTML = `Consultório: ${consultorioNormal}`;

  // Atualiza o painel de senha preferencial
  vSenhaPreferencial.innerHTML = "P" + senhaPreferencial.toLocaleString("pt-br", { minimumIntegerDigits: 3 });
  vConsultorioPreferencial.innerHTML = `Consultório: ${consultorioPreferencial}`;
}
