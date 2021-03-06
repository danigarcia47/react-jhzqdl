import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';

import './table_component.css';

class Breaking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item});
  };

  async componentDidMount(){
    const response = await fetch('https://www.breakingbadapi.com/api/characters');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Personajes Breaking Bad </h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Cumpleaños</th>
                    <th>Apodo</th>
                    <th>Ocupación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr key={uuid()} onClick={() => this.changeSelected(item)}>
                        <td>{item.name}</td>
                        <td>{item.birthday}</td>
                        <td>{item.nickname}</td>
                        <td>{item.occupation}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.img} />
                <Card.Body>
                  <Card.Title>
                    {this.state.selectedItem.name}
                  </Card.Title>
                  <Card.Text>
                    Interpretado por: {this.state.selectedItem.portrayed}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Breaking;