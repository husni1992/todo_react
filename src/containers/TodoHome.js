import React, { Component } from 'react';
import TodoRow2 from '../components/TodoRow2';

class TodoHome extends Component {
  todoList = [
    {
      id: 1,
      value: 'Todo 1',
      timeStamp: new Date(),
    },
    {
      id: 2,
      value: 'Todo 2',
      timeStamp: new Date(),
    },
    {
      id: 3,
      value: 'Todo 3',
      timeStamp: new Date(),
    },
    {
      id: 4,
      value: 'Todo 4',
      timeStamp: new Date(),
    },
  ];

  saveChanges = (newVal, callback) => {
    function findFirstLargeNumber(element) {
      return element.id === newVal.id;
    }

    const itemInd = this.todoList.findIndex(findFirstLargeNumber);
    this.todoList.splice(itemInd, 1, newVal);
    this.setState({}, callback);
  };

  createTodoList = () => {
    return this.todoList.map(item => <TodoRow2 key={item.id} item={item} saveChanges={this.saveChanges} />);
  };

  render() {
    return <div className="Container">{this.createTodoList()}</div>;
  }
}

export default TodoHome;
