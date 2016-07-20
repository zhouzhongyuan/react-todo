import React from 'react' ;
import ReactDOM from 'react-dom';
import TodoApp from './view/TodoApp';
import TodoModel from './model/TodoModel';
// const model = new TodoModel('todo-app');
const model = {
    todos: [{
        title: 'I\'m a title',
        isFinish: false,
    }, {
        title: 'I\'m a 2',
        isFinish: true,
    },
    ],
};
function render() {
    ReactDOM.render(<TodoApp model={model} />, document.getElementById('todoapp'));
}
render();
