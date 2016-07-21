import React, { Component } from 'react';
import Footer from './Footer';
import TodoItem from './TodoItem';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
        };
    }
    onKeyDown(e) {
        if (e.which !== 13) {
            return;
        }
        const val = this.state.newTodo.trim();
        if (val) {
            this.props.model.addTodo(val);
            this.setState({ newTodo: '' });
        }
    }
    handleChange(e) {
        const val = e.target.value;
        this.setState({ newTodo: val });
    }
    destroy(todo) {
        this.props.model.destroy(todo);
    }
    toggle(todo) {
        this.props.model.toggle(todo);
    }
    titleChange(todo, newTitle) {
        this.props.model.titleChange(todo, newTitle);
    }
    clearCompleted() {
        this.props.model.clearCompleted();
    }
    toggleAll(e) {
        const checked = e.target.checked;
        this.props.model.toggleAll(checked);
    }
    render() {
        const todos = this.props.model.todos;
        const items = todos.map((v, i) =>
            <TodoItem
                todo={v}
                title={v.title}
                isFinish={v.isFinish}
                key={i}
                onDestroy={() => { this.destroy(v); }}
                onToggle={() => { this.toggle(v); }}
                onTitleChange={(newTitle) => { this.titleChange(v, newTitle); }}
            />
        );
        const leftTodo = todos.filter((item) =>
            item.isFinish === false
        );
        const leftNumber = leftTodo.length;
        const completedNumber = todos.length - leftTodo.length;
        return (
            <div>
                <h1>todos</h1>
                <input
                    type="checkbox"
                    onChange={(e) => this.toggleAll(e)}
                    checked={leftNumber === 0}
                />
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    onKeyDown={(e) => this.onKeyDown(e)}
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.newTodo || ''}
                />
                {items}
                <Footer
                    leftNumber={leftNumber}
                    completedNumber={completedNumber}
                    onClearCompleted={(e) => this.clearCompleted(e)}
                />
            </div>
        );
    }
}
TodoApp.propTypes = {
    model: React.PropTypes.object,
};
export default TodoApp;
