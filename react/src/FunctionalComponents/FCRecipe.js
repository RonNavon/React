import React from 'react'
import { Button, Card, Image } from 'react-bootstrap';


export default function FCRecipe(props) {

  const getRecipe = () => {
    props.getRecipe(props.id);
  }

  return (
    <div>
      <Card className="recipeCard">
        <Image variant="top" src={props.img} />
        <Card.Body style={{ color: 'black' }}>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.cookingMethod}</Card.Text>
          <Card.Text>{props.cookingTime}</Card.Text>
          <Button variant="outline-secondary" onClick={getRecipe}>Show Ingredients</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
