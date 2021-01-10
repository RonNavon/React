import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const apiUrl = "http://localhost:53570/api/dish/";
const apiIngredients = "http://localhost:53570/api/Ingredient/";

class CCAddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            CookingMethod: "",
            Time: "",
            Image: "",
            ingredients: [],
            selectedIngredients: [],
            enable: true,
            open: false
        };

        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {
        axios.get(apiIngredients,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                })
            })
            .then(res => {
                this.setState({
                    ingredients: res.data.map(o => { return { name: o.Name, id: o.ID } })
                }, () => console.log(this.state.ingredients));
            })
    }

    handleNameChange = (e) => {
        this.setState({ Name: e.target.value });
    }

    handleCookingChange = (e) => {
        this.setState({ CookingMethod: e.target.value });
    }

    handleTimeChange = (e) => {
        this.setState({ Time: e.target.value });
    }

    handleImageChange = (e) => {
        this.setState({ Image: e.target.value });
    }

    onSelect(selectedList) {

        this.setState({
            selectedIngredients: selectedList
        }, () => console.log(this.state.selectedIngredients));
    }

    handleSubmit = () => {
        if (this.state.Name.length === 0 || this.state.CookingMethod.length === 0 || this.state.Image.length === 0 || this.state.Time.length === 0 || this.state.selectedIngredients.length === 0) {
            this.setState({ open: true });
        }
        else {
            let newRecipe =
            {
                "Name": this.state.Name,
                "imageURL": this.state.Image,
                "cookingTime": this.state.Time,
                "cookingMethod": this.state.CookingMethod,
                "ingredientsIDs": this.state.selectedIngredients.map(i => i.id)
            };

            fetch(apiUrl,
                {
                    method: 'POST',
                    body: JSON.stringify(newRecipe),
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
                <div className="addForms">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Text className="text-muted">ADD NEW RECIPE</Form.Text><hr />
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter Name" value={this.state.Name} onChange={this.handleNameChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Cooking Method" value={this.state.Cooking} onChange={this.handleCookingChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="number" placeholder="Cooking Time" value={this.state.Time} onChange={this.handleTimeChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Recipe Image URL" value={this.state.Image} onChange={this.handleImageChange} />
                        </Form.Group>
                        <Multiselect //https://www.npmjs.com/package/multiselect-react-dropdown
                            options={this.state.ingredients}
                            isObject={true}
                            selectedValues={this.state.selectedValue}
                            onSelect={this.onSelect}
                            onRemove={this.onRemove}
                            displayValue="name"
                        />
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
export default withRouter(CCAddRecipe);