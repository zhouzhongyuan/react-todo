import React, { Component } from 'react';
class TodoItem extends Component {
    render() {
        const isFinish = this.props.isFinish;
        console.log(isFinish);
        return (
            <li>
                <input
                    type="checkbox"
                    defaultChecked={this.props.isFinish ? 'checked' : ''}
                />
                <label >{this.props.title}</label>
                <button>Delete</button>
            </li>
        );
    }
}
TodoItem.propTypes = {
    title: React.PropTypes.string,
    isFinish: React.PropTypes.bool,
};
export default TodoItem;
