const submit = document.querySelector('#submit');
const user = document.querySelector('#user');
const password = document.querySelector('#password');


submit.addEventListener('click', () => {
    new Promise((resolve, reject) => {

        if (!user.value || !password.value) {
            reject(`Preencha todos os campos!`);
        } else {
            resolve('Login feito com sucesso!', user.value = '', password.value = '')
        }
    }).then(ok => console.log(ok))
        .catch(err => console.log(err))
})

