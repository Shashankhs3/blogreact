import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



class Loader extends Component {
    render()
    {
        const { auth } = this.props
        console.log(auth.uid)
        if (auth.uid) return <Redirect to="/" ></Redirect>
        else if(!auth.uid) return <Redirect to='/signin'></Redirect>
    return (
        <div >
            Loading....
        </div>
    )}
}

const mapStatetoprops=(state)=>{
    //console.log(state)
    return{
        
        auth: state.firebase.auth
    
    }
}
export default connect(mapStatetoprops)(Loader)
