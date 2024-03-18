import React,{useState} from 'react'
import Popup from './KitchenPopup';
import { card1,card2 } from './KitchenData';







const KCardBody = () => {

  
    
    const [buttonPopup, setbuttonPopup] =useState(false);
    const [product, setproduct] = useState();
   
   

  const onclickAbout = (item) => {
    setbuttonPopup(true);
    setproduct(item);
  };
    
    
  return (
    <div className='kcardbody'>
        <div className='kmain_card'>
        <div className='Kmain_card-sub'>
          {card1.map((item)=>{
            return(
            <div className='kcards'>
            <img src={item.img} alt="" className='kcard-img'  />
            <span className='kcard-head-span'> {item.span_head}</span>
            <span className='kcard-body-span'>${item.span_body}/Each</span>
            <button className='read_more' onClick={()=>onclickAbout(item)}>Read More</button>
          </div>
          )})}
        </div>
        <div className='Kmain_card-sub'>
           {card2.map((item)=>{
            return(
            <div className='kcards'>
            <img src={item.img} alt="" className='kcard-img'/>
            <span className='kcard-head-span'> {item.span_head}</span>
            <span className='kcard-body-span'>${item.span_body}/Each</span>
            <button className='read_more' onClick={()=>onclickAbout(item)}>Read More</button>
            
          </div>
          )})} 
        </div>
        </div>
        <div className='kmain_card-popup' >
           
          <div className='kcard-popup' >
            <span className='kpcard-head-span'>Space for Ads</span>
            <Popup trigger={buttonPopup} setTrigger={setbuttonPopup} product={product}/>

          </div>
          
           
             
        </div>
    </div>
  )
}

export default KCardBody