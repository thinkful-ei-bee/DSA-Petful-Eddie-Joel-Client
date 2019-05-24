import React from 'react';


export default class Animal extends React.Component{

  render(){
    return(
      <section className="col-6">
        <div>{this.props.name}</div>
        <img src={this.props.imageURL} alt={this.props.imageDescription}></img>
        <div >
          <p>More info</p>
          <ul>
            <li>
              <div>Sex:</div>
              <div>{this.props.sex}</div>
            </li>
            <li>
              <div>Age:</div>
              <div>{this.props.age} {this.props.age > 1 ? 'Years' : 'Year'}</div>
            </li>
            <li>
              <div>Breed:</div>
              <div>{this.props.breed}</div>
            </li>
            <li>
              <div>Story:</div>
              <div>{this.props.story}</div>
            </li>
          </ul>
        </div>
        {!this.props.adopted ? <button onClick={this.props.handleOnClick}>Let's Home {this.props.name}</button> : <button>Adoption In Process</button>}
        <div>Queue</div>
      </section>
    )
  }
}

