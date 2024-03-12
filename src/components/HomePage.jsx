import React from 'react'
// import About from '../assets/images/about.jpg'
// import ICON1 from '../assets/images/icon1.png'
// import ICON2 from '../assets/images/icon2.png'
// import ICON3 from '../assets/images/icon3.png'
import Card1 from './Card'
import Frame from '../assets/images/Frame6.png';

// import FRAME from '../assets/images/Frame4.png'


function HomePage() {
  return (
    <>

<div className="bg-image mt-2">
<div className="container text-light  ">
            <div className="pt-5 text-center" data-aos="fade-down-right">
            <h1 className='pt-2' style={{fontSize:'48',fontWeight:'bold',marginTop:'35px'}}>
            Taste the Differences: <span className="text-warning" >Welcome to<br></br> TASTE HEAVEN</span>
            </h1>
            <p style={{fontSize:'24px',fontWeight:'700px', fontFamily:'Times NewRoman' }}>Delight your senses with our flavorful dishes, warm atmosphere,<br></br> and impeccable service. Join us for a memorable dining adventure<br></br>today.</p>
           </div>
        </div>
        <div className="container text-center pt-4" data-aos="fade-up-left">
        <a href='' className="btn btn-danger" type="submit">Shop Now</a>
        <a href="/Tracking" className="btn btn-warningn text-light ms-5">Learn More</a>
        </div>  
       </div> 
       

{/* 
       <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
     
    <img src={About} className="d-block w-50" alt="about" />
       
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={About} className="d-block w-100" alt="about" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>







 */}



 {/* <div className="container pt-5"> */}
 {/* <div className="text-center " data-aos="fade-up">
   <h2>Welcome Crystal Shipment</h2>
  <div className="bg-red mx-auto"></div>
 <p>Crystal Shipment is more than logistics. We can also optimize your packaging, 
 manage your materials sourcing, and so much more.</p>
 </div> */}

{/* <div className="container-fluid pt-3">
   <div className="row">

      <div className="col mt-6">
      <img src={About} className="rounded img-fluid mb-5" alt="about" />
          
        
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <p className='text-danger'>TRANSPORTATION COMPANY</p>
        <h2>We Provide Full Range Logistics Solution</h2>
        <p>We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.</p>
        <a href="/Service" className="btn btn-danger">Learn More</a>
        
        </div>

   </div>
   </div>*/}
   
   {/* </div>  */}


   <div className="container pt-2 ">
<div className="ms-2"><p className='' style={{color:'#49A62C', fontSize:'20px',fontWeight:'bold'}}> CRISPY, EVERY BITE TASTE </p>
    <h2>POPULAR FOOD ITEMS</h2>
    </div>


    <Card1/>
{/* <div className="text-center "data-aos="fade-up">

  <a href="/Service" className="btn btn-danger">Load More</a>
  
</div> */}
</div>
<div className="container">
<div className=""><p className='ms-2' style={{color:'#49A62C', fontSize:'18px',fontWeight:'bold'}} > HAPPY SPONSORS WITH US </p>
</div>
</div>


<div className="black">
<div className="row">

<div className="col-md-6">
  &#128293;
</div>

<div className="col-md-6">
{/* &#x1f525; */}
&#127881;
{/* &#x1f525; */}

  
</div>

   
</div>

</div>
      

  <Card1/>





{/* 

<div className="container mt-5" >
<div className="row">
 <div className="col-md-6" data-aos="fade-up">
 <h2>WHY CHOOSE US?</h2>

 <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON1} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Global supply Chain Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON2} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Mobile shipping Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON3} alt=""  className='img-fluid'/>
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Careful handling Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
 </div>
<div className="col-md-6" data-aos="fade-up">
<h2>Request a Quote</h2>
<FORM/>
</div>

</div>
</div> */}






<div className="row pt-5">
            <div className="col-md-6">
<img src={Frame} alt="" className='img-fluid' data-aos="fade-up" />
            </div>
            <div className="col-md-6" data-aos="fade-up">
            <h2>THE COMPLETE SOLUTION</h2>
                    <div className='bg-red'></div>
                    <div className="pt-3" data-aos="fade-up">
                        <p>Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
                    </div>

                    <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
               <a href='/contact' className="btn btn-danger">Order Now</a> 
            </div>
            </div>
          </div>



          <div className="text-center"><p className='text-danger'> TYPES OF LOGISTICS </p>
          <h2>Covering All Logistics Fields</h2>


          <h2>Covering All Logistics Fields hfhgj jhjhkj ghjm ujj ugjhugjhj uguhjj hjknk nk<br></br>ygujhi yhu hgghj utth uuy gug ug uggg hygu </h2>
    </div>


    </>
    
   
  )
}

export default HomePage