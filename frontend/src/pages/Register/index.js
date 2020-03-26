import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import Button from '../../HOC/Button';
import InputText from '../../HOC/InputText';
import DefaultLayout from '../_layout/default';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory()
  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      name, email, whatsapp, city, uf
    }

    try {
      const response = await api.post('ongs', data);

      alert(`Your access id: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Failed to create account, try again.')
    }
  }

  return (
    <DefaultLayout
      title="Account"
      description="Do your account, come in to the platform and help people to find incidentes from their ONG."
      backTitle="Back to login"
      where="/"
      onSubmit={handleSubmit}
    >
      <InputText
        placeholder="ONG name"
        value={name}
        onChange={e => setName(e.target.value)} />
      <InputText
        placeholder="E-mail" type="email"
        value={email}
        onChange={e => setEmail(e.target.value)} />
      <InputText
        placeholder="Whatsapp"
        value={whatsapp}
        onChange={e => setWhatsapp(e.target.value)} />
      <div className="input-group">
        <InputText
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)} />
        <InputText
          placeholder="FS" width={"80px"}
          value={uf}
          onChange={e => setUF(e.target.value)} />
      </div>
      <Button type="submit" >Cadastrar</Button>
    </DefaultLayout>
  );
}
