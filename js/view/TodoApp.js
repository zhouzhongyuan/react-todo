import React, { Component } from 'react';
import Footer from './Footer';
import TodoItem from './TodoItem';
class TodoApp extends Component {
    render() {
        const items = this.props.model.todos.map((v, i) => {
            console.log(v, i);
            return (
                <TodoItem
                    title={v.title}
                    isFinish={v.isFinish}
                    key={i}
                />
            );
        });
        console.log(items);
        let mainContent = <div>main content</div>;
        return (
            <div>
                <h1>todos</h1>
                <input type="text" placeholder="What needs to be done?" />
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
