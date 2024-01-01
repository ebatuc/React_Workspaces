import React, { Component } from 'react'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
// import BlogHome from '../components/BlogHome'

export default class Home extends Component {
    render() {
        return (
            <div className='main-content-wrapper'>
                <Slider />
                <ProductCard />
            </div>
        )
    }
}
