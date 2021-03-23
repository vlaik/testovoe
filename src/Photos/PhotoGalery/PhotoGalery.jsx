import React from 'react';
import './galerystyle.scss';
import Scroll1 from '../../image/scroll1.jpg'
import Scroll2 from '../../image/scroll2.jpg'
import Scroll3 from '../../image/scroll3.jpg'
import Scroll4 from '../../image/scroll4.jpg'
import Scroll5 from '../../image/scroll5.jpg'

function PhotoGalery() {
    return (
        <div className='photo-galery'>
            <h1>OUR PHOTOS</h1>
            <div className='galery'>
                <div className='galery-info'><img src={Scroll1} alt="" />
                    
                </div>
                <div className='galery-info'><img src={Scroll2} alt="" /></div>
                <div className='galery-info'><img src={Scroll3} alt="" /></div>
                <div className='galery-info'><img src={Scroll4} alt="" /></div>
                <div className='galery-info'><img src={Scroll5} alt="" /></div>
            </div>
        </div>
    )
}


export default PhotoGalery;