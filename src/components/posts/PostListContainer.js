import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../../actions/posts';
import PostsList from './PostsList';
import ReactPaginate from 'react-paginate';
const perPage = 5;

class PostListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageCount: 0,
            offset: 0
        }
    }

    componentDidMount() {
        this.props.loadPosts(perPage);
    }

    render() {
        const { posts, total } = this.props;
        const pageCount = Math.ceil(total / perPage);

        return <div>
            <PostsList posts={posts}/>,
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<a href="">...</a>}
                           breakClassName={"break-me"}
                           pageCount={pageCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={this.handlePageClick}
                           containerClassName={"pagination"}
                           subContainerClassName={"pages pagination"}
                           activeClassName={"active"} />
        </div>;
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * perPage);

        this.setState({offset: offset}, () => {
            this.props.loadPosts(perPage, offset);
        });
    };
}

PostListContainer.propTypes = {
    loadPosts: PropTypes.func,
};

export default connect(state => (
    {...state.posts}
), {loadPosts})(PostListContainer);