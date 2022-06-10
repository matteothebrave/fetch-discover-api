const url = 'http://localhost:5500/api'

// FUNÇÃO PARA PUXAR TODOS OS DADOS DA API
// METODO (GET)
function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.error(error))
}

//FUNÇÃO PARA PEGAR USUÁRIO ESPECÍFICO DENTRO DA API 
//UTILIZANDO O TEMPLATE STRING PARA PUXAR A URL E O ID 

function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

// FUNÇÃO PARA ADICIONAR NOVOS USUÁRIOS
// UTILIZANDO O MÉTODO POST
function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json;charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch()
}

// FUNÇÃO PARA DAR UPDATE NA API / FRONT END
// UTILIZANDO O MÉTODO PUT

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error))
}

//CONST(VAR) PARA NOVO USUÁRIO
const newUser = {
  name: 'Jaguara Silva',
  avatar: 'http://lorempixel.com/400/200',
  city: 'Curitiba'
}
//CONST(VAR) PARA UPDATE DE UM USUÁRIO EXISTENTE 
const updatedUser = {
  name: 'Mayk Britows',
  avatar: 'http://picsum.photos/200/300',
  cidade: 'PR'
}

//FUNÇÃO PARA DELETAR USUÁRIO
//UTILIZANDO O MÉTODO DELETE
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.log(error))
}

//CHAMANDO AS FUNÇÕES CRIADAS

//addUser(newUser)
//updateUser(updatedUser, 9)
getUsers()
getUser(9)
deleteUser(28)
