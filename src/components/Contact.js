import React, { Component } from 'react';

import '../css/Contact.css'

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      user: 'goodtherapyband',
      domain: 'gmail.com',
    }
  }

  render() {

    return (
      <div>
        <h2>Contact</h2>
        <div className="flex-container">
<<<<<<< HEAD
          <div>
            <form action="">
            
            </form>
          </div>
          <div></div>
=======
          <div className="mail-container">
            <p>{this.state.user + '@' + this.state.domain}</p>
          </div>
          <div className="socialreach-container">
            <p>Reach out to us on <a href="https://www.facebook.com/GoodTherapyband">Facebook</a>!</p>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGoodtherapyband%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=280016605231" width="340" height="214" style={{overflow:'hidden'}} frameBorder="0" allowtransparency="true" allow="encrypted-media" title="GT Facebook Plugin"></iframe>
          </div>
>>>>>>> 9445c684b37f1fb2b2669ec0709eda554f7ad0fc
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