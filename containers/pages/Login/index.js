import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../component/atoms/Button";
import { loginUserAPI } from "../../../config/redux/action";

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleLoginSubmit = async () => {
    const {email, password} = this.state;
    const res = await this.props.loginAPI({email, password}).catch(err => err);
    const {history} = this.props;
    if (res) {
      localStorage.setItem('userData', JSON.stringify(res));
      this.setState({
        email: '',
        password: ''
      })
      history.push('/home');
    } else {
      console.log('Login Failed');
    }
  }

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Login page</p>
          <input className="input" id="email" placeholder="email" type="text" onChange={this.handleChangeText} value={this.state.email} />
          <input className="input" id="password" placeholder="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
          <Button title="Login" onClick={this.handleLoginSubmit} loading={this.props.isLoading} />
        </div>
      </div>
    )
  }

}

const reduxState = (state) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);