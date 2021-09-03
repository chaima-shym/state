import './App.css';
import React, { Component } from 'react'
import Shows from './components/Shows.js';
import ProfilePicture from './ProfilePicture.jpg'

export default class App extends Component {
  state = {
   Personne: {
   fullName:"Chaima Bejaoui",
   bio :"Hi everyone",
   imgSrc:ProfilePicture,
  profession:"student"},
  shows:false,
  time:0
  
  }
componentDidMount(){
  setInterval(()=>{
this.setState({time:this.state.time+1})
  },1000)
}
  Change = () => {
    this.setState({
      shows: !this.state.shows,
      time:0
    })
  }
  
  render() {
    return (
      <div style={{display:"flex",flexDirection:"column", margin:"0px 500px", }}>
     <button className='btn' onClick={this.Change} style={{margin:"40px"}}>{this.state.shows?"Hide":"Show"}</button>
     {this.state.shows &&<Shows Personne={this.state.Personne}/>}
     <p>{this.state.shows&&this.state.time}</p>
      </div>
    )
  }
}




