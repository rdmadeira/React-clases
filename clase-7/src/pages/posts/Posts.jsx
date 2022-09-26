import React from 'react';
import styles from './Posts.module.css';
import Post from '../../components/post/Post.jsx';
import useFetch from '../../hooks/useFetch';

const Posts = () => {
  const promise = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (promise.loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (promise.error) {
    return <p>{promise.error}</p>;
  }
  return (
    <div className={styles.posts}>
      {promise.post &&
        promise.post.map((post) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <Post
              key={post.id} //no se debe pasar el indice del array como valor de key, es mala practica
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })}
    </div>
  );
};

export default Posts;
