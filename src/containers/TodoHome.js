import React, { Component } from 'react';
import TodoRow2 from '../components/TodoRow2';

class TodoHome extends Component {
  state = {
    todoList: [
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
    ],
  };

  saveChanges = (newVal, callback) => {
    function findFirstLargeNumber(element) {
      return element.id === newVal.id;
    }

    const itemInd = this.state.todoList.findIndex(findFirstLargeNumber);
    this.state.todoList.splice(itemInd, 1, newVal);
    this.setState({}, callback);
  };

  removeNewElement = () => {
    this.state.todoList.pop();
    this.setState({
      todoList: this.state.todoList,
    });
  };

  createTodoList = () => {
    return this.state.todoList.map(item => (
      <TodoRow2
        key={item.id}
        item={item}
        saveChanges={this.saveChanges}
        removeNewElement={this.removeNewElement}
        onSaveNew={this.onSaveNew}
      />
    ));
  };

  onSaveNew = item => {
    // make server call
  };

  onAddNew = () => {
    this.state.todoList.push({
      id: `new${Math.random()}`,
      isNew: true,
    });
    this.setState({
      todoList: this.state.todoList,
    });
  };

  render() {
    return (
      <div>
        <div className="Container">{this.createTodoList()}</div>
        {!this.state.todoList[this.state.todoList.length - 1].isNew && (
          <button
            className="btn btn-primary"
            onClick={this.onAddNew}
            style={{
              height: 45,
              width: 170,
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            + Add a new task
          </button>
        )}
      </div>
    );
  }
}

export default TodoHome;
