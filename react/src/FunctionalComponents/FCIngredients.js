import React from 'react'
import FCIngredient from '../FunctionalComponents/FCIngredient';
import Modal from 'react-awesome-modal';
import { Button } from 'react-bootstrap';
import { MDBContainer, MDBCol } from "mdbreact";
import ModalHeader from 'react-bootstrap/esm/ModalHeader';


export default function FCIngredients(props) {
    let list = props.ingredients.map(
        (x, index) => <FCIngredient id={x.Id} name={x.Name} img={x.Image} calories={x.Calories} index={index} />);


const  closeModal = () => {
    props.closeModal()
}

    return (
        <div >
            <Modal visible={props.visible} style={{overlfow: 'scroll'}}>
                <ModalHeader>Recipe Ingredients</ModalHeader>
                <MDBContainer>
                    <MDBCol>
                        {list}
                    </MDBCol>
                </MDBContainer>
                <Button variant="outline-secondary" onClick={closeModal}>close</Button>
            </Modal>
            

        </div>
    )
}
