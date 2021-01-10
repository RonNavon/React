import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FCIngredients from '../FunctionalComponents/FCIngredients';
import FCRecipes from '../FunctionalComponents/FCRecipes';


const apiUrl = "http://localhost:53570/api/dish/";

class CCHome extends Component {
  state = {
    items: [],
    setShow: true,
    ingredients: [],
    visible: false
  }

  componentDidMount() {
    fetch(apiUrl,
      {
        method: 'GET',
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
          this.setState({
            items: result
          }, console.log(this.state.items))
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  getRecipe = (id) => {
    fetch(apiUrl + id,
      {
        method: 'GET',
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
          this.setState({
            ingredients: result,
            visible: true
          }, () => console.log(this.state.ingredients))
        },
        (error) => {
          console.log("err post=", error);
        });

  }
  closeModal = () => {
    this.setState({
      visible: false
    });
  }


  render() {
    return (
      <div>
        <FCRecipes items={this.state.items} getRecipe={this.getRecipe} />
        <hr />
        <FCIngredients ingredients={this.state.ingredients} visible={this.state.visible} closeModal={this.closeModal} />
      </div>
    )
  }
}
export default withRouter(CCHome);