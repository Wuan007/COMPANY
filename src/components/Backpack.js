import React, { Component } from 'react'
import axios from "axios"
export default class Backpack extends Component {

    state = {
        id: this.props.match.params.id,
        backpack: {
            name: "",
            description: "",
            img: "",
            year: "",
            designer: "",
            numberInStock: ""
        }
    }

    async componentDidMount() {
        const res = await axios.get(`/api/backpack/${this.state.id}`);
        this.setState({
            backpack: res.data
        })
    }

    render() {
        const {backpack} = this.state
        return (
            <div>
                <h1>{backpack.name}</h1>
                <img width="400" src={`/img/${backpack.img}.jpeg`}  alt=""/>
                <p>{backpack.description}</p>
                <p>Designer: {backpack.designer}</p>
                <p>Year: {backpack.year}</p>
                <p>Number in Stock: {backpack.numberInStock}</p>
            </div>
        )
    }
}
