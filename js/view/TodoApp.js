import React, { Component } from 'react';
import Footer from './Footer';
class TodoApp extends Component {
    render() {
        return (
            <div>
                <h1>TodoApp View</h1>
                <Footer />
            </div>
        );
    }
}
TodoApp.propTypes = {
};
export default TodoApp;
