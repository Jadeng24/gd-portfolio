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
        window.location.assign('http://localhost:3000/messagesent')
    }
    render(){
        return (
            <div className='Changepage'>
                
            </div>
        )
    }
}
export default Changepage;