import React, { Fragment } from 'react';
import presentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import { Column, Section, Title, Container } from 'rbx';
import '../../styles/home.scss';
import { BrowserRouter, Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="home">
      <Container>
        <Column.Group>
          <Column size={5}>
            <Title size={2} spaced className="has-text-white">
              Crie suas notas rapidamente
            </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
              Simples de usar.<br /><br />
              Crie sua conta agora mesmo
            </Title>
            <BrowserRouter>
                <Link to='/register' className="button is-outlined is-white is-large">
                <strong>Cadastre-se agora</strong>
                </Link>
            </BrowserRouter>
          </Column>
          <Column size={6} offset={1}>
            <img src={presentationImage}/>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
)

export default Home;