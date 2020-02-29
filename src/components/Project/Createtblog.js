import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/reducer/actions/projectactions'
import {Redirect} from 'react-router-dom'
class Createblog extends Component {
    state={
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
        this.props.history.push('/')
      }
    render() {
      const{auth}=this.props
      if(!auth.uid) return <Redirect to="signin"></Redirect>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darke-3">Create new Article</h5>
                    <div className="input-field">
            <label htmlFor="Title">Title</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Blog Content</label>
            <textarea id="content" onChange={this.handleChange} id="content" className="materialize-textarea"></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
                </form>
            </div>
        )
    }
}
const mapstatetoProps=(state)=>{
  return{
    auth: state.firebase.auth
  }
}
const mapdispatchtoprops=(dispatch)=>{
    return{
        createProject:(blog)=> dispatch(createProject(blog))
}
}

export default connect(mapstatetoProps,mapdispatchtoprops)(Createblog)
