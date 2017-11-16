import React, { Component } from 'react';
import { Header, Card, Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';
import axios from 'axios';

class Products extends Component {
  state = {
    name: '',
    description: '',
    price: '',
    departmet: '',
   }

  componentDidMount() {
    axios.get('/api/products')
    .then( res => 
      this.setState({ products: res.data }) ) 
      debugger
  }

  addProduct = (products) => {
    const { product } = this.state;
    this.setState({ products: [products, ...products ] })
  }

  showProducts = (name, description, price) => {
    const { product } = this.state;
    return (
          <Card>
            <Card.Content>
              <Card.Header>
                {name}
              </Card.Header>
              <Card.Description>
                {description}
              </Card.Description>
              <Card.Meta>
                ${price}
              </Card.Meta>
              <Button>
                Add To Cart
              </Button>
            </Card.Content>
          </Card>
      )
    }
    
    render() {
      return(
        <Grid>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            {this.showProducts()}
          </Grid.Column>
        </Grid>
    )
  }
}

// render() {
//   return(
//     <Card>
//     {/* IMAGE GOES HERE */}
//       <Card.Content>
//         <Card.Header>
//           Name
//           {product.name}
//         </Card.Header>
//         <Card.Description>
//           Description
//         </Card.Description>
//       </Card.Content>
//     </Card>
//   )
// }
// }


const mapStateToProps = (state, props) => {
  return { product: state.product }
}


export default connect(mapStateToProps)(Products);