import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'data':
      return {
        ...state,
        loading: false,
        error: null,
      };

    case 'error':
      return {
        ...state,
        loading: false,
        post: null,
      };
  }
};
const useFetch = (url) => {
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  //const [post, setPost] = useState(null);
  const initial = { loading: true, error: null, post: null };
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        state.post = data;
        dispatch('data');
        // console.log(state);
      })
      .catch((error) => {
        state.error = error;
        dispatch('error');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
};

export default useFetch;
