import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosUsuario, DatosTablaUsuario} from '../data/DatosUsuario';

const image = document.createElement('img');
image.src = 'https://static-cdn.jtvnw.net/jtv_user_pictures/dc98211d-d9b9-468d-ab9d-0c8f2628e49e-profile_image-300x300.png';


export function Perfil(){

  if(localStorage.getItem('user') == 'Dani'){
    return (
      <div>
        <h1>Mi perfil</h1>
        <Container>
          <Row>
            <Col lg={10} md={10}>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>{TitulosUsuario.field1}</th>
                      <th>{TitulosUsuario.field2}</th>
                      <th>{TitulosUsuario.field3}</th>
                      <th>{TitulosUsuario.field4}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DatosTablaUsuario.map((item) => {
                      return (
                        <tr>
                          <td>{item.nombre}</td>
                          <td>{item.apellidos}</td>
                          <td>{item.correo}</td>
                          <td><img src="https://static-cdn.jtvnw.net/jtv_user_pictures/dc98211d-d9b9-468d-ab9d-0c8f2628e49e-profile_image-300x300.png"></img></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Datos no encontrados</h1>
      </div>
    );
  }

}