import React from 'react';
import './navBar.css';

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    navItems: ["Home", "About"]
  }
  render(){
   const nav = this.state.navItems.map((items, i) =>{
   return <li key={i}><a href={items}>{items}</a></li>
   })
  
  return(
    <ul>
      {nav}
    </ul>
  )
  }
}
export default Navbar;
