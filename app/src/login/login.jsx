import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../dashboard/dashboard.jsx';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorText: "",
      email: "",
      sending: false,
      password: ""
    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    if (!email || !password || this.state.sending)
      return;

    this.setState({error: false, sending: true});

    this.props.app.authenticate({
      email,
      password,
      type: "local"
    }).then(result => {
      const user = result.data;
      ReactDOM.render(<Dashboard app={app} user={user} />, this.props.host);
    }).catch(err => {
      console.error('Login error: ', err);
      this.setState({
        error: true,
        errorText: err.message,
        sending: false
      });
    });
  }

  loginButton() {
    if (this.state.sending) {
      return (
        <div className="ui right floated icon button">
          <i className="notched circle loading icon"></i>
        </div>
      )
    } else return (
      <button className="ui right floated button" type="submit">
        Log In
      </button>
    );
  }

  errorMessage() {
    return (
      <div className="ui icon error message">
        <i className="frown icon"></i>
        <div className="content">
          <div className="header">
            Oops! Something's wrong.
          </div>
          <p>{this.state.errorText}</p>
        </div>
      </div>
    );
  }

  render() {
    const errorMessage = this.state.error ? this.errorMessage() : <div />;
    const loginButton = this.loginButton();

    return (
      <div className="ui container">
        <br />
        <div className="ui header">
          <i className="user icon"></i>
          <div className="content">
            Log in
          </div>
        </div>
        {errorMessage}
        <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <div className="ui left icon input">
              <i className="envelope icon"></i>
              <input onChange={this.handleEmailChange.bind(this)} placeholder="E-mail Address"
                  type="email" value={this.state.email} />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="key icon"></i>
              <input onChange={this.handlePasswordChange.bind(this)} placeholder="Password"
                  type="password" value={this.state.password} />
            </div>
          </div>
          {loginButton}
          <a className="ui right floated primary button" href="https://shield.regiostech.com/signup">
            <i className="user add icon"></i>
            Sign up
          </a>
        </form>
      </div>
    );
  }
}
