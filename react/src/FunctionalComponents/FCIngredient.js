import React from 'react'
import { Card, Image } from 'react-bootstrap';

export default function FCIngredient(props) {
    return (
        <div className="ingredientCard">
            <Card> 
                <Image className="ingredientImg" variant="top" src={props.img} />
                <Card.Body style={{ color: 'black' }}>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.calories}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
