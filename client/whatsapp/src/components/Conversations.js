import React from 'react';
import { ListGroup } from 'react-bootstrap';

import { useConversation } from '../contexts/ConversationsProvider';

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversation();
  return (
    <ListGroup variant='flush'>
      {conversations.map((con, index) => (
        <ListGroup.Item key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={con.selected}
        >
          {con.recipients
            .map((r) => {
              return r.name;
            })
            .join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
