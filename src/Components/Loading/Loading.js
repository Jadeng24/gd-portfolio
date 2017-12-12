import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
    constructor() {
        super();

        this.state = {

        }
        this.myWaitTime = this.myWaitTime.bind(this);
    }
    componentWillMount() {
        setTimeout(this.myWaitTime, 2300);
    }

    myWaitTime() {
        window.location.assign('/messagesent')
    }
    render() {
        return (
            <div className='Loading'>
                <div className='mainContentShadow'>
                    <div className='mainContent'>

                        <div className='mainContentTitle'>Loading . . .</div>
                        <div className='LoaderHolder'>
                            <div className='Loader '></div></div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Loading;