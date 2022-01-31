import React from 'react';
import { Card } from 'react-bootstrap';

class CardPeli extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.cardData;
  }

  render(){
    if(this.data !== null){
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.data.image} />
          <Card.Body>
            <Card.Title>
              {this.data.title}
            </Card.Title>
            <Card.Text>
              Titulo original: {this.data.original_title}
              <p/>
              Director: {this.data.director}
              <p/>
              Argumento: {this.data.descripcion}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
      else {
        return <div />;
      }
  }
}
export default CardPeli;