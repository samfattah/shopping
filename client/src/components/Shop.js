import React, { Component } from 'react';
import {
  Header, 
  Container,
  Grid,
  Divider,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';
import Products from './Products';
import AddProduct from './AddProduct';
import axios from 'axios';

class Shop extends Component {
  state = { products: [] }
  
  render() {
    const { products } = this.state;
      // return this.state.products.map(product => {
      return(
        <Container>
          <Header as='h1'>Buy My Shit</Header>
          <AddProduct />
          <Divider />
          <Grid>
            <Products />
          </Grid>
        </Container>
      )
    // }
  }
}

const mapStateToProps = (state, props) => {
  return { product: state.product }
}

export default connect(mapStateToProps)(Shop);