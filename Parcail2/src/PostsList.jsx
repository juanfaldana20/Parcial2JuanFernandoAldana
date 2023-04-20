import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Post from './Posts';

const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
