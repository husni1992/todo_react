const constants = {};

const baseUrl = 'http://localhost:9000/todos';
constants.get = `${baseUrl}/get`;
constants.getAll = `${baseUrl}/all`;
constants.addTodo = `${baseUrl}/create`;
constants.updateTodo = `${baseUrl}/update`;
constants.deleteTodo = 'http://localhost:9000/todos/delete';

export default constants;
