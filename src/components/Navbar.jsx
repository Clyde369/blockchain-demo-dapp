import React from 'react'
import '../styles/sidebar.css'
import '../styles/index.css'
import { useMediaQuery } from 'react-responsive';
import MobileSideBar from './mobileView/MobileSideBar';


const Sidebar = () => {
   const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
   return (

   <div>
      {
         isMobile ?
      <>
         <MobileSideBar />
      </>
         :(
      <nav class="navbar navbar-expand-lg bg-light">
         <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                     <a type="button" class="nav-button nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Dropdown
                     </a>
                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                     </ul>
                  </li>
               </ul>
               <form class="d-flex" role="search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
               </form>
         </div>
      </div>
   </nav>
   
   )}
</div>
)}

export default Sidebar