document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target)

    const email = formData.get('email')
    const password = formData.get('password')

    fetch(`http://localhost:3000/api/usuarios/?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Usuário encontrado no Banco de dados', data)
            alert('Usuário encontrado no Banco de dados')
        })
        .catch(error => {
            console.log("Usuário não cadastrado, crie uma conta", error)
            alert('Usuário não cadastrado, crie uma conta', error)
        });
})