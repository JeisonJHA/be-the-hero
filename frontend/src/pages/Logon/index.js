import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import InputText from '../../HOC/InputText';
import Button from '../../HOC/Button';
import BackLink from '../../HOC/BackLink';
import api from '../../services/api';

import { Container, Form } from './styles';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('session', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Failed to login, try again.')
    }
  }

  return (
    <Container>
      <Form>
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <InputText
            placeholder="ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Button type="submit">Login</Button>

          <BackLink to="/register">
            <FiLogIn size={16} color="#E02041" />
            Create account
          </BackLink>
        </form>
      </Form>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
