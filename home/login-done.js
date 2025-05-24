const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
const authArea = document.getElementById("authArea");
const convite = document.getElementById("convite");

if (usuario) {
authArea.innerHTML = `
    <span class="user-name">Olá, ${usuario.nome}</span>
    <button onclick="logout()" class="logout">Sair</button>
`;

convite.innerHTML = `
    <h2>Bem-vindo de volta!</h2>
    <p>Explore o conteúdo e participe ativamente da nossa comunidade.</p>
    <a href="/denuncias.html" class="btn cadastre-agora">Fazer denúncia</a>
`;
}

function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.reload();
}