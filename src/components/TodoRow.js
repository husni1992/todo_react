import React, { Component } from 'react';

const fullWidth = 300;

class TodoRow2 extends Component {
  state = {
    isEditable: false,
    item: this.props.item,
  };

  componentDidMount() {
    if (this.props.item.isNew === true) {
      this.setState(
        {
          isEditable: true,
        },
        () => {
          this.nameInput.focus();
        },
      );
    }
  }

  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  makeEditable = () => {
    this.setState(
      {
        isEditable: true,
      },
      () => {
        this.nameInput.focus();
      },
    );
  };

  cancelChanges = () => {
    if (this.state.item.isNew) {
      this.props.removeNewElement();
    }
    this.setState({
      item: this.props.item,
      isEditable: false,
    });
  };

  saveChanges = () => {
    if (!this.state.item.value) {
      alert('Cannot be empty!');
      if (this.props.item.isNew === true) {
        return;
      }
    }

    if (this.props.item.isNew === true) {
      this.props.onSaveNew(this.state.item);
      return;
    }

    if (this.state.item.value === this.props.item.value) {
      this.setState({
        isEditable: false,
      });
      return;
    }

    this.props.saveChanges(this.state.item, () => {
      this.setState({
        isEditable: false,
      });
    });
  };

  handleChange = event => {
    this.setState({ item: { ...this.state.item, value: event.target.value } });
  };

  handleKeyDown = event => {
    if (event.which === 13) {
      this.saveChanges();
    }
  };

  render() {
    let elem;
    if (this.state.isEditable === true) {
      elem = (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input
            ref={input => {
              this.nameInput = input;
            }}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            style={{
              display: 'flex',
              width: fullWidth * 0.7,
              height: 20,
              fontFamily: 'Times New Roman',
              fontSize: 20,
              alignItems: 'center',
              marginRight: 5,
            }}
            value={this.state.item.value}
          />
          <div
            className="actionBtns"
            style={{
              display: 'flex',
              width: fullWidth * 0.2 - 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <button
              className="btn btn-danger"
              onClick={evt => {
                this.cancelChanges();
                evt.stopPropagation();
              }}
              style={{
                height: 25,
                width: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              x
            </button>
            <button
              className="btn btn-success"
              onClick={evt => {
                this.saveChanges();
                evt.stopPropagation();
              }}
              style={{
                height: 25,
                width: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✔
            </button>
          </div>
        </div>
      );
    } else {
      elem = <span>{this.props.item.value}</span>;
    }
    return (
      <div
        onClick={this.makeEditable}
        style={{
          width: fullWidth,
          height: 30,
          margin: 10,
          padding: 5,
          borderRadius: 3,
          backgroundColor: '#00a3bc',
          color: 'white',
          fontFamily: 'Times New Roman',
          fontSize: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {elem}
      </div>
    );
  }
}

export default TodoRow2;
