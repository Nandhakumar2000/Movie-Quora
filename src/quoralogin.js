import React, { Component } from 'react';
import './quoralogin.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
class Quora extends Component{
    constructor(){
        super();
        this.state = {
        email: '',
        password: '',
        error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    async handleSubmit(evt) {

      evt.preventDefault();
      if (!this.state.email) {
        window.alert("email is required");
        return this.setState({ error: 'email is required' });
      }
  
      if (!this.state.password) {
        window.alert('Password is required');
        return this.setState({ error: 'Password is required' });
      }
  
      const response = await fetch('http://localhost:8000/LogIn?email='+this.state.email+'&password='+this.state.password,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }) .then(response => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        if(jsonData['Status']== 'OK'){
          localStorage.setItem('ID', jsonData['ID']);
          localStorage.setItem("EMail",this.state.email);
          localStorage.setItem("AuthKey",jsonData['AuthKey']);
          document.getElementById("bu").click();
        } else if (jsonData['Status'] == 'Invalid'){
             window.alert("Invalid Details");
        } else{
          window.alert("Account Didn't Exists");
        }
      })

    }

    handleEmailChange(evt) {
      this.setState({
        email: evt.target.value,
      });
    };
  
    handlePassChange(evt) {
      this.setState({
        password: evt.target.value,
      });
    }
    render(){
        return(
           <div>
                <center>
        <div id="centered_box">
          <div id="innerBox">
        <div class="NetworkLogo">
          </div>
          <div class="TagLine">
            A place to share knowledge and better understand the world
            </div>

            
<div id="input-form">
            <div class="row">
  <div class="column" id="left-Column">
    <div >
  <ExternalLogin/> 
  </div>
  </div>
  <div class="column" id="right-Column">
    <form onSubmit={this.handleSubmit} >
      <div class="login-title">Login</div>
        <div>
       <input type="text" name="email" placeholder="Email"  value={this.state.email} onChange={this.handleEmailChange} />
       </div>
       <div id="password-input">
       <input type="password" name="password" placeholder="Password"  value={this.state.password} onChange={this.handlePassChange}/>
       </div>
     

      <div class="row">
      <div class="column" >   <a class="forget-password">Forget password</a> </div>
      
      <div class="column"><input type="submit" name="login" value="Login" /></div>
      </div>
      </form>
  </div>
</div>
</div>

<div class="language-links">
<center>
  <p>தமிழ்<i class="arrow right"></i>&nbsp;&nbsp; &nbsp;&nbsp;हिन्दी<i class="arrow right"></i></p>
</center>
</div>

<div class="footer-nav">
<ul class="nav_list">
  <li class="about"><a href="/about">About</a></li>
  <li class="languages"><a href="/about/languages">Languages</a></li>
  <li class="careers"><a href="/careers">Careers</a></li>
  <li class="business"><a href="/business">Businesses</a></li>
  <li class="privacy"><a href="/about/privacy">Privacy</a></li>
  <li class="tos"><a href="/about/tos">Terms</a></li>
  <li class="impressum"><a href="/impressum">Impressum</a></li>
  <li class="feedback"><a href="/contact">Contact</a></li>
</ul>
<p class="copyright">© Quora Inc. 2020</p>
<Link to="/home" id="bu">he</Link>
</div>
          </div>
          </div>
        </center>
           </div>

        );
    }
}

class ExternalLogin extends React.Component{
    constructor(){
        super();
        this.state = {
          displaySignUp: false,
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlesignupLink = this.handlesignupLink.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handlefistNameChange = this.handlefistNameChange.bind(this);
        this.handlelastNameChange = this.handlelastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handlesignupLink(evt){
      this.setState({
        displaySignUp: true,
      })
    }

    handleEmailChange(evt) {
      this.setState({
        email: evt.target.value,
      });
    };
  
    handlePassChange(evt) {
      this.setState({
        password: evt.target.value,
      });
    }

    handlefistNameChange(evt){
      this.setState({
         firstName: evt.target.value,
      });
    }

    handlelastNameChange(evt){
      this.setState({
        lastName: evt.target.value,
      });
    }

    async handleSubmit(evt) {

      evt.preventDefault();
      if (!this.state.email) {
        window.alert("email is required");
        return this.setState({ error: 'email is required' });
      }
  
      if (!this.state.password) {
        window.alert('Password is required');
        return this.setState({ error: 'Password is required' });
      }
  
      if(!this.state.firstName){
        window.alert('FirstName is required');
        return this.setState({ error: 'First Name is required' });
      }
      if(!this.state.lastName){
        window.alert('LastName is required');
        return this.setState({ error: 'Last Name is required' });
      }
        console.log("Ok")
        const response = await fetch('http://localhost:8000/SignUp?email='+this.state.email+'&password='+this.state.password+'&firstName='+this.state.firstName+'&lastName='+this.state.lastName,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }) .then(response => response.json())
        .then((jsonData) => {
          console.log(jsonData);
          if(jsonData['Status'] == 'Account Exists'){
            window.alert("Email Already registered! Please Login");
          }
          else{
          sessionStorage.setItem("type","askInterests");
          localStorage.setItem('ID', jsonData['ID']);
          localStorage.setItem("EMail",this.state.email);
          localStorage.setItem("AuthKey",jsonData['AuthKey']);
          console.log(jsonData['Status']);
          document.getElementById("bu").click();
          }
        })
      //  const data = await response.json();
       // document.getElementById("bu").click();
    }

    render(){
        return(

            <div>
              <div style={{display: this.state.displaySignUp? 'none' : 'block'}}>
              <div class="google-btn">
  <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="google-btn-text"><b>Continue with Google</b></p>
</div>
<br/>
<div class="fb-btn">
  <div class="fb-icon-wrapper">
  <img class="fb-icon" src="https://cdn.worldvectorlogo.com/logos/facebook-2.svg
"/>
  </div>
  <p class="btn-text"><b>Continue with Facebook</b></p>
</div>

<p id="desp">
<a class="tos_link" href="#" onClick={this.handlesignupLink} >Sign Up With Email. </a>
<span class="disclaimer">By signing up you indicate that you have read and agree to Quora's 
<a class="tos_link" href="" > Terms of Service </a> 
and <a class="tos_link" href="" >Privacy Policy</a>.
</span>
</p>
</div>

<div style={{display: this.state.displaySignUp? 'block' : 'none'}} >
<form   style={{margin: 10}} onSubmit={this.handleSubmit}>
      <div class="login-title">SignUp</div>

<table>
   <tr>
      <td><div><label for="First_Name" style={{color: '#737373'}}>FIRST  NAME</label>
<input name="first_name" id="First_Name" value={this.state.firstName} onChange={this.handlefistNameChange} type="text" /></div></td>
      <td><div><label for="Name" style={{color: '#737373'}}>LAST NAME</label>
<input name="last_name" id="Last_Name" type="text" value={this.state.handlelastNameChange} onChange={this.handlelastNameChange}/> </div></td>
   </tr>
</table>


      <div>
      <label for="email" style={{color: '#737373'}}>EMAIL</label>
       <input type="text" name="email"  value={this.state.email} onChange={this.handleEmailChange} />
       </div>
       <div id="password-input">
       <label for="password" style={{color: '#737373'}}>PASSWORD</label>
       <input type="password" name="password"  value={this.state.password} onChange={this.handlePassChange}/>
       </div>
       
       <p id="des">
        <span class="disclaimer">By clicking "Sign Up" you indicate that you have read and agree to Quora's
        <a class="tos_link" href="" > Terms of Service </a> 
         and <a class="tos_link" href="" >Privacy Policy</a>.
        </span>
       </p>

      <div class="row">  
      <div class="column"><a href=""> .</a></div>    
      <div class="column"><a href="">cancel</a><input type="submit" name="signup" value="Sign Up" /></div>
      </div>
      </form>
</div>
            </div>
        );
    }
}
export default Quora;