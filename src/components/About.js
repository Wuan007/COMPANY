import React, { Component } from 'react'
import { Link } from "react-router-dom"
import gallery1 from "../img/gallery1.jpeg"
import gallery2 from "../img/gallery2.jpeg"
import gallery3 from "../img/gallery3.jpeg"
import gallery4 from "../img/gallery4.jpeg"

export default class About extends Component {
   render() {
      return (
         <div>
            <h1> Backpack</h1>
            <Link to='/'>Go Back Home</Link>'
            <div className="row">
               <div className="col-2">
                  <img className="img-fluid" src={gallery1} alt=""/>
                  <img className="img-fluid" src={gallery2} alt=""/>
                  <img className="img-fluid" src={gallery3} alt=""/>
                  <img className="img-fluid" src={gallery4} alt=""/>
               </div>
               <div className="col-10"></div>
            </div>
         </div>
      );
   }
}


