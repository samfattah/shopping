import React, { Component } from 'react';
import { Header, Card, Grid, Button, Divider, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';
import axios from 'axios';

class Products extends Component {
  state = { products: [] }

  componentDidMount() {
    axios.get('/api/products')
    .then( res => 
      this.setState({ products: res.data }) ) 
  }

  addProduct = (products) => {
    const { product } = this.state;
    this.setState({ products: [products, ...products ] })
  }

  showProducts = () => {
    const { products } =this.state;
    return(
      products.map ( product =>
        <Grid.Column computer={4} tablet={8} mobile={16}>
          <Card>
            <Card.Content>
              <Card.Header as='h3'>{product.name}</Card.Header>
              <Card.Meta>{product.department}</Card.Meta>
              <Divider />
              <Card.Description>{product.description}</Card.Description>
              <Card.Meta>${product.price}</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    )
  }
    
  render() {
    return(
      <Grid>
        {this.showProducts()}
      </Grid>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { product: state.product }
}

export default connect(mapStateToProps)(Products);