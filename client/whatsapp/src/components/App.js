import React, { Fragment } from 'react';

import { ContactsProvider } from '../contexts/ContactsProvider';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const [id, setId] = useLocalStorage('id');
  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );
  return <Fragment>{id ? dashboard : <Login onIdSubmit={setId} />}</Fragment>;
}

export default App;
