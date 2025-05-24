document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('username').value; // assume que 'username' é o email
  const senha = document.getElementById('password').value;
  const mensagemSenha = document.querySelector('.mensagem1');

//   fetch('https://dc-descarte-certo-backend.onrender.com/api/usuarios/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, senha })
//   })
//   .then(response => {
//     if (response.ok) {
//       return response.text();
//     } else {
//       mensagemSenha.style.display = 'block';
//       throw new Error('Login falhou');
//     }
//   })
//   .then(data => {
//     alert(data);
//   })
//   .catch(error => {
//     alert(error.message);
//   });
// });

try {
  const resposta = await fetch('https://dc-descarte-certo-backend.onrender.com/api/usuarios/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });

  const dados = await resposta.json();

  if (resposta.ok) {
  localStorage.setItem('usuarioLogado', JSON.stringify({
    id: dados.usuarioId,
    nome: dados.nome,
    email: email
  }));

  alert('Login realizado com sucesso!');
  window.location.href = '/index.html';
}
 else {
    alert('Erro ao fazer login: ' + (dados.erro || dados.mensagem || 'Credenciais inválidas'));
  }
} catch (erro) {
  alert('Erro ao conectar com o servidor: ' + erro.message);
}
});

function registrar() {
  alert("Você será redirecionado para a página de cadastro.");
  // Redirecionar para página de cadastro
  // window.location.href = 'cadastro.html';
}
