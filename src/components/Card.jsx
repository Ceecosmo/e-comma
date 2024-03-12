import React from 'react'
import pic1 from '../assets/images/6.png'
import pic2 from '../assets/images/9.png'
import pic3 from '../assets/images/8.png'
import pic4 from '../assets/images/11.png'


function Card() {
// an Array of objects

const CardData3 = [
 
  { image3: pic1, title3: 'Pepperoni pizza' }
  

];


const CardData2 = [
 
  { image2: pic2, title2: 'Potato Chips'},
  

];


const CardData = [
 

  { image: pic3, title: 'Cheese Burger' },
  { image: pic4, title: 'Shawarma' }
  

  // { image: pic1, title: 'Pepperoni pizza', content_text: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
  // { image: pic2, title: 'Sea Freight', content_text: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
  // { image: pic3, title: 'Land Freight', content_text: 'Cargo are transported at some stage of their journey along the world’s roads where we...' },
  // { image: pic4, title: 'Land Freight', content_text: 'Cargo are transported at some stage of their journey along the world’s roads where we...' }
  
  // Add more card data objects as needed
];

 
  return (
    <>
<div className="container-fluid">
<div className="row">

{CardData3.map((Card, index) => (
 <div className="col-md-3 mb-3 " data-aos="fade-up">
<div className="card img-fluid rounded" style={{background: 'snow'}}>

<img src={Card.image3} className="card-img-top"  alt="..." />
  
  <div className="card-body">
  <div className="bg-warningY mx-auto"></div>
  
   
    <h4 className="card-title text-center pt-4">{Card.title3}</h4> 
    <p className="card-text">{Card.content_text}</p>
           
    </div>  </div>  </div> 

))}





  
{CardData2.map((Card, index) => (
 <div className="col-md-3 mb-3 " data-aos="fade-up">
<div className="card img-fluid rounded" style={{background: '#fab633'}}>

<img src={Card.image2} className="card-img-top"  alt="..." />
  
  <div className="card-body">
  <div className="bg-warningY2 mx-auto"></div>
  
   
    <h4 className="card-title text-center text-light pt-4">{Card.title2}</h4> 
    <p className="card-text">{Card.content_text}</p>
           
    </div>  </div>  </div> 

))}



    {CardData.map((Card, index) => (
 
<div className="col-md-3 mb-3 " data-aos="fade-up">
<div className="card img-fluid rounded" style={{background: 'snow'}}>
<img src={Card.image} className="card-img-top" alt="..." />
  <div className="card-body">
  <div className="bg-warningY mx-auto"></div>
  <h4 className="card-title text-center pt-4">{Card.title}</h4>
   
   
    <p className="card-text">{Card.content_text}</p>
           
    </div> 
       </div>
         </div>



))}

</div>
</div>  
    </>
  )
}

export default Card