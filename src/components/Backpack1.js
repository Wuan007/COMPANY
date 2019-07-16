import React, { Component } from 'react'
import { Link } from "react-router-dom"
import gallery4 from "../img/gallery4.jpeg"

export default class Backpacks extends Component {
    render() {
         return (
            <div>
         
         <Link to='/about'>about</Link>
                     <p class="font-weight-lighter">Everybody knows life can be fast and challenging.</p>
                     <p class="font-weight-lighter">If you have TransitBack you will be ready.</p>
                       <img width="900" className="img-fluid" src={gallery4} alt=""/>
                        <img width="500" height="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHg601MJNdiRRIiHwTZGqmChImmfsB1-XegE__jeAmxKXpSkL" />      
                
            </div>
        )
    }
}


