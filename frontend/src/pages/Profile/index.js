import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { LinkButton } from '../../HOC/Button';
import api from '../../services/api';

import { Container, ListIncident, IncidentItem } from './styles';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId])

  async function handleDelete(id) {
    try {
      await api.delete(`incident/${id}`, {
        headers: {
          Authorization: ongId
        }
      })
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert('Failed to delete incident, try again');
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/')
  }

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Wellcome {ongName}</span>

        <LinkButton to="/incident/new">
          Register new incident
        </LinkButton>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Incidents registered</h1>

      <ListIncident>
        {
          incidents.map(incident =>
            (<IncidentItem key={incident.id} >
              <strong>INCIDENT:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIPTION:</strong>
              <p>{incident.description}</p>

              <strong>VALUE:</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

              <button onClick={() => handleDelete(incident.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </IncidentItem>)
          )
        }
      </ListIncident>
    </Container>
  );
}
