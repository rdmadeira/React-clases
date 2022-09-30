import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { getContact } from '../contacts';

export async function loader({ params }) {
  return getContact(params.contactId);
}

export default function Contact() {
  /*  const contact = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
  }; */
  const contact = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar || contact.id}
          src={contact.avatar || null}
          alt={``}
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>
        {contact.twitter && (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <p>
            <a
              href={`https://twitter.com/${contact.twitter}`}
              target="_blank"
              rel="noreferrer">
              {contact.twitter}
            </a>
          </p>
        )}
        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}>
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
function Favorite({ contact }) {
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorite' : 'Add to favorite'}>
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}
