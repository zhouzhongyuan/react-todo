import React, { Component } from 'react';
class TodoItem extends Component {
    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    defaultChecked={this.props.isFinish ? 'checked' : ''}
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
};
export default TodoItem;
