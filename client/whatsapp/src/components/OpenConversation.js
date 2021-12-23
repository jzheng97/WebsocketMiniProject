import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

import { useConversation } from '../contexts/ConversationsProvider';

export default function OpenConversation() {
  const [text, setText] = useState();
  const { sendMessage, selectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(
      selectedConversation.recipients.map((r) => {
        return r.id;
      }),
      text
    );
    setText('');
  };

  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div className='flex-grow-1 overflow-auto'></div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='m-2'>
          <InputGroup>
            <Form.Control
              as='textarea'
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: '75px', resize: 'none' }}
            />
            <Button type='submit'>Send</Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
