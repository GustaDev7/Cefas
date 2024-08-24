function mostrarSenha() {
    var inputPass = document.getElementById('password')
    var btnShowPass = document.getElementById('botaosenha')

    if(inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}

/* Inicio da Vlidação*/

const usuarios = [
    { user: 'Cefas', pass: 'Projeto123', redirect: '../html/cefas.html'},
    { user: 'MeM', pass: '0303', redirect: '../html/mem.html'},
    { user: 'Ebenezer', pass: '1234', redirect: '../html/ebenezer.html'}
];

let botao = document.getElementById('btnLogar');

botao.addEventListener('click', function logar() {
    let pegaUsuario = document.getElementById('username').value.trim();
    let pegaSenha = document.getElementById('password').value.trim();
    let usuarioValido = null;

    for (let i in usuarios) {
        if (pegaUsuario === usuarios[i].user && pegaSenha === usuarios[i].pass) {
            usuarioValido = usuarios[i];
            break;
        }
    }

    if (usuarioValido) {
        window.location.href = usuarioValido.redirect;
    } else {
        alert('Erro: Usuário ou senha incorretos');
    }
});

