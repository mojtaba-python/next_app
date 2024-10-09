'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const cars = [
  { id: 1, name: "BMW 6-series", price: "$89,000" },
  { id: 2, name: "chenrolet camaro", price: "$66,000" },
  { id: 3, name: "lamborghini v520", price: "$95,120" },
  { id: 4, name: "audi a-3 sedan", price: "$35,000" },
  { id: 5, name: "infiniti z5", price: "$48,000" },
  { id: 6, name: "porsche z18", price: "$56,000" },
  { id: 7, name: "BMW x-series", price: "68,000" },
  { id: 8, name: "BMW 8-series", price: "75,000" },
]

export default function page() {

  const router = useRouter();

  const handlerCar = () => {
    router.push("/cars")
  }
  return (
    <section id="featured-cars" class="featured-cars">
      <div class="container">
        <button onClick={handlerCar}>back</button>
        <div class="featured-cars-content">
          <div class="row">
            {
              cars.map((car) => (
                <div key={car.id}
                  onClick={() => router.push(`/cars/${car.id}`)}
                  class="col-lg-3 col-md-4 col-sm-6">
                  <div class="single-featured-cars">
                    <div class="featured-img-box">
                      <div class="featured-cars-img">
                        <img src={`assets/images/featured-cars/fc${car.id}.png`} alt="cars" />
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
                      <h2><a href="#">{car.name}</a></h2>
                      <h3>{car.price}</h3>
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }


          </div>
        </div>
      </div>

    </section>
  )
}
