import React, { Component } from 'react'
import {Link} from "react-router-dom"
            
export default class Merchandise extends Component {
render() {
    return (
       <div> 
    <h1>Merchandise</h1>
    <Link to='/'>Go Back Home</Link>'
 </div>
    );
  }
}