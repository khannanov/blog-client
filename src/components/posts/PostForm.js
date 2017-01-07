import React, { Component, PropTypes } from 'react';

class PostForm extends Component {
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

        const { name, value } = e.target;
        const post = {...this.state.post};
        post[name] = value;

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
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text"
                           className="form-control"
                           name="title"
                           onChange={this.handleChange}
                           value={this.state.post.title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Datetime</label>
                    <input type="date" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Content</label>
                    <textarea value={this.state.post.content}
                              className="form-control"
                              name="content"
                              onChange={this.handleChange}
                    />
                </div>

                <button className="btn btn-success">Save</button>
            </form>
        );
    }
}

export default PostForm;
