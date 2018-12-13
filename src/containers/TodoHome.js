import React, { Component } from 'react';
import TodoRow from '../components/TodoRow';
import Api from '../services/Api';

class TodoHome extends Component {
  state = {
    todoList: [],
  };

  componentWillMount() {
    Api.getAllTodos().then(todoList => {
      this.setState({
        todoList,
      });
    });
  }

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

  renderTodos = () => {
    if (this.state.todoList.length === 0) {
      return <div style={{ fontSize: 17 }}>No Data</div>;
    }
    return this.state.todoList.map(item => (
      <TodoRow
        key={item._id}
        item={item}
        saveChanges={this.saveChanges}
        removeNewElement={this.removeNewElement}
        onSaveNew={this.onSaveNew}
      />
    ));
  };

  onSaveNew = item => {
    Api.addTodo(item).then(result => {
      if (this.state.todoList[this.state.todoList.length - 1].isNew === true) {
        this.state.todoList.splice(this.state.todoList.length - 1, 1);
      }
      this.state.todoList.push(result.data);
      this.setState({
        todoList: this.state.todoList,
      });
    });
  };

  onAddNew = () => {
    this.state.todoList.push({
      _id: `new${Math.random()}`,
      isNew: true,
    });
    this.setState({
      todoList: this.state.todoList,
    });
  };

  renderAddButton = () => {
    if (
      this.state.todoList.length === 0 ||
      (this.state.todoList.length && !this.state.todoList[this.state.todoList.length - 1].isNew)
    ) {
      return (
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
      );
    }
  };
  render() {
    return (
      <div>
        <div style={{ marginBottom: 10 }}>{this.renderTodos()}</div>
        <div>{this.renderAddButton()}</div>
      </div>
    );
  }
}

export default TodoHome;
