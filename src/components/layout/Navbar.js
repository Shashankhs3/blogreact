import React from 'react'
import {Link} from 'react-router-dom'
import Sighnedin from './Sighnedin'
import Signedout from './Signedout'
import {connect} from 'react-redux'



const Navbar=(props)=> {
    const { auth,profile } = props;
    // console.log(auth);
    const links = auth.uid ? <Sighnedin profile={profile} /> : <Signedout />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to="/" className="brand-logo left">Blog</Link>
            {auth.isLoaded && links}
           
            </div>
        </nav>
        
    )
}

const mapstateToprops=(state)=>{

    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}


export default connect(mapstateToprops)(Navbar)
