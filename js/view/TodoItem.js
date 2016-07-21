import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { title: this.props.title };
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.editing && this.props.editing) {
            const node = ReactDOM.findDOMNode(this.refs.editField);
            node.focus();
            node.setSelectionRange(node.value.length, node.value.length);
        }
    }
    onKeyDown(e) {
        if (e.which !== 13) {
            return;
        }
        this.props.onCancel(event);
        const val = this.state.title.trim();
        if (val) {
            this.props.onTitleChange(val);
        }
    }
    handleChange(e) {
        const val = e.target.value;
        this.setState({ title: val });
    }
    handleEdit() {
        this.props.onEdit();
    }
    handleSubmit() {
        const val = this.state.title.trim();
        if (val) {
            this.props.onTitleChange(val);
        } else {
            this.props.onDestroy();
        }
    }
    render() {
        const clsName1 = this.props.isFinish ? 'completed' : '';
        const clsName2 = this.props.editing ? 'editing' : '';
        return (
            <li
                className={`${clsName1} ${clsName2}`}
            >
                <div
                    className="view"
                >
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.isFinish ? 'checked' : ''}
                        onChange={this.props.onToggle}
                    />
                    <label
                        onDoubleClick={() => this.handleEdit()}
                    >{this.props.title}</label>
                    <button
                        className="destroy"
                        onClick={this.props.onDestroy}
                    ></button>
                </div>
                <input
                    ref="editField"
                    className="edit"
                    type="text"
                    defaultValue={this.state.title}
                    onKeyDown={(e) => this.onKeyDown(e)}
                    onChange={(e) => this.handleChange(e)}
                    onBlur={() => this.handleSubmit()}
                />
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
    editing: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    onCancel: React.PropTypes.func,
};
export default TodoItem;
