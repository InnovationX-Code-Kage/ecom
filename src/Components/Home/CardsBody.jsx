import React from 'react'
import cannedSoups from './canned-food.png';
import packagedPasta from './pasta.png';
import rice from './rice.png';
import driedBeans from './dry.png';
import breakfastCereals from './cereals.png';
import packagedNuts from './nut.png';
import boxedCakeMix from './diy.png';
import packagedCookiesOrCrackers from './cookies.png';
import { Link } from 'react-router-dom';







const CardsBody = () => {


    const card1=[{
      img: cannedSoups,
      span_head: 'Canned Soups',
      Link: "/Kitchen"
    },
    {
      img: packagedPasta,
      span_head: 'Packed Pasta',
    },
    {
      img: rice,
      span_head: 'Rice',
    },
    {
      img: driedBeans,
      span_head: 'Dried Beans',
    },]

    const card2=[{
      img: breakfastCereals,
      span_head: 'Breakfast Cereals',
    },
    {
      img: packagedNuts,
      span_head: 'Packed Nuts',
    },
    {
      img: boxedCakeMix,
      span_head: 'Boxed Cake Mix',
    },
    {
      img: packagedCookiesOrCrackers,
      span_head: 'Cookies',
    },]
    
    
  return (
    <div className='cardsbody'>
        <div className='main_card'>

          {card1.map((item)=>{
            return(
              <Link to={item.Link } className='divert'><div className='cards'>
            <img src={item.img} alt="" className='card-img'/>
            <span className='card-head-span'> {item.span_head}</span>
            <span className='card-body-span'>{item.span_body}</span>
           
          </div> </Link>)
          })}

        </div>
        <div className='main_card'>

          {card2.map((item)=>{
            return(<div className='cards'>
            <img src={item.img} alt="" className='card-img'/>
            <span className='card-head-span'> {item.span_head}</span>
            <span className='card-body-span'>{item.span_body}</span>
          </div>
          )
          })}
             
        </div>
    </div>
  )
}

export default CardsBody