import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species : 'Chat',
      size : 'moyen',
      sexe : 'male',
    };
  }

  handleChange=(event)=>{
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="Form" action='http://localhost:8080/pets/add' method="POST" encType="multipart/form-data">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="species" value="Chat" checked={this.state.species === 'Chat'} onChange={this.handleChange}/>
              Chat
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" name="species" value="Chien" checked={this.state.species === 'Chien'} onChange={this.handleChange}/>
              Chien
            </label>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Name</label>
              <input type="text" name="name" class="form-control" placeholder="Name"/>
            </div>
            <div class="form-group col-md-3">
              <label>E-mail</label>
              <input type="email" name="email" class="form-control" placeholder="E-mail"/>
            </div>
            <div class="form-group col-md-3">
              <label>Phone Number</label>
              <input type="text" name="number" class="form-control" placeholder="Phone Number"/>
            </div>
            <div class="form-group col-md-3">
              <label>Address</label>
              <input type="text" class="form-control" placeholder="Address"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Breed</label>
              <input type="text" name="breed" class="form-control" placeholder="Breed"/>
            </div>
            <div class="form-group col-md-3">
              <label>Birthday</label>
              <input className='form-control' type='date' name='age'/>
            </div>
            <div class="form-group col-md-3">
              <label>Size</label>
              <select class="form-control" name='size' value={this.state.size} onChange={this.handleChange}>
                <option value="Grand">Grand</option>
                <option value="Moyen">Moyen</option>
                <option value="Petit">Petit</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label>Sexe</label>
              <select class="form-control" name="sexe" value={this.state.sexe} onChange={this.handleChange}>
                <option value='Femelle'>Femelle</option>
                <option value='Mâle'>Mâle</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Photo</label>
            <input className='form-control' type='file' name='photo'/>
          </div>
          <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
      </div>
    );
  }
}

export default Form;
