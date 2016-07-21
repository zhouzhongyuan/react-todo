import React, { Component } from 'react';
import { Link } from 'react-router';
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
                        <Link
                            to="/"
                        >All
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/active"
                        >Active
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/completed"
                        >Completed
                        </Link>
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
