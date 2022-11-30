import React, { Component } from 'react';

class Preview extends Component {
  render() {
    const data = this.props.data
    return (
      <div className='preview'>
        <div className="preview__result">
          <p>{data.photo}</p>
          <p>{data.fName}</p>
          <p>{data.lName}</p>
          <p>{data.adress}</p>
          <p>{data.city}</p>
          <p>{data.desc}</p>
        </div>
      </div>
    );
  }
}

export default Preview;