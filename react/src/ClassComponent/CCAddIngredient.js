import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const apiUrl = "http://localhost:53570/api/Ingredient/";

class CCAddIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Image: "",
      Calories: "",
      ingredients: [],
      open: false
    };
  };

  handleNameChange = (e) => {
    this.setState({ Name: e.target.value });
  }

  handleImageChange = (e) => {
    this.setState({ Image: e.target.value });
  }

  handleCaloriesChange = (e) => {
    this.setState({ Calories: e.target.value });
  }

  handleSubmit = () => {
    if (this.state.Name.length === 0 || this.state.Calories.length === 0 || this.state.Image.length === 0) {
      this.setState({ open: true });
    }
    else {
      let newIngredient =
      {
        "Name": this.state.Name,
        "Image": this.state.Image,
        "Calories": this.state.Calories
      };

      fetch(apiUrl,
        {
          method: 'POST',
          body: JSON.stringify(newIngredient),
          headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8',
          })
        })
        .then(res => {
          console.log('res=', res);
          console.log('res.status', res.status);
          console.log('res.ok', res.ok);
          return res.json()
        })
        .then(
          (result) => {
            console.log("fetch btnFetchGetStudents= ", result);
          },
          (error) => {
            console.log("err post=", error);
          });

      console.log('end');
    }
  }


  handleClose = () => {
    this.setState({ open: false })
  };

  render() {
    if (this.state.open === false) {
      return (
        <div  className="addForms">
          <Form onSubmit={this.handleSubmit}>
            <Form.Text className="text-muted">ADD NEW INGREDIENT</Form.Text><hr />
            <Form.Group>
              <Form.Control type="text" placeholder="Enter Name" value={this.state.Name} onChange={this.handleNameChange} />
            </Form.Group>
            <Form.Group>
              <Form.Control type="number" placeholder="Calories" value={this.state.Calories} onChange={this.handleCaloriesChange} />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Ingredient Image URL" value={this.state.Image} onChange={this.handleImageChange} />
            </Form.Group>
            <Button variant="outline-secondary" type="submit"> ADD </Button>
          </Form>
        </div>
      )
    }
    else {
      return (
        <div>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">ERROR</DialogTitle>
            <DialogContent>
              <DialogContentText>
              Do not leave blank fields!!
      </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} variant="outline-secondary" type="submit">OK</Button>
            </DialogActions>
          </Dialog>
        </div>
      )

    }
  }
}
export default withRouter(CCAddIngredient);