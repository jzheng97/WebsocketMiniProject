import './css/Login.css';

import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Container
      className='align-items-center d-flex'
      style={{ height: '100vh' }}
    >
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group>
            <Form.Label>Enter your ID</Form.Label>
            <Form.Control
                type='text'
                ref={idRef}
                required
            ></Form.Control>
        </Form.Group>
        <Button type='submit' className='my-btn'>
          Login
        </Button>
        <Button
          onClick={createNewId}
          variant='secondary'
          className='my-btn'
        >
          Create A New Id
        </Button>
      </Form>
    </Container>
  );
}
