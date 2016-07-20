import React from 'react' ;
import ReactDOM from 'react-dom';
import TodoApp from './view/TodoApp';
import TodoModel from './model/TodoModel';
const model = new TodoModel('todo-app');
function render() {
    ReactDOM.render(<TodoApp model={model} />, document.getElementById('todoapp'));
}
render();
