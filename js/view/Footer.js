import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div
                className="footer"
            >
                <span
                    className="todo-count"
                >{` ${this.props.leftNumber} left`}</span>
                <ul
                    className="filters"
                >
                    <li>
                        <a
                            href="#/"
                        >All
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/"
                        >Active
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/"
                        >Completed
                        </a>
                    </li>
                </ul>
                <button
                    onClick={this.props.onClearCompleted}
                    className="clear-completed"
                >
                    Clear completed
                </button>
            </div>
        );
    }
}
Footer.propTypes = {
    onClearCompleted: React.PropTypes.func,
    leftNumber: React.PropTypes.number,
    completedNumber: React.PropTypes.number,
};
export default Footer;
