import React from 'react';
import { Container , Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {user: '' , password: '' };
    this.login = this.login.bind(this);
    this.inputUser = React.createRef();
    this.inputPass = React.createRef();
  }

  login() {
    this.setState({
      user: this.inputUser.current.value,
      password: this.inputPass.current.value,
    });
  }

  recargar() {
    localStorage.removeItem('user'),
    localStorage.removeItem('pass');
    location.reload();
  }

  componentDidMount(){
    this.setState({user:localStorage.getItem('user'), password:localStorage.getItem('password'),
  })
  }

  render(){
    if (this.state.user == null && this.state.password == null){
      return (
        <div classname="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario o email: </Form.Label>
                <Form.Control ref={this.inputUser} type="email" placeholder="Usuario"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control ref={this.inputPass} type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}> Login </Button>
            </Form>
          </Container>
        </div>
      );
    } else {
      if(localStorage.getItem('user') == 'Dani' && localStorage.getItem('pass') == '12345' ){
        return(
          <div>
            <Container>
            <h1>Bienvenido {this.state.user}</h1>
            <p/>
            <Button variant="primary" type="button" onClick={this.recargar}> Cerrar Sesion</Button>
            </Container>
          </div>
        );
      } else {
          return(
            <div classname="main-site">
            <h1>Credenciales erroneas, vuelva a intentarlo</h1>
            <Container>
              <Form>
                <Button variant="primary" type="button" onClick={this.recargar}> Volver a Home </Button>
              </Form>
            </Container>
          </div>
          );
        }

      }
    }
  
  componentWillUnmount(){
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('pass', this.state.password);
  }

}
export default Home;