import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import { useContacts } from '../contexts/ContactsProvider';
import { useConversation } from '../contexts/ConversationsProvider';

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversation();
  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds((prev) => {
      if (prev.includes(contactId)) {
        return prev.filter((prevId) => {
          return prevId === contactId;
        });
      } else {
        return [...prev, contactId];
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  };
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type='checkbox'
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button className='my-btn' type='submit'>
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
