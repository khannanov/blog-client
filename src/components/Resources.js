import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../actions/auth';
import { Link } from 'react-router';

class Resources extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }

    render() {
        return (
            <div>
                {this.props.message}
                <ul>
                    <li><Link to="/resources/post/add">Add post</Link></li>
                </ul>
            </div>
        );
    }
}

export default connect(state => {
    return { message: state.auth.message }
}, { fetchMessage })(Resources);