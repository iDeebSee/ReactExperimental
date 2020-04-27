import React from 'react';
import './navBar.css';
import Button from '@material-ui/core/Button';

class Navbar extends React.Component {
  state = {
    navItems: ["Home", "About", "Gallery", "Contact"]
  }
  render(){
   const nav = this.state.navItems.map((items, i) =>{
   return <li key={i}><Button href={items}>{items}</Button></li>
   })
  
  return(
    <nav>
      <ul>
        {nav}
      </ul>
    </nav>
  )
  }
}
export default Navbar;
