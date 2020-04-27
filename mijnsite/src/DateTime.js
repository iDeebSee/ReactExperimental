import React from 'react';
import './navBar.css';

class DateTime extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        date: new Date()
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }

    render(){
        return(
        <div>
            <h6>{this.state.date.toLocaleString()}</h6>
        </div>
        )
    }
}
export default DateTime;