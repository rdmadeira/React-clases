import React, { useReducer } from 'react';
import { Form, Outlet, useLoaderData } from 'react-router-dom';
import './users.css';

function reducer(state, action) {
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        submit: true,
      };
    case 'INPUTVACIO':
      return {
        ...state,
        submit: false,
        isValid: false,
        user: undefined,
      };
    case 'INPUT':
      return {
        ...state,
        isValid: true,
        submit: false,
        user: action.user,
      };
    default:
      break;
  }
}

const Users = () => {
  /* const [submit, setSubmit] = useState(false);
  const [isValid, setisValid] = useState(true);
  const [user, setUser] = useState(); */
  const [state, dispatch] = useReducer(reducer, {
    submit: false,
    isValid: true,
    user: undefined,
  });
  const users = useLoaderData();

  function handleValidate(event) {
    const value = event.target.value;
    const user = users.find((item) => item.username === value);
    value === '' && dispatch({ type: 'INPUTVACIO' });
    value !== '' && dispatch({ type: 'INPUT', user: user });
  }

  function changeState() {
    document.getElementById('username').value !== '' &&
      dispatch({ type: 'SUBMIT' });
    /* document.getElementById('username').value === '' && setisValid(false); */
  }

  return (
    <>
      <Form method="post" id="form-username" onSubmit={changeState}>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Input your username"
            className={`username-input ${!state.isValid && 'red'}`}
            onInput={handleValidate}
          />
          {!state.isValid && <span>Campo no puede estar vacío</span>}
        </div>
        <button type="submit">{state.user ? 'Submit' : 'Create'}</button>
      </Form>
      <div id="outlet-content">{state.submit ? <Outlet /> : '...pending'}</div>
    </>
  );
};

export default Users;
