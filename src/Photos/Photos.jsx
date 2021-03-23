import React from 'react'
import './stylephoto.scss'
import Header from '../Header/header'
import HomeContent from '../Home/HomeContent/HomeContent'
import PhotoGalery from './PhotoGalery/PhotoGalery'


function Photos() {
    return (
        <div className='photo'>
            <Header />
            <HomeContent />
            <PhotoGalery />
        </div>
    )
}

export default Photos;