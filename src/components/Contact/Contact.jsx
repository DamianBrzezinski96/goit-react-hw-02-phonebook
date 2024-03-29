import React from "react";

export const Contact = ({
    contacts,
    deleteContact,
}) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
