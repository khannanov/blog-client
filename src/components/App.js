import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { savePost, loadPosts } from '../actions/posts';
import PostsList from './PostsList';
import Header from './Header';

export class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadPosts();
    }

    static propTypes = {
        savePost: PropTypes.func,
        loadPosts: PropTypes.func
    };

    render() {
        const { posts, savePost } = this.props;

        return (
            <div>
                <Header/>
                {this.props.children}
                <PostsList posts={posts} savePost={savePost}/>
            </div>
        );
    }
}

export default connect(state => {
    return { posts: state.posts }
}, { savePost, loadPosts })(App);