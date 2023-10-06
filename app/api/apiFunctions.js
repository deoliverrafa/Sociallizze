const fetch = require('node-fetch')

const read = (async () => {
    const options = {
        method: 'POST',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('https://localhost/api/usuarios', options)
    const readResponse = await apiResponse.text();
    return readResponse
})

module.exports = read;