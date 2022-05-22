import React, { Component } from "react";
import './Register.scss';
import { connect } from "react-redux";
import { registerAPI } from "../../../config/redux/action";
import Button from "../../../component/atoms/Button";

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleRegisterSubmit = async () => {
    const {name, email, password, password_confirmation} = this.state;
    const res = await this.props.registerAPI({name, email, password, password_confirmation}).catch(err => err);
    if (res){
      this.setState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    }
  }

  render(){
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Page {this.props.popupProps}</p>
          <input className="input" id="name" placeholder="name" type="text" onChange={this.handleChangeText} value={this.state.name} />
          <input className="input" id="email" placeholder="email" type="text" onChange={this.handleChangeText} value={this.state.email} />
          <input className="input" id="password" placeholder="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
          <input className="input" id="password_confirmation" placeholder="password_confirmation" type="password" onChange={this.handleChangeText} value={this.state.password_confirmation} />
          <Button title="Register" onClick={this.handleRegisterSubmit} loading={this.props.isLoading} />
        </div>
      </div>
    )
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);