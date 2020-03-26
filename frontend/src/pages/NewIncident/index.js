import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

import DefaultLayout from '../_layout/default';
import InputText from '../../HOC/InputText';
import Button from '../../HOC/Button';
import TextArea from '../../HOC/TextArea';
import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e){
    e.preventDefault();
    try {
      const data = {
        title, description, value
      }
      await api.post('incident',  data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile');
    } catch (err) {
      alert('Failed to register incident, try again.')
    }
  }
  return (
    <DefaultLayout
      title="Register new incident"
      description="Describe the case in detail to find a hero to solve it"
      backTitle="Back to home"
      where="/profile"
      onSubmit={handleNewIncident}
    >
      <InputText 
        placeholder="Incident title" 
        value={title}
        onChange={e=> setTitle(e.target.value)}
      />
      <TextArea 
        placeholder="Description" 
        value={description}
        onChange={e=> setDescription(e.target.value)}
      />
      <InputText 
        placeholder="Cost in reais" 
        value={value}
        onChange={e=> setValue(e.target.value)}
      /> 

      <Button type="submit" >Submit</Button>
    </DefaultLayout>
  );
}
