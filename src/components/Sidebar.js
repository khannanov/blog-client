import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/auth';
import { Link } from 'react-router';

class Sidebar extends Component {
    static propTypes = {

    };

    renderLinks() {
        if (this.props.authenticated) {
            return <li className="nav-item">
                <Link to="/signout">Sign Out</Link>
            </li>
        } else {
            return [
                <li className="nav-item" key={1}>
                    <Link to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link to="/signup">Sign Up</Link>
                </li>
            ]
        }
    }

    render() {
        return (
            <div className="sidebar">
                <figure className="profile">
                    <a href="/"><img src="/images/profile_100.jpg" className="img-circle thick-black-border" alt="Aydar Khannanov"/></a>
                </figure>
                <ul className="list-unstyled">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    {this.renderLinks()}
                </ul>
            </div>
        );
    }
}

export default connect(state => {
    return { authenticated: state.auth.authenticated }
}, { authenticate })(Sidebar);