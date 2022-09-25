import React, { useState } from 'react';

import { createRoot } from 'react-dom/client';
import useFetch from './hooks/useFetch';

import './style.css';

const postsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const URL = `https://jsonplaceholder.typicode.com/posts`;
/* const fetchPost = async (id) => {
  const apiCall = await fetch(`${URL}/${id}`);
  const respuesta = await apiCall.json();
  return respuesta;
}; */

const App = () => {
  const [index, setIndex] = useState(0);
  const estado = useFetch(`${URL}/${postsIds[index]}`);
  // console.log(estado);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [post, setPost] = useState(null);

  /* useEffect(() => {
    setLoading(true);
    fetchPost(postsIds[index])
      .then((respuesta) => {
        setLoading(false);
        setError(null);
        setPost(respuesta);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
    return () => {};
  }, [index]); // Cada vez que index cambia, se re-renderiza. */

  const incrementIndex = () => {
    setIndex((i) => (i === postsIds.length - 1 ? i : i + 1));
  };
  if (estado.loading) {
    return <p>Loading.....</p>;
  }
  if (estado.error) {
    return (
      <>
        <p>{estado.error}</p>
        <button onClick={incrementIndex}>Siguiente Post</button>
      </>
    );
  }

  return (
    <div>
      {index === postsIds.length - 1 ? (
        <p>No hay mas nada para mostrar!</p>
      ) : (
        <>
          <h1>{estado.post?.title}</h1>{' '}
          {/* en javascript 2020, se agrega una interrogacion para indicar que si existe, aplicar el valor. Es lo mismo que
          post && post.title  */}
          <p>{estado.post?.body}</p>
          <button onClick={incrementIndex}>Siguiente Post</button>
        </>
      )}
    </div>
  );
};

const createdEl = createRoot(document.getElementById('root'));
createdEl.render(<App></App>);
