import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchPosts } from './redux/actions';
import { fetchComments } from './redux/actions';

const PostsPage = () => {
    const dispatch = useDispatch();
    const { loading: postsLoading, posts, error: postsError } = useSelector((state) => state.posts);
    const { loading: commentsLoading, comments, error: commentsError } = useSelector((state) => state.comments);

    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchComments());
    }, []);

    const getCommentsByPostId = (postId) => {
        return comments.filter((comment) => comment.postId === postId);
    };

    return (
        <div className='postsContainer'>
            {postsLoading && <h1>Loading posts...</h1>}
            {postsError && <h1>{postsError}</h1>}
            {!postsLoading &&
                !postsError &&
                posts.map((post) => (
                    <div className='postContainer' key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        {!commentsLoading &&
                            !commentsError &&
                            getCommentsByPostId(post.id).map((comment) => (
                                <div className="commentContainer" key={comment.id}>
                                    <h4>{comment.name}</h4>
                                    <h5>{comment.email}</h5>
                                    <hr />
                                    <p>{comment.body}</p>
                                </div>
                            ))}
                    </div>
                ))}
        </div>
    );
}

export default PostsPage;