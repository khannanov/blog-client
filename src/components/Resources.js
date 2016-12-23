import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../actions/auth';

class Resources extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }

    render() {
        return (
            <div>
                {this.props.message}
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        );
    }
}

export default connect(state => {
    return { message: state.auth.message }
}, { fetchMessage })(Resources);