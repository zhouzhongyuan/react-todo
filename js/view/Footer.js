import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div>
                <span>{` ${this.props.leftNumber} left`}</span>
                <a
                    href="#/"
                >All
                </a>
                <a
                    href="#/"
                >Active
                </a>
                <a
                    href="#/"
                >Completed
                </a>
                <button
                    onClick={this.props.onClearCompleted}
                    className={this.props.completedNumber ? '' : 'hidden'}
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
