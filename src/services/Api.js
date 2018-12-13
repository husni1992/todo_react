import constants from '../config/Constants';

function getAllTodos() {
  return fetch(constants.getAll).then(response => response.json());
}

function getTodo(id) {
  return fetch(`${constants.get}/${id}`).then(response => response.json());
}

function addTodo(todo) {
  return fetch(`${constants.addTodo}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }).then(response => response.json());
}

function updateTodo(id, updatedTodo) {
  return fetch(`${constants.updateTodo}/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  }).then(response => response.json());
}

function deleteTodo(id) {
  return fetch(`${constants.deleteTodo}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}

const publicApi = {
  getAllTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
};

export default publicApi;
