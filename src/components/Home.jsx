import React from 'react';
import { Container , Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {user: '' , password: '' };
    this.login = this.login.bind(this);
    this.inputUser = React.createRef();
    this.inputPassword = React.createRef();
    this.inputEmail = React.createRef();
  }

  login() {
    this.setState({
      user: this.inputUser.current.value,
      password: this.inputPassword.current.value,
      email: this.inputEmail.current.value,
    });
  }

  recargar() {
    localStorage.removeItem('user'),
    localStorage.removeItem('pass');
    location.reload();
  }

  componentDidMount(){
    this.setState({user:localStorage.getItem('user'), password:localStorage.getItem('password'),email:localStorage.getItem('correo'),})
  }

  render() {
    if (this.state !== null && this.state.user !== null && this.state.user !== '') {
      if (this.state !== null && this.state.user !== 'Dani' && this.state.password !== '12345'){
        return (
          <div className="main-site">
            <h1>Usuario no encontrado</h1>
            <p/>
            <h2>Por favor, vuelva a intentarlo</h2>
            <Button variant="primary" type="button" onClick={this.recargar}>Volver a Home</Button>
          </div>
        );
      }else {
        if (this.state == null && this.state.user == 'Dani' && this.state.password !== '12345'){
          return (
            <div className="main-site">
              <h1>Usuario no encontrado</h1>
              <p/>
              <h2>Por favor, vuelva a intentarlo</h2>
              <Button variant="primary" type="button" onClick={this.recargar}>Volver a Home</Button>
            </div>
          );
        }else{
          if (this.state !== null && this.state.user !== 'Dani' && this.state.password == '12345'){
            return (
              <div className="main-site">
                <h1>Usuario no encontrado</h1>
                <p/>
                <h2>Por favor, vuelva a intentarlo</h2>
                <Button variant="primary" type="button" onClick={this.recargar}>Volver a Home</Button>
              </div>
            );
          }else{
            return (
              <div className="main-site">
                <h1>Bienvenido {this.state.user}!</h1>
                <p/>
                <Button variant="primary" type="button" onClick={this.recargar}>Cerrar Sesión</Button>
              </div>
            );
          }
        }
      }
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Correo electrónico" ref={this.inputEmail}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="email" placeholder="Usuario" ref={this.inputUser}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control type="password" placeholder="Contraseña" ref={this.inputPassword}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>Login</Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
  
  componentWillUnmount(){
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('pass', this.state.password);
    localStorage.setItem('correo', this.state.email);
  }

}
export default Home;