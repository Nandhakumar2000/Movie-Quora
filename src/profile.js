import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import './profile.css';
class Profile extends Component{
   constructor()  {
        super();
        this.state={
            
        }
   }
   render(){
       return(
        <div id="fullbody" onLoad={this.auth} style={{backgroundColor:"#fff"}}>
        <div class="topnav">
<div id="innerNav">
<img src="http://qsfs.fs.quoracdn.net/-3-images.logo.wordmark_default.svg-26-bfa6b94bc0d6af2e.svg"/>
<a class="active" href="#"><i class="fa fa-newspaper-o" aria-hidden="true"></i>&nbsp;Home</a>&nbsp;
<a href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;Answer</a>
<a href="#"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;Spaces</a>
<a href="#"><i class="fa fa-bell" aria-hidden="true"></i>&nbsp;Notification</a>
<div class="search-container">
<form action="/action_page.php">
<input type="text" placeholder="&#xF002; Search Quora.." name="search" />
</form>
</div>
<a href="#"><Link to="/Profile" id="out"><i class="fa fa-globe" aria-hidden="true" onClick={this.dispProfile}></i></Link></a>
<button class="add_Button" onClick={this.dispAddQuestion}>Add Question </button>
<Link to="/" id="out">h</Link>
</div>
</div>

<div style={{height: '50px',backgroundColor:'#e6e6e6', textAlign:'center', padding:'15px', color:'#999999', fontSize:'15px'}}>
Quora uses cookies to improve your experience. Read More
</div>

<div style={{backgroundColor: "#fff",  padding: '0px', margin: '6%', marginTop: '5%'}}>
<div class="profile_row">
  <div class="profile_column">
  <div class="icon_row">
  <div class="icon_column"style={{textAlign: "right"}} >
  <img class="q-image qu-display--block" src="https://qsfs.fs.quoracdn.net/-3-images.new_grid.profile_default.png-26-7c13a5749b21f349.png" style={{box: 'border-box', direction: 'ltr',  width: '120px', height: '120px', borderRadius:'50%'}}/>
  </div>
  <div class="icon_column" >
  <p style={{textAlign: "left", fontSize:"25px",marginBottom:'0px'}}>Nandha V</p>
  <p style={{color:'grey',fontSize:'13px',margin:'0px'}}>Add profile credential</p>
  </div>
</div>
<div style={{marginLeft: '25%'}} >
<p style={{margin:'0px', fontSize:'15px',color:'grey'}}>Write a description about yourself</p>
<p style={{margin:'0px', fontSize:'15px',color:'grey'}}>0 Followers</p>
<hr/>
</div>

<div class="tabbed-area">

	<ul class="tabs group">
	    <li><a href="#box-one">Profile</a></li>
	    <li><a href="#box-two">Answers</a></li>
      <li><a href="#box-three">Questions</a></li>
      <li><a href="#box-four">Shares</a></li>
      <li><a href="#box-five">Posts</a></li>
      <li><a href="#box-six">Followers</a></li>
      <li><a href="#box-seven">Following</a></li>
	</ul>
	
	<div class="box-wrap">
	
		<div id="box-one">
      1
		</div>
		
		<div id="box-two">
      2
		</div>
    <div id="box-three">
      3
		</div>
    <div id="box-four">
      4
		</div>	
		<div id="box-five">
      5
		</div>
    <div id="box-six">
      6
		</div>
    <div id="box-seven">
      7
		</div>
	
	</div>

</div>




  </div>




  <div class="profile_column" >
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>


</div>

</div>
</div>


       )
   }
}
export default Profile;