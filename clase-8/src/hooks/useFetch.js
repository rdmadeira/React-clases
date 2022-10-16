import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'data':
      return {
        post: action.post,
        loading: false,
        error: null,
      };

    case 'error':
      return {
        error: action.error,
        loading: false,
        post: null,
      };
      default: 
        return state
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
        dispatch({type: 'data', post: data});
        // console.log(state);
      })
      .catch((error) => {
        dispatch({ type: 'error', error: error});
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
};

export default useFetch;
