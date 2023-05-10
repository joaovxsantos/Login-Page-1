const submit = document.querySelector('#submit');
const user = document.querySelector('#user');
const password = document.querySelector('#password');


submit.addEventListener('click', () => {
    new Promise((resolve, reject) => {

        if (user.value == 'João' && password.value == '123') {
            resolve('Login feito com sucesso!', user.value = '', password.value = '')
            window.location.href = './plataform.html'
        } else {
            reject(`ERRO`);
        }

    }).then(ok => console.log(ok))
        .catch(err => console.log(err))
})

