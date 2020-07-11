import React, { Fragment } from 'react';
import Header from "../../../components/header";
import { Column, Section, Title, Container, Card} from "rbx";
import LogoImage from '../../../assets/images/logo.png';
import LoginForm from "../../../components/auth/login_form";
import "../../../styles/auth.scss";

const Login = () => (
  <Fragment>
    <Header/>
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={3}>
            <Card>
              <Card.Content>
                <LoginForm/>
                <Section>
                    <Column.Group centered>
                        <Column size={12}>
                        <img src={LogoImage}/>
                        </Column>
                    </Column.Group>

                    <Column.Group>
                        <Column size={12}>
                        <Title size={6} className="has-text-grey has-text-centered">
                            Suas notas aqui
                        </Title>
                        </Column>
                    </Column.Group>
                </Section>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default Login;