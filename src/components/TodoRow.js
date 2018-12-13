import React, { Component } from 'react';
// import '../App.css';

class TodoRow extends Component {
  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    return (
      <div style={{ margin: 10 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 800,
            height: 50,
            backgroundColor: '#00a3bc',
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            1
          </div>
          <div
            style={{
              display: 'flex',
              flex: 10,
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                flex: 1,
                fontSize: 16,
                marginLeft: 25,
              }}
            >
              2
            </div>
          </div>
        </div>

        <div
          style={{
            marginLeft: 30,
            marginTop: -30,
            display: 'flex',
            flexDirection: 'row',
            width: 800,
            height: 50,
            backgroundColor: '#ffffff',
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              color: this.getRandomColor(),
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'Times New Roman',
              Times: 'serif',
            }}
          >
            {this.props.item.text}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoRow;
