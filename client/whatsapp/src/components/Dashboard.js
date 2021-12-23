import './css/Dashboard.css';

import React from 'react'

import { useConversation } from '../contexts/ConversationsProvider';
import OpenConversation from './OpenConversation';
import Sidebar from './Sidebar';

export default function Dashboard({id}) {
  const { selectedConversation } = useConversation();

  return (
    <div className='d-flex dashboard-wrapper'>
        <Sidebar id={id}></Sidebar>
        {selectedConversation && <OpenConversation />}
    </div>
  )
}
