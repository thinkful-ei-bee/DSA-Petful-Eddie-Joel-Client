import React from 'react';
import Animal from '../components/Animal/Animal';
import {cat,dog} from '../components/App/data';

export default class Dashboard extends React.Component{
  state={
    currCat:{},
    currDog:{},
  }

  componentDidMount(){
    //get data
    //set state
    console.log(cat,dog)
    this.setState({
      currCat:cat,
      currDog:dog
    })
  }

  handleOnClick = () =>{

  }

  render(){
    return(
      <>
      <Animal 
        imageURL ={this.state.currCat.imageURL}
        imageDescription = {this.state.currCat.imageDescription}
        name = {this.state.currCat.name}
        sex = {this.state.currCat.sex}
        story = {this.state.currCat.story}
        breed= {this.state.currCat.breed}
        age = {this.state.currCat.age}
        handleOnClick={this.handleOnClick}
      />

      <Animal 
        imageURL ={this.state.currDog.imageURL}
        imageDescription = {this.state.currDog.imageDescription}
        name = {this.state.currDog.name}
        sex = {this.state.currDog.sex}
        story = {this.state.currDog.story}
        breed= {this.state.currDog.breed}
        age = {this.state.currDog.age}
      />
    </>
    )
  }
}