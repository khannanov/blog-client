import React, { Component, PropTypes } from 'react';

class PostsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.post = this.getStubPost();
    }

    static propTypes = {
        savePost: PropTypes.func
    };

    getStubPost = () => {
        return {
            title: '',
            content: '',
        }
    };

    handleChange = e => {
        e.preventDefault();

        const post = {...this.state.post};
        post.content = e.target.value;

        this.setState({ post: post });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.savePost(this.state.post);
        this.setState({post: this.getStubPost()})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="posts-form">
                <textarea value={this.state.post.content}
                          onChange={this.handleChange}
                />
                <input type="text"/>
                <button>Save</button>
            </form>
        );
    }
}

export default PostsForm;
