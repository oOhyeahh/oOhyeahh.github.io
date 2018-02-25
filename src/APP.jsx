import React from 'react';

export default class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isloading: true,
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.isloading}Loading
      </div>
    );
  }
}
