import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import '../layout/aboutcs.css'

class About extends Component {
    render(){
    const{auth}=this.props
    console.log(auth.uid)
      if(!auth.uid) return <Redirect to="signin"></Redirect>
    return (
        <div className="bodywrap" >
            <h2>Our mission statement</h2>
    <p>To provide an immersive learning ecosystem to students, enabling them with technical and interpersonal skills required in an organistaion by collaborative approach and personalised mentorship.
<h2>Who Are We?</h2>
Athrv Edtech is an in-campus micro student start-up organisation which intends to provide a platform to college students, to work in a corporate eco-system.This organisation will enable students to get trained in trending technologies like Artifical Intelligence, Data Science, Drone Technology, Internet Of Things, Robotics, 3D Printing, Augmented Reality, etc.


</p>
    
    <center><h2>Our vision</h2>
    <p>To build a next-gen work force which is immune to the age of automation and to enhance the economy of nation with the help of technology through research and development.
</p></center>

    <h8>Blog App By</h8><br></br>
    <h8>Shashank H S</h8>
    
            
        </div>
    )}
}
const mapStatetoprops=(state)=>{
    //console.log(state)
    return{
        auth: state.firebase.auth,
       
    }
}
export default connect(mapStatetoprops)(About)
