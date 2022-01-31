import React from 'react';
import uuid from 'react-build';
import { Container, Table, Row, Col } from 'react-bootstrap';
import CardPeli from './CardPeli';

import './table_component.css';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };

  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Peliculas de Studio Ghibli</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Titulo Original</th>
                    <th>Director</th>
                    <th>Año</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.title}</td>
                        <td>{item.original_title}</td>
                        <td>{item.director}</td>
                        <td>{item.release_date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
                  <CardPeli data={this.state.selectedItem}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PelisGhibli;
