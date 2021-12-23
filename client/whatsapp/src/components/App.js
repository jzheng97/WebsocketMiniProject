import React, { Fragment } from 'react';

import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const [id, setId] = useLocalStorage('id');
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );
  return <Fragment>{id ? dashboard : <Login onIdSubmit={setId} />}</Fragment>;
}

export default App;
