import React, { Component } from 'react'
import { Link } from "react-router-dom"
import gallery1 from "../img/gallery1.jpeg"
import gallery2 from "../img/gallery2.jpeg"
import gallery3 from "../img/gallery3.jpeg"
import gallery4 from "../img/gallery4.jpeg"

export default class Backpack extends Component {
   render() {
      
      return (
         <div>
          
            <Link to='/'>Backpack</Link>'
            <div className="row">
            <div className="col-2">
                  <img className="img-fluid" src={gallery1} alt=""/>
                  <img className="img-fluid" src={gallery2} alt=""/>
                  <img className="img-fluid" src={gallery3} alt=""/>
                  <img className="img-fluid" src={gallery4} alt=""/>
               </div>
               <div className="col-10">
                  <div className="text-center font-lg">
                     <p class="font-weight-bold">Welcome to the best Backpack World.</p>
                     <p class="font-weight-bolder">You world will be more defined because you have more time.</p>
                     <p class="font-weight-normal">TransitBack is here to make your life easier.</p>
                     <p class="font-weight-light">Make it to the gym on time.</p>
                     <p class="font-weight-lighter">Your backpack is pre-packaged and ready!</p>
                     <p class="font-weight-normal">About Us</p>
                     <p class="font-weight-lighter">We are just an average group of people.</p>
                     <p class="font-weight-lighter">We saw the need and we took a risk to make it happen.</p>
                     <p class="font-weight-lighter">Everything you need for your workout is here.</p>
                     <p class="font-weight-lighter">Never leave home without TransitBackPack.</p>
                     <Link to="/Backpacks" ></Link>
                     <Link to="/backpacks">
                     <img width="900" className="img-fluid" src={gallery1} alt=""/>
                        <img width="400" height="auto" src="https://swissgear.imgix.net/2/7/2760200418-02.jpg?w=500&auto=format,compress" alt="" />
                       </Link>
                       <p class="font-weight-lighter">The Concorde Backpack make it easy to be ready to start your day.</p>
                     <p class="font-weight-lighter">There is northing like being ready, so be ready when it counts.</p>
                     <p class="font-weight-lighter">Everybody knows life can be fast and challenging.</p>
                     <p class="font-weight-lighter">If you have TransitBack you will be ready.</p>
                       <img width="900" className="img-fluid" src={gallery4} alt=""/>
                        <img width="500" height="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHg601MJNdiRRIiHwTZGqmChImmfsB1-XegE__jeAmxKXpSkL" />
                     
                  </div>
               </div>
            </div>
         </div>
      );
   }
}



