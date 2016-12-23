import React, { Component, PropTypes } from 'react';
import Foo from './foo';
import PostsForm from './PostsForm';

export class PostsList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        posts: PropTypes.array
    };

    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <div key={post.id} className="post-item">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="post-list">
                <h1>Posts</h1>
                <PostsForm savePost={this.props.savePost}/>
                <Foo/>
                {this.renderPosts()}
            </div>
        );
    }
}

export default PostsList;