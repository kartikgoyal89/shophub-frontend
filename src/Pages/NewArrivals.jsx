import React from 'react'
import CustomCarousel from '../Components/Homepage/Carousel';
import products from '../Components/Assets/products';
import ProductListing from '../Components/Homepage/ProductListing';
import downloadApp from '../Components/Assets/downloadApp_banner.jpg'

const NewArrivals = () => {
    const newArrivalsProducts = products.newArrivals;

    return (
        <>
            <CustomCarousel images={newArrivalsProducts} />
            <div className="w-full">
                <div className="bg-slate-800 min-h-screen py10">
                    <ProductListing category="new arrivals"/>
                </div>
                <div className='p-10 w-full'>
                    <img className='m-auto w-4/5 h-96 rounded-2xl object-cover'src={downloadApp}/>
                </div>
            </div>
        </>
    );
}

export default NewArrivals