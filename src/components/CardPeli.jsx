import React from 'react';
import { Card } from 'react-bootstrap';

class CardPeli extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    if(this.props.data !== null){
      return (
        <Card style={{ width: '18 rem' }}>
        <Card.Img variant="top" src={this.data.image} />
        <Card.Body>
          <Card.Title>
            {this.data.title}
          </Card.Title>
          <Card.Text>
            Puntuacion: {this.data.rt_score}
            <p/>
            Director:
            {this.data.director}
            <p/>
            Argumento:{this.data.description}
          </Card.Text>
        </Card.Body>
    </Card>
      );
    } else{
      return(
        <div/>
      );
    }
  }
}
export default CardPeli;