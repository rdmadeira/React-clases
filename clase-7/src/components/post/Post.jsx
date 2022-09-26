import React from 'react';
import styles from './Post.module.css';

const Post = ({ id, title, body }) => {
  return (
    <div>
      <div className={styles.post}>
        <div className={styles.number}>{id}</div>
        <div className={styles.post_info}>
          <h2 className={styles.post_title}>{title}</h2>
          <p className={styles.post_body}>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
