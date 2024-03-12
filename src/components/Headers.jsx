import React from 'react'
import LOGO from '../assets/images/cafelogo.png'
import delivery from '../assets/images/Frame 411.png'

function Headers() {
  return (
    <>





<div className="ll">
<img src={delivery} alt="" className='' />
<hr></hr>
</div>

{/* bg-body-tertiary */}

<nav className=" navbar navbar-expand-lg "style={{ marginTop: '-50px'}} >


  <div className="container" >
    <a className=" navbar-brand" href="/" ><img src={LOGO} /></a>
    <button className="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent " aria-expanded="false" aria-label="Toggle navigation ">
      <span className="navbar-toggler-icon "></span>
    </button>


    {/* <div className="nav-links text-center"style={{ color: '#49A62C '}} > */}
      
    <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
     <ul className="navbar-nav mx-auto" >
    
        <li className="nav-item " >
          <a className="nav-link active " style={{ color: '#49A62C '}} aria-current="page" href="/"><i className="fa-solid fa-house"></i>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/Service"><i className="fa-brands fa-servicestack"></i>Shop</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link " href='/Tracking'><i className="fa-solid fa-book"></i>About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link " href='/Contact'><i className="fa-solid fa-phone"></i>Contact</a>
        </li>
       


        <li className="nav-item">
        
        <a className="nav-link " href='/Contact'><i style={{fontSize:'20px' }} className=" fa-solid fa-bucket "></i> Cart
       
        </a>
        
        <div className="cirlG" >
        <div style={{ color: '#49A62C', fontSize:'16px' }} className=" fa-solid fa-circle  ">
        <div className="cirl">1</div>
        </div>
        </div>
        
        </li>

      </ul>
      

      <div className="butt mt-4">
      <a href='' className="btn btn-danger" type="submit">Register</a>
      <a href='' className="btn btn-warningn ms-2 text-light" type="submit">Login</a>
       
   {/* <button className="login bg-warning ms-2 rounded pt-3" style={{ border: 'none'  }}>Login</button> */}
   </div> 
   
    </div>
    
    

  </div>
 
  </nav>
 
    </>
  )
}

export default Headers












// <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//       <a class="navbar-brand" href="#">Hidden brand</a>
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>







{/* 
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" style={{borderRadius: '1px'}}><img src={delivery} alt="" className='' /></button>
  <button class="btn btn-outline-secondary" type="button" >Search</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"/>
</div> */}




{/* <nav className="navbar btn btn-outline-secondary">
  <div className="container-fluid">
    <a className="" href="#"><img src={delivery} alt=""  /> </a>
    <h6>jjhk,jl</h6>
    <h6>jjhk,jl</h6>
    <h6>jjhk,jl</h6>
      </div>
      </nav>   
 */}






{/* <!-- As a link --> */}
{/* <nav className="navbar bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={delivery} alt="" className='' /> </a>
           

    <input type="text" className="form-control" placeholder="" aria-label="Example text with two button addons"/>
      
           <div className='' style={{ marginTop: '-30px', marginLeft: '170px'}}  ><i className="fa fa-search"></i>Search</div>
           <div Class ="btn btn-primary"  ><i class="fa fa-search"></i></div>
          
  </div>
</nav> */}
{/* 
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"/>
</div> */}
