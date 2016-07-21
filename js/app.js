import React from 'react' ;
import ReactDOM from 'react-dom';
import TodoApp from './view/TodoApp';
import TodoModel from './model/TodoModel';
import { Router, Route, hashHistory } from 'react-router';
let model = new TodoModel('todo-app');
const app = () =>
    <TodoApp model={model} />;
const active = () =>
    <TodoApp model={model} filter="active" />;
const completed = () =>
    <TodoApp model={model} filter="completed" />;
function render() {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={app} />
            <Route path="active" component={active} />
            <Route path="completed" component={completed} />
        </Router>, document.getElementsByClassName('todoapp')[0]);
}
render();
model.subscribe(render);
