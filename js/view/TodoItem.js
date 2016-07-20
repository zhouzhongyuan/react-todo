import React, { Component } from 'react';
class TodoItem extends Component {
    render() {
        return (
            <li
                className={this.props.isFinish ? 'completed' : ''}
            >
                <input
                    type="checkbox"
                    defaultChecked={this.props.isFinish ? 'checked' : ''}
                    onChange={this.props.onToggle}
                />
                <label >{this.props.title}</label>
                <button
                    onClick={this.props.onDestroy}
                >Delete</button>
            </li>
        );
    }
}
TodoItem.propTypes = {
    title: React.PropTypes.string,
    isFinish: React.PropTypes.bool,
    onDestroy: React.PropTypes.func,
    onToggle: React.PropTypes.func,
};
export default TodoItem;
