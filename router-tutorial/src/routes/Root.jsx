import React, { useEffect } from 'react';
import {
  Outlet,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { getContacts, createContact } from '../contacts';

export async function loader({ request }) {
  const url = new URL(request.url);
  const qValue = url.searchParams.get('q');
  // console.log(qValue);
  const contacts = await getContacts(qValue);
  return { contacts, qValue };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export default function Root() {
  const { contacts, qValue } = useLoaderData();

  const navigation = useNavigation();
  const submit = useSubmit();
  useEffect(() => {
    document.getElementById('q').value = qValue;
  }, [qValue]);
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');
  // console.log(searching);
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              className={searching ? 'loading' : ''}
              defaultValue={qValue}
              onChange={(event) => {
                submit(event.currentTarget.form);
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? 'active' : isPending ? 'pending' : ''
                    }>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No name</i>
                    )}{' '}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>No contacts</p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === 'loading' ? 'loading' : ''}>
        {/* Outlet indica adonde los children tiene que renderizarse. */}

        <Outlet />
      </div>
    </>
  );
}
