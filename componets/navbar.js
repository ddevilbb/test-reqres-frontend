import React from 'react'
import {Collapse, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark light expand="md">
          <NavbarBrand href="/">Test-reqres-frontend</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar></Collapse>
        </Navbar>
      </div>
    )
  }
}
