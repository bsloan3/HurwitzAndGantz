import React, { Component } from 'react';

export default class MarkComponent extends Component {
  render() {
    return (
        <div className="staffinfo">
            <div>
                <h1>Mark L. Gantz</h1>
                <h2>Areas of Practice:</h2>
                <li>Probate and Estate Planning</li>
                <li>Wills, Trusts and Ladybird Deeds</li>
                <li>Divorce, Prenuptial Agreements</li>
                <li>Real Estate</li>
                <li>Purchase and Sale of Business</li>
                <h2>Education:</h2>
                <p>WAYNE STATE UNIVERSITY LAW SCHOOL, Juris Doctor, 1971</p>
                <p>WAYNE STATE UNIVERSITY, Bachelor of Arts, 1968</p>
                <h2>Admitted to Practice Law:</h2>
                <p>Michigan - 1971</p>
                <h2>Adjunct Professor:</h2>
                <li>OAKLAND UNIVERSITY, Rochester, Michigan - 1975 to present</li>
                <li>HENRY FORD COMMUNITY COLLEGE, Dearborn, Michigan - 1977-1997</li>
                <h2>Investigator, Arbitrator:</h2>
                <li>MICHIGAN ATTORNEY GRIEVANCE COMMISSION</li>
                <li>AMERICAN ARBITRATION ASSOCIATION - PANEL OF ARBITRATORS</li><br/>
                <p>Rated "Superb 10 out of 10" by Avvo.com, and "AV" (Highest Rating) by Martindale Hubbell Law Directory; "Super Lawyers Magazine"; 2011 - 2016 List of Top Lawyers in Michigan; "2012 New York Times" List of Top Attorneys in Michigan; "Hour Detroit" 2011 List of Wealth Managers Who Scored Highest in Overall Satisfaction; "dbusiness" Magazine 2009 List of "Top Lawyers"</p>
            </div>
            <div className="contactform">
                <h4>Contact Mark</h4>
                <form action="https://formspree.io/mgantz@hkwglaw.com" method="POST">
                    <input type="text" className="formemail" name="fullname" placeholder="Full name"></input>
                    <input type="email" className="formemail" name="email" placeholder="Email"></input>
                    <input type="text" className="formemail" name="phonenumber" placeholder="Phone number"></input>
                    <textarea className="formmessage" name="message" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                    <input type="hidden" name="_next" value="//site.io/thanks.html" />
                </form>
            </div>
        </div>
        );
  }
}
