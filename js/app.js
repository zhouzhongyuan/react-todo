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
const routes = (
    <div>
        <Route path="/" component={app} />
        <Route path="/active" component={active} />
        <Route path="completed" component={completed} />
    </div>
);
function render() {
    ReactDOM.render(
        <Router history={hashHistory}>{routes}</Router>,
        document.getElementsByClassName('todoapp')[0]);
}
render();
model.subscribe(render);
