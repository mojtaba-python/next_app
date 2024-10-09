'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const pathName = usePathname()
    console.log(pathName);
    
    return ( 
        <>
            <div className='box_nav'>
                <ul className='nav_link'>
                    <li className=" ">
                        <Link style={{color: pathName == "/" && "green"}} href="/">home</Link>
                        </li>
                    <li className="scroll">
                        <Link href="/service" style={{color: pathName == "/service" && "green"}}>service</Link>
                        </li>
                    <li className="scroll"><a href="#featured-cars">featured cars</a></li>
                    <li className="scroll">
                        <Link href="/cars" style={{color: pathName.startsWith("/cars") && "green"}}>new cars</Link>
                        </li>
                    <li className="scroll"><a href="#brand">brands</a></li>
                    <li className="scroll"><a href="#contact">contact</a></li>
                </ul>
            </div>
        </> 
    )
}
