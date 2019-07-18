import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Home extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-2">
                <img width="50%" src="/img/circle.jpg" alt=""/>
            </div>
            <div className='col-8 text-center'>
                
                <h1 class="display-5">Transit Backpack</h1>
                
                <Link to='/about'>See Backpacks</Link>
                <div className="embed-responsive embed-responsive-16by9">
                <iframe 
                    src="https://www.youtube.com/embed/Gmd2PjrMTio?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1&modestbranding=1&showinfo=0"  
                    frameBorder="0"
                    allow="autoplay"
                    title="program">
                </iframe>
                </div>


                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Link className="font-lg" to='/about' > Shop Now</Link>
                <img width="400" height="auto" src="" alt="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://swissgear.imgix.net/2/7/2760200418-02.jpg?w=500&auto=format,compress" alt="" />
                </Link>
                <img width="400" height="auto" src="" alt="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://swissgear.imgix.net/2/7/2760200418-02.jpg?w=500&auto=format,compress" alt="" />
                </Link>
                <img width="400" height="auto" src="" alt="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://swissgear.imgix.net/2/7/2760200418-02.jpg?w=500&auto=format,compress" alt="" />
                </Link>
                <img width="400" height="auto" src="" alt="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://swissgear.imgix.net/2/7/2760200418-02.jpg?w=500&auto=format,compress" alt="" />
                </Link>
                <img width="400" height="auto" src="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://swissgear.imgix.net/2/7/2760200418-02.jpg?w=500&auto=format,compress" alt="" />
                </Link>
                <img width="400" height="auto" src="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://swissgear.imgix.net/2/7/2760200418-02.jpg?w=500&auto=format,compress" alt="" />
                </Link>

            </div>
            </div>
        )
    }
}









