// ============================
// BOTÃO MODO ESCURO
// ============================
const botaoTema = document.getElementById('botao-tema');
const body = document.body;

botaoTema.addEventListener('click', () => {
  body.classList.toggle('modo-escuro');

  botaoTema.textContent = body.classList.contains('modo-escuro')
    ? 'Modo Claro ☀️'
    : 'Modo Escuro 🌙';
});

// ============================
// PROJETOS DINÂMICOS
// ============================
const botoes = document.querySelectorAll('.botoes-projetos button');
const descricao = document.getElementById('descricao-projeto');

// estado inicial (reload da página)
descricao.innerHTML = `<p>Selecione um projeto acima para ver a descrição.</p>`;

const projetos = {
  restaurante: {
    titulo: "Sistema de Restaurante",
    texto: "Aplicação web simulando um restaurante com carrinho e pedidos.",
    link: "#",
    ativo: false
  },
  banco: {
    titulo: "Sistema Bancário",
    texto: "Sistema bancário com contas, transferências e extrato.",
    link: "#",
    ativo: false
  },
  cursos: {
    titulo: "Plataforma de Cursos",
    texto: "Plataforma para cursos online com login e progresso.",
    link: "#",
    ativo: false
  }
};

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const tipo = botao.dataset.projeto;
    const projeto = projetos[tipo];

    let botaoProjeto = `
      <a class="link-projeto desativado" href="#">
        Projeto em desenvolvimento
      </a>
    `;

    if (projeto.ativo) {
      botaoProjeto = `
        <a class="link-projeto" href="${projeto.link}" target="_blank">
          Ver projeto
        </a>
      `;
    }

    descricao.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.texto}</p>
      <p><strong>🔧 Status:</strong> Em desenvolvimento</p>
      ${botaoProjeto}
    `;
  });
});
