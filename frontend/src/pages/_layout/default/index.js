import React from 'react';

import logoImg from '../../../assets/logo.svg';
import BackLink from '../../../HOC/BackLink';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

export default function DefaultLayout({onSubmit, title, description, backTitle, where, children}) {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>{title}</h1>
          <p>{description}</p>

          <BackLink to={where}>
            <FiArrowLeft size={16} color="#E02041" />
            {backTitle}
          </BackLink>
        </section>
        <form onSubmit={onSubmit}>
          {children}
        </form>
      </Content>
    </Container>
  );
}
