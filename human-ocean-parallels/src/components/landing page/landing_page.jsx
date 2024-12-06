import React from 'react'
import "./style.css"
import bg from "./bg.jpg"
export default function LandingPage({children}) {
  return (
    <div>
        <section>
            <h2 id="text">
                <span>IULTCO</span><br/>On veut du gros pixel!</h2>
            <img src={bg} id="forest" />
        </section> 
        <div className="sec">
            <p>{children}</p>
        </div>
    </div>
  )
}
