import React, { Component } from 'react';
import './Contact.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import axios from 'axios';
import codingVideo from './For_Wes.mp4';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            submitSuccess: false
        }
        this.sendEmail = this.sendEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.resetState = this.resetState.bind(this);
    }
    handleChange(prop, val) {
        this.setState({
            [prop]: val
        }, () => console.log('state', this.state))
    }

    sendEmail() {
        if (this.state.name && this.state.email && this.state.message) {
            this.setState({
                submitSuccess: true
            })

            axios.post('/api/send_email', this.state) // I put all the information from the input fields on state. I am sending it all so I can use it off the req.body when sending the email in the controller.
            // this.resetState();
            setTimeout(window.location.assign('/loading'), 1000);
        }

        else {
            if (!this.state.name) {
                alert('Please Enter Name'
                )
            }
            else if (!this.state.email) {
                alert('Please enter your email')
            }
            else if (!this.state.message) {
                alert('You must send a brief message in the message field');

            } else {
                alert('please complete All fields');
            }

        }
    }
    // resetState() {
    //     this.setState({
    //         name: '',
    //         email: '',
    //         subject: '',
    //         message: '',
    //     })
    // }

    render() {
        return (
            <div className='ContactHolder '>

                <Nav />
                <div className='mainContentShadow'>
                    <div className='Contact mainContent'>

                        <div className='mainContentTitle'><h1>Contact Me</h1></div>
                        <div className='mainContentP contactForm'>
                            <h4>I'm Available for hire. I do freelance work. <br/>Have any questions? Please, don't hesitate to contact. </h4>
                            <form>


                                <h3 >Name</h3><input type='text' maxLength='30' onChange={(e) => this.handleChange('name', e.target.value)} />

                                <h3 >Email</h3><input type='text' maxLength='30' onChange={(e) => this.handleChange('email', e.target.value)} />
                                <h3>Subject</h3><input type='text' maxLength='40' onChange={(e) => this.handleChange('subject', e.target.value)} />
                                <h3>Message</h3><textarea type='text' rows='5' cols='10' placeholder='Send me a message' maxLength='300' onChange={(e) => this.handleChange('message', e.target.value)}></textarea>
                            </form>
                            <button className='sendMessageBtn' onClick={this.sendEmail}><h3>Send</h3></button>
                        </div>
                        <div className='backgroundVideo'>
                            <video loop autoPlay><source src={codingVideo} type="video/mp4" />
                            </video>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Contact;