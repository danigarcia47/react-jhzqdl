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
                        <td>{item.nombre}</td>
                        <td>{item.escuderia}</td>
                        <td>{item.victorias}</td>
                        <td>{item.titulos}</td>
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
  }
}

export default F1;