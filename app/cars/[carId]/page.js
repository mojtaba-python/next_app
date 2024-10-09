
import React from 'react'


export const generateMetadata= ({params, searchParams})=>{
  return{
    title:`Cars no ${params.carId}`,
  }
}

export default function page({params, searchParams}) {
  
  return (
    <div class="single-featured-cars">
              <div class="featured-img-box">
                <div class="featured-cars-img">
                  <img src={`../assets/images/featured-cars/fc${params.carId}.png`} alt="cars"/>
                 </div>
                <div class="featured-model-info">
                  <p>
                    model: 2017
                    <span class="featured-mi-span"> 3100 mi</span> 
                    <span class="featured-hp-span"> 240HP</span>
                     automatic
                  </p>
                </div>
              </div>
              <div class="featured-cars-txt">
                <h2><a href="#">BMW 6-series gran coupe</a></h2>
                <h3>$89,395</h3>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor 
                  sit amet, consectetur, adipisci velit, sed quia non. 
                </p>
              </div>
            </div>
  )
}
