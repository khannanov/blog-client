import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { savePost } from '../../actions/posts';
import PostForm from './PostForm';

class PostFormContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PostForm savePost={this.props.savePost}/>
            </div>
        );
    }
}

PostFormContainer.propTypes = {};

export default connect(null, { savePost })(PostFormContainer);