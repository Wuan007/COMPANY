import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Home extends Component {
    render() {
        return (
            <div className='container text-center'>
                <h1 >TRANSIT BACKPACK</h1>
                <h2>Transit Backpack is ready for your fast life
                </h2>
                <Link to='/about'>Go To About Page</Link>
                <div class="bd-example">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="c-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
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
        )
    }
}









