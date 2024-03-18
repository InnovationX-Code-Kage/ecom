import React from 'react'
import oreo from './brand/oreo.png';
import cadbury from './brand/cadbury.png';
import nestle from './brand/nestle.png';
import parle from './brand/parle.webp';
import kelloggs from './brand/kelloggs.png';
import sb from './brand/sb.png';

const BrandBody = () => {
  return (
    <div className='brandbody'>
        <div className='brands'>
            <img src={cadbury} alt="" width='100px' height='80px' />
            <img src={nestle} alt="" width='200px' height='100px' />
            <img src={parle} alt="" width='120px' height='70px' />
            <img src={oreo} alt="" width='60px' height='60px' />
            <img src={kelloggs} alt="" width='150px' height='80px' />
            <img src={sb} alt="" width='150px' height='150px' />
        </div>
        <br/>
        <br/>
        <span className="brand_text" >
            The world's best product teams trust VARIETY to deliver an unrivaled experience for both developers and users.
        </span>
    </div>
  )
}

export default BrandBody