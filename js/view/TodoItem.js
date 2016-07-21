import React, { Component } from 'react';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { title: this.props.title };
    }
    onKeyDown(e) {
        if (e.which !== 13) {
            return;
        }
        const val = this.state.title.trim();
        if (val) {
            this.props.onTitleChange(val);
        }
    }
    handleChange(e) {
        const val = e.target.value;
        this.setState({ title: val });
    }
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
                <input
                    type="text"
                    defaultValue={this.state.title}
                    onKeyDown={(e) => this.onKeyDown(e)}
                    onChange={(e) => this.handleChange(e)}
                />
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
    onTitleChange: React.PropTypes.func,
};
export default TodoItem;
