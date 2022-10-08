import React from 'react';
import styles from './Post.module.css';

// La idea de los componentes es apenas renderizar, no se aplica logica, cuando posible

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
