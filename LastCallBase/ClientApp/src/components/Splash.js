import React, { Component } from 'react';

export class Splash extends Component {
    displayName = Splash.name

  constructor(props) {
      super(props);
      this.state = { localdata: null, loading: true, error: null };

      fetch('api/Splash/SplashService')
          .then(response => response.json())
          .then(data => {
              if (data.error.errorCode !== 0)
                  throw data.error;
              this.setState({ localdata: data.information, loading: false });
          })
          .catch((servererror) => {
              this.setState({ error: servererror, loading: false });
          });
  }

    renderData() {
        if (this.state.error !== null) {
            return <div>{this.state.error.errorMessage}</div>
        }

        // No error, display the data
        return (
          <div>
                {this.state.localdata}
          </div>
    );
  }
     
  render() {
    let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderData();

    return (
        <div>
            <h1>Last Call</h1>
            <img src={require('../cropped-last-call-logo-transparent-2.png')}  alt="logo-picture " />
            <p>WELCOME TO THE LAST CALL</p>
            <h1> Good Food, Cheap. </h1>
            <p>Treat Yourself, Your Wallet, and Your World</p>
            <h1></h1>
            <button type="button"> Sign up!</button>
            <button type="button">learn more!</button>  
            <h1></h1>
<li id="menu-item-368" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-368"><a title="Become a Partner" href="https://lastcallforfood.com/become-a-partner/">Become a Partner</a></li>
<li id="menu-item-381" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-381"><a title="Food" href="https://lastcallforfood.com/restaurants/">Food</a></li>
<li id="menu-item-369" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-369"><a title="Blog" href="https://lastcallforfood.com/blog/">Blog</a></li>
<li id="menu-item-370" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-370"><a title="Contact Us" href="https://lastcallforfood.com/contact/">Contact Us</a></li>
            {contents}
        </div>
    );
  }

}

