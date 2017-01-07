import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadPost } from '../../actions/posts';

class PostDetailsContainer extends Component {
    componentDidMount() {
        const { post, loadPost } = this.props;
        const { id } = this.props.params;
        if (!post || !post.loaded) {
            loadPost(id);
        }
    }

    render() {
        return (
            <div>
                <h1 className="post-title">{this.props.title}</h1>
                <div className="post-content">{this.props.content}</div>
            </div>
        );
    }
}

PostDetailsContainer.propTypes = {
    loadPost: PropTypes.func,
    post: PropTypes.object
};

export default connect((state, props) => {
    return state.posts.posts.filter(post => post._id == props.params.id)[0]
}, { loadPost })(PostDetailsContainer);