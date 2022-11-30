import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    const data = this.props.data
    return (
      <div className='inputs'>
        <label htmlFor="photo">Your photo</label>
        <input type="file" onChange={this.props.changeFunc} value={data.photo} accept='image/*' name="photo" id="photo" />
        <label htmlFor="fName"><strong>First Name</strong></label>
        <input type="text" onChange={this.props.changeFunc} value={data.fName} placeholder="First Name" name="fName" required></input>
        <label htmlFor="lName"><strong>Last Name</strong></label>
        <input type="text" onChange={this.props.changeFunc} value={data.lName} placeholder="Last Name" name="lName" required></input>
        <label htmlFor="adress"><strong>Street & num.</strong></label>
        <input type="text" onChange={this.props.changeFunc} value={data.adress} placeholder="Street, 23" name="adress" required></input>
        <label htmlFor="city"><strong>City</strong></label>
        <input type="text" onChange={this.props.changeFunc} value={data.city} placeholder="City Name" name="city" required></input>
        <label htmlFor="desc"><strong>Decription</strong></label>
        <textarea name="desc" onChange={this.props.changeFunc} value={data.desc} id="desc"></textarea>
      </div>
    );
  }
}

export default Inputs;