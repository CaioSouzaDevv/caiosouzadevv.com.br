let inputLogin = document.querySelector('#login');
let inputPassword = document.querySelector('#password');
let loginBtn = document.querySelector('#btnLogin');

loginBtn.addEventListener('click', function () {
    event.preventDefault(); // Impede o envio do formulário
    if (inputLogin.value == "caiosouzadevv" && inputPassword.value == "caio123") {
        window.location.href = 'cadastro-projetos.html';
    } else {
      window.alert('Senha Incorreta, tente novamente');
      inputPassword.value = '';

     
    }
})

