import React from 'react'
import {NavLink} from 'react-router-dom'
function Signedout() {
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/signup">Sign Up</NavLink></li>
                <li><NavLink to="/signin">Log in</NavLink></li>

            </ul>
            
        </div>
    )
}

export default Signedout
