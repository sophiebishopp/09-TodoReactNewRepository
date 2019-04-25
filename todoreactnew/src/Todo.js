import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.sendComplete = this.sendComplete.bind(this);
    this.sendDelete = this.sendDelete.bind(this);
  }
  sendComplete(){
    this.props.completeTodo(this.props.id, !this.props.completed);
  }
  sendDelete(){
    this.props.deleteTodo(this.props.id);
  }

  render() {
    var className = '';
    if(this.props.completed){
      className = 'completed';
    }
    return (
      <article id="this.props.id" className="todo">
        <button className="complete" onClick={this.sendComplete}></button>
          <p className={className}>{this.props.text}</p>
        <button className="remove" onClick={this.sendDelete}>Remove</button>
      </article>
    );
  }
}

export default Todo;
