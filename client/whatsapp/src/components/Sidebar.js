import './css/Sidebar.css';

import React, { useState } from 'react';
import { Button, Modal, Nav, Tab } from 'react-bootstrap';

import Contacts from './Contacts';
import Conversations from './Conversations';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';
export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const conversationOpen = activeKey === CONVERSATIONS_KEY;
  const [modalOpen, setModalOpen] = useState(false);
  // const [modalClose]
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='sidebar-overall d-flex flex-column'>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant='tabs' className='justify-content-center'>
          <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
        </Nav>
        <Tab.Content className='border-end overflow-auto flex-grow-1'>
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className='p-2 border-top border-end small'>
          Your Id: <span className='text-muted'>{id}</span>
        </div>
        <Button onClick={() => {setModalOpen(true)}} className='rounded-0'>
          New {conversationOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
