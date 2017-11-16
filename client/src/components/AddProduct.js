import React, { Component } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';
import axios from 'axios';

class AddProduct extends Component {
  state = {
    name: '',
    description: '',
    department: '',
    price: '',
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({ products: e.target.value })
  }

// THIS IS A POTENTIAL EDIT FUNCTION
  // handleSubmit (e) {
  //   e.preventDefault();
  //   let data = new FormData();
  //   const { name, department, description, price } = this.state;
  //   data.append('name', name);
  //   // TODO department should be a dropdown
  //   // with predetermined choices 
  //   data.append('department', department);
  //   data.append('description', description);
  //   data.append('price', price);
  //   axios.post('/api/products', data)
  //     .then( res => {
  //       this.props.addProduct(res.data)
  //       this.setState({ name: '', department: '', description: '', price: '' })
  //     })

  // }

  handleSubmit (e) {
    e.preventDefault()
    const { name, department, description, price } = this.state;

    axios.post('/api/products', {product: { name, department, description, price } })
    .then(res => {
      const { data, headers } = res;
      this.props.dispatch(setFlash('Product has been added.', 'green'))
      this.props.dispatch(setHeaders(headers));
    })
    
  }

  render() {
    const { name, department, description, price } = this.state;
    return(
      <Modal style={styles.modal} trigger={<Button basic>Add Product</Button>}>
        <Modal.Header>
          Add Product
        </Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Name</label>
              <input 
                value={name} 
                id='name' 
                onChange={this.handleChange} 
                placeholder='Name'
                autoFocus
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Department</label>
              <input 
                value={department}
                id='department'
                onChange={this.handleChange}
                placeholder='Department'
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input 
                value={description} 
                id='description' 
                onChange={this.handleChange} 
                placeholder='Description'
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input 
                value={price} 
                id='price' 
                onChange={this.handleChange} 
                placeholder='Price'
                required
              />
            </Form.Field>
            <Button basic handleSubmit>
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const styles = {
  modal: {
    width: '500px',
    justifyContent: 'center',
  },
}

export default AddProduct;