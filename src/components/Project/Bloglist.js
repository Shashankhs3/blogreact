import React from 'react'
import Blogsummary from './Blogsummary'
import {Link} from 'react-router-dom'
import Blog from '../Home/blog.js/Blog'

function Bloglist ({blogs}){
    return (
        <div className="bloglist section">
         {blogs && blogs.map(blog=>{
             return(
                 <Link to={"/blog/"+ blog.id}>
                <Blogsummary blog={blog} key={blog.id}></Blogsummary>
                </Link>
             )
                 
             
         })}  
            
        </div>
    )
}

export default Bloglist
