import React from 'react';
import { Container , Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {user: '' , password: '' };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({user: `${document.getElementById("user").value}`, password: `${document.getElementById("pass").value}`});
    console.log(`${this.state.user} ha hecho click`);
  }

  render(){

    if (this.state !== null && this.state.user !== null && this.state.user !== ''){
      return (
      <div className="main-site">
        <h1>Bienvenido {this.state.user}!</h1>
      </div>
      );
    } else {
      return (
        <div classname="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario o email: </Form.Label>
                <Form.Control id= "user" type="email" placeholder="Usuario"/>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control id= "pass" type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}> Login </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}

export default Home;