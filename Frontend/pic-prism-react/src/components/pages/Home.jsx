/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from '../HeroSection';
import PhotoGallery from '../PhotoGallery';

function Home() {
    return (
        <>
            <div className='mt-36'>
                <HeroSection />
                <PhotoGallery />
            </div>
        </>
    )
}

export default Home;