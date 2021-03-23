import React, { Component } from 'react';
import '../WCompany.css'

class ContactUs extends Component {
    render() {
        return (
            <div className="flexbox">
                    <h2 className="contactUsH2">Contact Us</h2>
                    <div className="flexbox contactUsInput">
                        <input className="ContactUsTitle" type="text" placeholder="Title"></input>
                        <textarea className="textarea"></textarea>
                        <input type="button" placeholder="제출" value="submit"></input>
                    </div>
            </div>
        );
    }
}

export default ContactUs;