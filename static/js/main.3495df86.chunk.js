(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,o){},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),s=o(8),d=o.n(s),i=o(2),c=o(3),r=o(5),p=o(4),u=o(1),l=o(6),h=(o(15),o(16),function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(r.a)(this,Object(p.a)(t).call(this,e))).sendComplete=o.sendComplete.bind(Object(u.a)(o)),o.sendDelete=o.sendDelete.bind(Object(u.a)(o)),o}return Object(l.a)(t,e),Object(c.a)(t,[{key:"sendComplete",value:function(){this.props.completeTodo(this.props.id,!this.props.completed)}},{key:"sendDelete",value:function(){this.props.deleteTodo(this.props.id)}},{key:"render",value:function(){var e="";return this.props.completed&&(e="completed"),n.a.createElement("article",{id:"this.props.id",className:"todo"},n.a.createElement("button",{className:"complete",onClick:this.sendComplete}),n.a.createElement("p",{className:e},this.props.text),n.a.createElement("button",{className:"remove",onClick:this.sendDelete},"Remove"))}}]),t}(a.Component)),b=(o(17),function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"inputform"},n.a.createElement("form",{id:"newTodoForm",onSubmit:this.props.addTodo},n.a.createElement("input",{id:"newTodoItem",placeholder:"New Todo Task",value:this.props.input,onChange:this.props.onChange}),n.a.createElement("button",{id:"addButton",onClick:this.props.addTodo},"add")))}}]),t}(a.Component)),f=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(r.a)(this,Object(p.a)(t).call(this,e))).state={todos:[]},o.onChange=o.onChange.bind(Object(u.a)(o)),o.addTodo=o.addTodo.bind(Object(u.a)(o)),o.completeTodo=o.completeTodo.bind(Object(u.a)(o)),o.deleteTodo=o.deleteTodo.bind(Object(u.a)(o)),o.sort=o.sort.bind(Object(u.a)(o)),o}return Object(l.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState({input:e.target.value})}},{key:"componentDidMount",value:function(){var e=this,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var t=JSON.parse(this.responseText);e.setState({todos:t}),e.setState({input:""})}},t.open("GET","https://api.kraigh.net/todos",!0),t.setRequestHeader("x-api-key","63c8781cb57d5a1dd3c693f8eb6ac6f7df70b75acaeab31ccdd9952de8554e29"),t.send()}},{key:"addTodo",value:function(e){var t={text:this.state.input},o=this;e.preventDefault();var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(this.responseText),t=o.state.todos;t.push(e),o.setState({todos:t})}else 4===this.readyState&&console.log(this.responseText)};a.open("POST","https://cors-anywhere.herokuapp.com/https://api.kraigh.net/todos",!0),a.setRequestHeader("Content-type","application/json"),a.setRequestHeader("x-api-key","63c8781cb57d5a1dd3c693f8eb6ac6f7df70b75acaeab31ccdd9952de8554e29"),a.send(JSON.stringify(t)),this.state.input=""}},{key:"completeTodo",value:function(e,t){var o={completed:t},a=this,n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var o=[];for(var n in a.state.todos){var s=a.state.todos[n];a.state.todos[n].id===e&&(s.completed=t),o.push(s)}a.setState({todos:o})}else this.readyState};var s="https://api.kraigh.net/todos/"+e;n.open("PUT",s,!0),n.setRequestHeader("Content-type","application/json"),n.setRequestHeader("x-api-key","63c8781cb57d5a1dd3c693f8eb6ac6f7df70b75acaeab31ccdd9952de8554e29"),n.send(JSON.stringify(o))}},{key:"deleteTodo",value:function(e){var t=new XMLHttpRequest,o=this;t.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var t=[];for(var a in o.state.todos)o.state.todos[a].id!==e&&t.push(o.state.todos[a]);o.setState({todos:t})}else this.readyState},t.open("DELETE","https://api.kraigh.net/todos/"+e,!0),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("x-api-key","63c8781cb57d5a1dd3c693f8eb6ac6f7df70b75acaeab31ccdd9952de8554e29"),t.send()}},{key:"sort",value:function(e){var t=this.state.todos.sort(function(e,t){return parseFloat(t.created)-parseFloat(e.created)});this.setState({todos:t})}},{key:"render",value:function(){var e=this;return console.log(this.state.todos),n.a.createElement("div",null,n.a.createElement("section",{id:"ToDoList"},n.a.createElement("button",{id:"sortButton",onClick:this.sort},"Sort"),n.a.createElement(b,{addTodo:this.addTodo,onChange:this.onChange,input:this.state.input}),this.state.todos.map(function(t){return n.a.createElement(h,{key:t.id,id:t.id,completed:t.completed,text:t.text,deleteTodo:e.deleteTodo,completeTodo:e.completeTodo})})))}}]),t}(a.Component);d.a.render(n.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,o){e.exports=o(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.3495df86.chunk.js.map