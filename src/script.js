// Função para ativar o navbar em telas menores
function menuSmartPhone() {
  const menuList = document.getElementById("listaMenu");
  menuList.classList.toggle("active");
}

// Função para alternar temas Claro e escuro
document.addEventListener("DOMContentLoaded", function () {
  const alternaTema = document.getElementById("temaSite");
  const corSite = document.querySelector(".corSite");

  if (alternaTema && corSite) {
    alternaTema.addEventListener("click", () => {
      corSite.classList.toggle("dark-mode");
      const temaEscuro = corSite.classList.contains("dark-mode");
      localStorage.setItem("darkMode", temaEscuro);
    });

    const temaEscuro = localStorage.getItem("darkMode");
    if (temaEscuro === "true") {
      corSite.classList.add("dark-mode");
    }
  } else {
    console.error("Erro ao alterar Tema");
  }
});
