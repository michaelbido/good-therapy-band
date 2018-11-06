import React, { Component } from 'react';
import axios from 'axios';

import '../css/Contact.css'

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      user: 'goodtherapyband',
      domain: 'gmail.com',
      remainingChar: 260,
      whoisthis: '',
      email: '',
      message: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/user', {
      name: this.state.whoisthis,
      email: this.state.email,
      message: this.state.message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleInputChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;
    if (name === 'message') {
      var longtext = document.getElementById('msg');
      this.setState({remainingChar: (260 - longtext.value.length)});
    }
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="flex-container">
          <div className="mail-container">
            <form className="contact-form-container">
              <h3>Name</h3>
              <input type="text" name="whoisthis" maxLength="40" value={this.state.whoisthis} onChange={(e) => this.handleInputChange(e)}></input>
              <h3>E-mail</h3>
              <input type="text" name="email" maxLength="40" value={this.state.email} onChange={(e) => this.handleInputChange(e)}></input>
              <h3>Message</h3>
              <textarea id="msg" name="message" resize="none" maxLength="260" onChange={(e) => this.handleInputChange(e)}></textarea>
              <p>Characters remaining: {this.state.remainingChar}</p>
              <input type="submit" className="submit-button" onClick={(e) => this.handleSubmit(e)}/>
            </form>
          </div>
          <div className="social-reach-container">
            <h3>Reach out to us on <a href="https://www.facebook.com/GoodTherapyband">Facebook</a>!</h3>
            <iframe title="Facebook Contact" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgoodtherapyband%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=266877780635149" width="100%" height="500" style={{border:'none',overflow:'hidden', maxWidth: '340px'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>          </div>
        </div>
      </div>
    )
  }
}

export default Contact;

// <form>
/* <div className="g-recaptcha" data-sitekey="6LcahHYUAAAAACfdXOolktkwN9T6Vy115PfPsZD5"></div>
<input type="submit" value="Submit"/>
</form> */