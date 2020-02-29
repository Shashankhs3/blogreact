import React from 'react'
import moment from 'moment'

function Blogsummary({blog}) {
    return (
        <div className="card z-depth-0 blog-summary">
        <div className="card-content grey-rtext text-darken-3">
                    <span className="card-title">{blog.title}</span>
                    <p>Posted by {blog.authorFirstname} {blog.authorLastname}</p>
                    <p className="grey-text">{moment(blog.created.toDate().toString()).calendar()}</p>
                </div>
                </div>
            
    )
}

export default Blogsummary
