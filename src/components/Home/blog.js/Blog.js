import React, { Component } from 'react'
import Notification from './Notification'
import Bloglist from '../../Project/Bloglist'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'





 class Blog extends Component {
    render() {
        const { blogs, auth,notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
        
        console.log(this.props)
        
        return (
            <div className="home container">
                <div className="row">
                    <div className="col s12 m6">
                    <Bloglist blogs={blogs}  ></Bloglist>
                   </div>
                    <div className="col s12 m5 offset-m1">
                    <Notification notifications={notifications}></Notification>
                    </div>
                     </div>
                     
            </div>
        )
    }
}
const mapStatetoprops=(state)=>{
    //console.log(state)
    return{
        blogs:state.firestore.ordered.blogs,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStatetoprops),
    firestoreConnect([
        {collection:'blogs',orderBy:["created","desc"]},
    {collection:'notifications' ,limit:8, orderBy:["time","desc"]}]),
)(Blog)
