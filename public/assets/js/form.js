document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target())

    const postData = {};

    formData.forEach((value, key) => {
        postData[key] = value;
    })

    fetch('http://localhost:3000/api/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Usuário encontrado no Banco de dados')
            alert('Usuário encontrado no Banco de dados')
        })
        .catch(error => {
            console.log("Usuário não cadastrado, crie uma conta")
            alert('Usuário não cadastrado, crie uma conta')
        });


})
