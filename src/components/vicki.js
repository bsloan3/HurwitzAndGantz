import React, { Component } from 'react';
// this is the show on click component
export default class VickiComponent extends Component {
  render() {
    return (
        <div className="staffinfo">
            <div>
                <h1>Victoria H. Sloan</h1>
                <h2>Education:</h2>
                    <p>UNIVERSITY OF MICHIGAN - Bachelor of Arts, 1987</p>
                    <p>NEW YORK UNIVERSITY SCHOOL OF LAW - Juris Doctor, 1990</p>
                    <h2>Admitted to Practice Law</h2>
                    <p>New York - 1991</p>
                    <p>Michigan - 1997</p>
                    <h2>Areas of Practice:</h2>
                    <li>Estate Planning</li>
                    <li>Probate</li>
                    <li>Wills and Trusts</li>
                    <li>Conservatorships and Guardianships</li>
                    <h2>Noteworthy:</h2>
                    <li>Appointed as Guardian ad litem in various legal proceedings</li>
                    <li>Former Associate at New York Law Firm, Loeb & Loeb</li>
            </div>
            <div className="contactform">
                <h4>Contact Victoria</h4>
                <form action="https://formspree.io/vsloan@hkwglaw.com" method="POST">
                    <input type="text" className="formemail" name="fullname" placeholder="Full name"></input>
                    <input type="email" className="formemail" name="email" placeholder="Email"></input>
                    <input type="text" className="formemail" name="phonenumber" placeholder="Phone number"></input>
                    <textarea className="formmessage" name="message" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                    <input type="hidden" name="_next" value="//site.io/thanks.js" />
                </form>
            </div>
        </div>
        );
  }
}
