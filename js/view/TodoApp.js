import React, { Component } from 'react';
import Footer from './Footer';
import TodoItem from './TodoItem';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
            editing: null,
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
        this.setState({ editing: null });
    }
    clearCompleted() {
        this.props.model.clearCompleted();
    }
    toggleAll(e) {
        const checked = e.target.checked;
        this.props.model.toggleAll(checked);
    }
    edit(todo) {
        this.setState({ editing: todo.id });
    }
    save(todoToSave, text) {
        this.props.model.save(todoToSave, text);
        this.setState({ editing: null });
    }
    cancel() {
        this.setState({ editing: null });
    }
    render() {
        let todos = this.props.model.todos;
        const leftTodo = todos.filter((item) =>
            item.isFinish === false
        );
        const leftNumber = leftTodo.length;
        const completedNumber = todos.length - leftTodo.length;
        switch (this.props.filter) {
            case 'active':
                todos = todos.filter((item) => item.isFinish === false);
                break;
            case 'completed':
                todos = todos.filter((item) => item.isFinish === true);
                break;
            default:
        }
        const items = todos.map((v, i) =>
            <TodoItem
                todo={v}
                title={v.title}
                isFinish={v.isFinish}
                key={i}
                onDestroy={() => { this.destroy(v); }}
                onToggle={() => { this.toggle(v); }}
                onTitleChange={(newTitle) => { this.titleChange(v, newTitle); }}
                onEdit={() => this.edit(v)}
                editing={this.state.editing === v.id}
                onSave={() => this.save(v)}
                onCancel={() => this.cancel()}
            />
        );
        return (
            <div>
                <header>
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        type="text"
                        placeholder="What needs to be done?"
                        onKeyDown={(e) => this.onKeyDown(e)}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.newTodo || ''}
                    />
                </header>
                <section
                    className="main"
                >
                    <input
                        className="toggle-all"
                        type="checkbox"
                        onChange={(e) => this.toggleAll(e)}
                        checked={leftNumber === 0}
                    />
                    <ul
                        className="todo-list"
                    >
                        {items}
                    </ul>
                </section>
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
    filter: React.PropTypes.string,
};
export default TodoApp;
