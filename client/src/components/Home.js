import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  state = { products: [] }
  
  render() {
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
    );
  }
}

export default Home;
