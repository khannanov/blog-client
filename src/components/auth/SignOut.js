import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions/auth';

class SignOut extends Component {
    static propTypes = {};

    componentWillMount() {
        this.props.signOutUser();
    }


    render() {
        return (
            <div>Sorry to see you go ...</div>
        );
    }
}

export default connect(null, { signOutUser } )(SignOut);
