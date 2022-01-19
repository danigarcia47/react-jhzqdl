import React from 'react';
import {Table} from 'react-bootstrap';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosF1, DatosTablaF1} from '../data/DatosF1';

class F1 extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="main-site">
        <h1>Fórmula 1</h1>
        <Container>
        <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosF1.field1}</th>
                    <th>{TitulosF1.field2}</th>
                    <th>{TitulosF1.field3}</th>
                    <th>{TitulosF1.field4}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaF1.map((item) => {
                    return (
                      <tr>
                        <td id="demo">{item.nombre}</td>
                        <td>{item.escuderia}</td>
                        <td>{item.victorias}</td>
                        <td>{item.titulos}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={DatosTablaF1[0].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaF1[0].nombre}
                    {DatosTablaF1[0].escuderia}
                  </Card.Title>
                  <Card.Text>
                    Frase célebre: {DatosTablaF1[0].comentario}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );

    document.getElementById("demo").onclick = function() {mostrarPiloto()};
    function mostrarPiloto(){
      if(item.nombre == "Fernando Alonso"){
        valor = 0;
      }else{
        if(item.nombre == "Lewis Hamilton"){
          valor = 1;
        }else{
          if(item.nombre == "Sebastian Vettel"){
            valor = 2;
          }else{
            if(item.nombre == "Kimi Räikkönen"){
              valor = 3;
            }else{
              valor = 4;
            }
          }
        }
      }
    }
  }
}

export default F1;