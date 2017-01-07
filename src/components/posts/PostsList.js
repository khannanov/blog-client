import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
                <div key={post._id} className="row post-item">
                    <div className="col-md-12">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                    <div className="read-more col-md-12">
                        <Link to={`/post/${post._id}`}>read more...</Link>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="post-list">
                <h3>Posts</h3>
                {this.renderPosts()}
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 5);

        this.setState({offset: offset}, () => {
            this.loadCommentsFromServer();
        });
    };
}

export default PostsList;