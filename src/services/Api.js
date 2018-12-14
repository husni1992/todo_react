import constants from '../config/Constants';

const request = async (url, options = {}) => {
  console.info(`Request sent > url: ${url}, oprions: ${JSON.stringify(options)}`);
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

function getAllTodos() {
  return request(constants.getAll);
}

function getTodo(id) {
  return request(`${constants.get}/${id}`);
}

function addTodo(todo) {
  return request(constants.addTodo, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
}

function updateTodo(updatedTodo) {
  return request(constants.updateTodo, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  });
}

function deleteTodo(id) {
  return request(`${constants.deleteTodo}/${id}`, {
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
