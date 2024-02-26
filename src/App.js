import React from 'react';
import './App.css';

import ContainerInsideExample from './components/navbar'
import Name from './components/name';
import Description from './components/description';
import Image from './components/image';
import Price from './components/price';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Greeting from './components/greeting';



function App() {
  return (
    <div className="App">
      <ContainerInsideExample/>
    <Card  className='card'>
      {/* Image.jsx */}
      <Image />
      <Card.Body>
        <Card.Title className='title'>
          {/* Name.jsx */}
          <Name />
        </Card.Title>
        <Card.Text>
          {/* Description.jsx */}
          <Description />
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* Price.jsx */}
        <Price />
      </ListGroup>
      <Card.Body >
        <Card.Link className='link' href="#">Discover More</Card.Link>
      </Card.Body>
    </Card>
    <Greeting />

    </div>
  );
}

export default App;