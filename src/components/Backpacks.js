import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";
import gallery1 from "../img/gallery1.jpeg"
import gallery2 from "../img/gallery2.jpeg"
import gallery3 from "../img/gallery3.jpeg"
import gallery4 from "../img/gallery4.jpeg"

export default class Backpacks extends Component {

    state = {
        backpacks: []
    }

    async componentDidMount () {
        const res = await axios.get("/api/backpack");
        this.setState({
            backpacks: res.data
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.backpacks.map(
                        (backpack) => (
                            <div key={backpack._id}>
                                <h2>{backpack.name}</h2>
                                <Link to={`/backpack/${backpack._id}`} >
                                    <img 
                                        width="400" 
                                        height="auto" 
                                        src={`/img/${backpack.img}.jpeg`} 
                                        alt="" />
                                </Link>
                            </div>
                        )
                    )
                }
{/*                 
                <img width="400" height="auto" src="" alt="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://d2q227c58gv0c8.cloudfront.net/data/media/images/catalogue/m37806_11333_1.jpg?height=400&width=400&404=default.jpg" alt="" />
                </Link>
                <img width="400" height="auto" src="" alt="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://images-na.ssl-images-amazon.com/images/I/41MI6LS%2B2oL._AC_SY400_.jpg" alt="" />
                </Link>
                <img width="400" height="auto" src="" alt="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/tWMAAOSwi0Bcx9Yr/$_1.JPG" alt="" />
                </Link>
                <img width="400" height="auto" src="" alt="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://images.homedepot-static.com/productImages/02f6319b-b543-4b06-9479-0a63121e7942/svn/black-and-camouflage-with-a-bright-orange-interior-klein-tools-tool-bags-55421bp14camo-64_400_compressed.jpg" alt="" />
                </Link>
                <img width="400" height="auto" src="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/yHAAAOSw5eFc9I2O/$_1.JPG" alt="" />
                </Link>
                <img width="400" height="auto" src="" />
                <Link to='/about' ></Link>
                <Link to="/about">
                    <img width="400" height="auto" src="https://www.rushimprint.com/ajax_handler.php?page=get_product_image&dimension=400&pID=71602" alt="" />
                </Link> */}
            </div>
        )
    }
}
