import React, { Component } from 'react';
import './Changepage.css';
 
class Changepage extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
        this.nextPage = this.nextPage.bind(this);
    }
    componentWillMount() {
        setTimeout(this.nextPage, 1600);
    }

    nextPage() {
        // Change to localhost:3002 for develop
        window.location.assign('http://develoquent.com/messagesent')
    }
    render(){
        return (
            <div className='Changepage'>
                
            </div>
        )
    }
}
export default Changepage;