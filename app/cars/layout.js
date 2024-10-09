import React from 'react'


export const metadata = {
    title: "Cars",
  };

export default function CarsLayout({children}) {
  return (
    <>
   <div className='box_layout_car'>
    Layout
   </div>
    {children}
   <p>cars page</p>
    </>
  )
}
