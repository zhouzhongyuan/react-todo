import React, { Component } from 'react';
import Footer from './Footer';
import TodoItem from './TodoItem';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { newTodo: '' };
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
            />
        );
        return (
            <div>
                <h1>todos</h1>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    onKeyDown={(e) => this.onKeyDown(e)}
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.newTodo || ''}
                />
                {items}
                <Footer />
            </div>
        );
    }
}
TodoApp.propTypes = {
    model: React.PropTypes.object,
};
export default TodoApp;
