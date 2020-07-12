import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Label, Help } from "rbx";
import UserService from '../../../services/users';
import { Redirect } from "react-router-dom";

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    if(redirectToLogin == true)
        return <Redirect to={{pathname: "/login"}}/>

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await UserService.register({ name: name, email: email, password: password });
            
            setRedirectToLogin(true);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <Fragment>
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Nome:</Label>
                            <Control>
                                <Input 
                                    type="name" 
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    name="name"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input 
                                    type="email" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    name="email"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Senha:</Label>
                            <Control>
                                <Input 
                                    type="password" 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    name="password"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group>
                                    <Column>
                                        <a onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">Login</a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Cadastrar</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        { error && <Help color="danger">Email ou senhas inválidos</Help> }
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default RegisterForm;