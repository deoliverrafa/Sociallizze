
const recipientId = '651f0562a89be803de06b1c2';
const senderId = '651ed532bf983781e211edc2';
const content = 'Ola rafael tudo bem?';

const url = '/mensagem/enviar'; // A URL deve ser relativa ao local onde seu aplicativo está sendo executado

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    recipientId: recipientId,
    senderId: senderId,
    content: content
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data); // Resposta do servidor
  })
  .catch(error => {
    console.error(error); // Tratamento de erro
  });