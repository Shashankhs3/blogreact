import React, { Profiler } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/reducer/actions/authAction'

function Sighnedin(props) {
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/create">Create Blog</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><a onClick={props.signOut}>Log out</a></li>
                <NavLink to="/" className="btn btn-floating  pink lighten-1">{props.profile.initials}</NavLink>
                
            </ul>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps) (Sighnedin)
