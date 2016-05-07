var React = require('react');
var ReactPropTypes = React.PropTypes;
var UserActions = require('../actions/UserActions');
var UserStore = require('../stores/UserStore');

var Register = React.createClass({

  getInitialState: function() {
    return {name: '', email: '', passwd: '', confm_passwd: ''};
  },
  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange2);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange2);
  },

  render: function() {
    return (
      <div>
        <h4>Register Account</h4>
        <form>
          <div>
            <input id="name" type="text" value={this.state.name} onChange={this._onChange}/>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input id="email" type="text" value={this.state.email} onChange={this._onChange}/>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input id="passwd" type="password" value={this.state.passwd} onChange={this._onChange}/>
            <label htmlFor="passwd">Password</label>
          </div>
          <div>
            <input id="confm_passwd" type="password" value={this.state.confm_passwd} onChange={this._onChange}/>
            <label htmlFor="confm_passwd">Confirm Password</label>
          </div>
          <div>
            <button id="register" type="button" onClick={this._onSubmit}>Register</button>
          </div>
        </form>
      </div>
    );
  },

  _onChange: function(event, value, id) {
    if(event.target.id=="name")
      this.setState({name: event.target.value});
    else if(event.target.id=="email")
      this.setState({email: event.target.value});
    else if(event.target.id=="passwd")
      this.setState({passwd: event.target.value});
    else if(event.target.id=="confm_passwd")
      this.setState({confm_passwd: event.target.value});
  },

  _onSubmit: function(event, id) {
    event.preventDefault();
    if(event.target.id=="register") {
      if (this.state.passwd==this.state.confm_passwd && this.state.email && this.state.passwd && this.state.confm_passwd && this.state.name){ 
        UserActions.UserRegister(this.state.name, this.state.email, this.state.passwd);
      }
      else
        console.log("Registration Failed !");
    }
  },

  _onChange2: function() {
    console.log("Change Detected");
  }



});

module.exports = Register;