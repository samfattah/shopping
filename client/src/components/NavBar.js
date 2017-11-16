import React, { Component } from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
        <Link to='/cart'>
          <Menu.Item icon='cart' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <Container>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/shop'>
            <Menu.Item name='shop' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
