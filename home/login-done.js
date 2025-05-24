const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
const authArea = document.getElementById("authArea");
const convite = document.getElementById("convite");

if (usuario) {
authArea.innerHTML = `
    <span class="user-name">Olá, ${usuario.nome}</span>
    <button onclick="logout()" class="logout">Sair</button>
`;
}

function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.reload();
}