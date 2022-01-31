import React from 'react';
import { Card } from 'react-bootstrap';

class CardPeli extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    if(props.data !== null){
      return (
        <Card style={{ width: '18 rem' }}>
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body>
          <Card.Title>
            {props.data.title}
          </Card.Title>
          <Card.Text>
            Puntuacion: {props.data.rt_score}
            <p/>
            Director:
            {props.data.director}
            <p/>
            Argumento:{props.data.description}
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