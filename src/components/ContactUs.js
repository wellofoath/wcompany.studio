import React, { Component } from 'react';
import '../WCompany.css'

class ContactUs extends Component {
    render() {
        return (
            <div className="flexbox">
                    <h2 className="contactUsH2">Contact Us</h2>
                    <div className="flexbox contactUsContainer">
                        <input className="ContactUsName" type="text" placeholder="Name"></input>
                        <input className="ContactUsEmail" type="text" placeholder="Email"></input>
                        <textarea className="ContactUsComments" placeholder="Comments"></textarea>
                        <input className="ContactUsButton" type="button" placeholder="제출" value="submit"></input>
                    </div>
            </div>
        );
    }
}

export default ContactUs;