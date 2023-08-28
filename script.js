const submit = document.querySelector('#submit');
const user = document.querySelector('#user');
const password = document.querySelector('#password');
const body = document.querySelector('body');

const adicionarAlerta = (mensagem) => {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'border', 'mt-3', 'text-black', 'alert-dismissible', 'fade', 'show');
    alertDiv.innerHTML = `
        <p>${mensagem}</p>
        <button class="btn-close" data-bs-dismiss="alert"></button>
    `;
    body.appendChild(alertDiv);
}

const verificarAlert = () => {
    return body.querySelector('.alert');
}

submit.addEventListener('click', () => {
    if (!user.value || !password.value) {
        if (!verificarAlert()) {
            adicionarAlerta('Preencha os dados de forma correta.');
        }
    } else {
        body.innerHTML = `<h1>Login efetuado com sucesso!</h1>`
    }
});