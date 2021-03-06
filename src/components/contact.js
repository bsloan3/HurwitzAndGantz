import React, { Component } from 'react';

export default class ContactComponent extends Component {

  render() {
    return (
      <div>
        <div className="contacthead">
          <h1>Contact Hurwitz & Gantz, P.C.</h1>
          <h1><a href="tel:313-278-7030">313-278-7030</a></h1>
          <h3>We welcome inquiries from potential clients and referring attorneys.  To schedule a consultation, please CONTACT us.</h3>
          <h3>For email inquiries, please include</h3>
          <ul>
            <li><h4>Your name</h4></li>
            <li><h4>Your email</h4></li>
            <li><h4>Your phone number</h4></li>
            <li><h4>Your reason for contacting us</h4></li>
          </ul>
        </div>
        <div className="contactform">
                <form action="https://formspree.io/vsloan@hkwglaw.com" method="POST">
                    <input type="text" className="formemail" name="fullname" placeholder="Full name"></input>
                    <input type="email" className="formemail" name="email" placeholder="Email"></input>
                    <input type="text" className="formemail" name="phonenumber" placeholder="Phone number"></input>
                    <textarea className="formmessage" name="message" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                    <input type="hidden" name="_next" value="/" />
                </form>
        </div>
      </div>
    );
  }
}
