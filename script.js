const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      menuMobile = document.querySelector(".menu-mobile");

// Desktop toggle (colapsa/expande)
toggle.addEventListener("click", () => {
  // só ativa comportamento 'close' em telas maiores
  if (window.innerWidth > 900) {
    sidebar.classList.toggle("close");
  } else {
    // em mobile, usar open em vez de close
    sidebar.classList.toggle("open");
    body.classList.toggle("menu-open");
  }
});

// Dark mode
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  modeText.innerText = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

// Menu mobile (hamburger)
if (menuMobile) {
  menuMobile.addEventListener("click", (e) => {
    e.stopPropagation();
    // abrir menu mobile
    sidebar.classList.add("open");
    // removemos a classe 'close' para evitar regras conflitantes
    sidebar.classList.remove("close");
    body.classList.add("menu-open");
  });
}

// fechar quando clicar fora (só se estiver aberto)
window.addEventListener("click", (e) => {
  if (body.classList.contains("menu-open")) {
    // se o clique foi fora da sidebar e fora do botão mobile, fecha
    if (!sidebar.contains(e.target) && !(menuMobile && menuMobile.contains(e.target))) {
      sidebar.classList.remove("open");
      body.classList.remove("menu-open");
      // opcional: re-adiciona 'close' só em telas maiores
      if (window.innerWidth > 900) {
        sidebar.classList.add("close");
      }
    }
  }
});

// também fecha o menu ao redimensionar para desktop (evita estados estranhos)
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    sidebar.classList.remove("open");
    body.classList.remove("menu-open");
  }
});

