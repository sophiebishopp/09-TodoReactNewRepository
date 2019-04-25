import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: []
      }
      this.onChange = this.onChange.bind(this);
      this.addTodo = this.addTodo.bind(this);
      this.completeTodo = this.completeTodo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      this.sort = this.sort.bind(this);
    }

    onChange(event) {
      this.setState({
        input: event.target.value
      });
    }

  componentDidMount() { // loading my todos -- on load
    var self = this;
    var createRequest = new XMLHttpRequest();
    var apiKey = "63c8781cb57d5a1dd3c693f8eb6ac6f7df70b75acaeab31ccdd9952de8554e29";

    createRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
      // save new Todo to state
        var todoList = (JSON.parse(this.responseText));
        self.setState({
            todos: todoList
        });
      // clear the input field
      self.setState({input: ''});
      }
    }
    createRequest.open("GET", "https://api.kraigh.net/todos", true);
    createRequest.setRequestHeader("x-api-key",apiKey);
    createRequest.send();
  }

  addTodo(event){
    // read the input value from state
    const newTodoText = {text: this.state.input};
    var apiKey = "63c8781cb57d5a1dd3c693f8eb6ac6f7df70b75acaeab31ccdd9952de8554e29";

    // Do AJAX
    var self = this;
    event.preventDefault();

    var createRequest = new XMLHttpRequest();
    createRequest.onreadystatechange =  function(){
      if(this.readyState === 4 && this.status === 200){
        var returnedTodo = (JSON.parse(this.responseText));
        var todos = self.state.todos;
        todos.push(returnedTodo);
        self.setState({todos: todos});
      }else if(this.readyState === 4){
        console.log(this.responseText);
      }
    }

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const apiurl = "https://api.kraigh.net/todos";
    createRequest.open("POST", proxyurl + apiurl, true);
    createRequest.setRequestHeader("Content-type", "application/json");
    createRequest.setRequestHeader("x-api-key", apiKey);
    createRequest.send(JSON.stringify(newTodoText));

    // Inside your AJAX success
    this.state.input = '';
  }

  completeTodo(todoID, completed){
    var apiKey = "63c8781cb57d5a1dd3c693f8eb6ac6f7df70b75acaeab31ccdd9952de8554e29";

    var data = {
      completed: completed
    };
    var self = this;
    //API call to PUT - to set completed to true
    var editRequest = new XMLHttpRequest();
    editRequest.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
        var newTodos = [];
        for(var todo in self.state.todos){
          const thisTodo = self.state.todos[todo];
          if(self.state.todos[todo].id === todoID){
            thisTodo.completed = completed;
          }
          newTodos.push(thisTodo);

        }
        self.setState({todos: newTodos});
      }else if(this.readyState === 4){

      }
    }
    const apiurl = "https://api.kraigh.net/todos/" + todoID;
    editRequest.open("PUT", apiurl, true);
    editRequest.setRequestHeader("Content-type", "application/json");
    editRequest.setRequestHeader("x-api-key", apiKey);
    editRequest.send(JSON.stringify(data));
  }

  deleteTodo(todoID){
    var apiKey = "63c8781cb57d5a1dd3c693f8eb6ac6f7df70b75acaeab31ccdd9952de8554e29";

    var deleteRequest = new XMLHttpRequest();
    var self = this;
    deleteRequest.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
        var newTodos = [];
        for(var todo in self.state.todos){
          if(self.state.todos[todo].id !== todoID){
            newTodos.push(self.state.todos[todo]);
          }
        }
        self.setState({todos: newTodos});
      }else if(this.readyState === 4){

      }
    }
    deleteRequest.open("DELETE", "https://api.kraigh.net/todos/" + todoID, true);
    deleteRequest.setRequestHeader("Content-type", "application/json");
    deleteRequest.setRequestHeader("x-api-key", apiKey);
    deleteRequest.send();
  }

  sort(event){
    var self = this;

    const sorted = self.state.todos.sort(function (a, b) {
      return parseFloat(b.created) - parseFloat(a.created);
    });

    self.setState({todos: sorted});
  }
 
  render() {
    {console.log(this.state.todos)}
    return (
      <div>
        <section id="ToDoList">
          <button id="sortButton" onClick={this.sort}>Sort</button>
          <NewTodo addTodo={this.addTodo} onChange={this.onChange} input={this.state.input} />

          {this.state.todos.map((todo) =>
            <Todo key={todo.id} id={todo.id} completed={todo.completed} text={todo.text} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
          )}
        </section>
      </div>
    );
  }

}

export default App;
