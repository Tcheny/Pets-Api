import React, { Component } from 'react';
import catImg from './assets/cat.png';
import dogImg from './assets/dog.png';

class Display extends Component {

  render() {
    const petImg = (pet) => {
      if (pet.photo) return `storageImg/${pet.photo}`;
      else if (pet.species === 'Chat') return catImg;
      else return dogImg;
}

    const pets = this.props.pets.map(pet =>
      <div className="Card">
        <a href={`http://localhost:8080/pets/${pet._id}`}>x</a>
        <img className="pets-img" src={petImg(pet)} alt=""/>
        <div>
          <p>{pet.name}</p>
          <p>{pet.breed}</p>
        </div>
      </div>
    );

    return (
      <div>
        {pets}
      </div>
    );
  }

}

export default Display;
