import constants from '../config/Constants';

const sendFetch = (url, options = {}) => {
  console.info(`Request sent > url: ${url}, oprions: ${JSON.stringify(options)}`);
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
};

function getAllTodos() {
  return sendFetch(constants.getAll);
}

function getTodo(id) {
  return sendFetch(`${constants.get}/${id}`);
}

function addTodo(todo) {
  return sendFetch(constants.addTodo, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
}

function updateTodo(updatedTodo) {
  return sendFetch(constants.updateTodo, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  });
}

function deleteTodo(id) {
  return sendFetch(`${constants.deleteTodo}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

const publicApi = {
  getAllTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
};

export default publicApi;
