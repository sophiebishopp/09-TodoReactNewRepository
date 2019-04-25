import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <div id="inputform">
          <form id="newTodoForm" onSubmit={this.props.addTodo}>
            <input id="newTodoItem" placeholder="New Todo Task" value={this.props.input} onChange={this.props.onChange}></input>
            <button id="addButton" onClick={this.props.addTodo}>add</button>
          </form>
      </div>
    );
  }
}

export default NewTodo;
