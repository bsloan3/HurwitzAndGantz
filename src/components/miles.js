import React, { Component } from 'react';
import { Popover, ButtonToolbar, OverlayTrigger, Button } from 'react-bootstrap';

export default class MilesComponent extends Component {
  render() {
    return (
        <div className="staffinfo">
            <div>
                <h1>Miles A. Hurwitz</h1>
                <h2>Education:</h2>
                <p>WAYNE STATE UNIVERSITY LAW SCHOOL, Juris Doctor, 1960</p>
                <h2>Admitted to Practice Law:</h2>
                <p>Michigan - 1961</p>
                <h2>Professional Associations:</h2>
                <li>Michigan Association for Justice</li>
                <li>Fellow of the Michigan State Bar Foundation</li>
                <li>Michigan Association for Justice</li>
                <h2>Professional Activities (Partial List):</h2>
                <li>Member of Attorney Discipline Board (Appointed by Michigan Supreme Court) 1991-1997; Chairperson 1995 to 1997</li>
                <li>Appointed as a Master and Hearing Panelist for Attorney Discipline Board since 1997</li>
                <li>Council Member - Negligence Section of State Bar of Michigan, 1983 - 1986</li>
                <li>Member of State Bar of Michigan, Grievance Committee, 1989 - 1991</li>
                <h2>Speaking Engagements & Publications:</h2>
                <li>Participated in research and drafting of Michigan Rules of Professional Conduct, 1988</li>
                <li>"Ethical Problems & Practical Solutions", Labor & Employment Seminar -1998; "Ethical Considerations in the Negotiation Process", Mandatory Continuing Education Program - 1991</li>
                <li>Expert Witness - Attorney Professional Responsibility and Ethics</li>
                <li>Case Evaluator for Mediation Tribunal Association (Wayne County Circuit Court) and Oakland County Circuit Court</li>
            </div>
            <div className="contactform">
                <h4>Contact Miles</h4>
                <form action="https://formspree.io/mhurwitz@hkwglaw.com" method="POST">
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