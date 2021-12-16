import React from 'react'
import image from "../bowler-ocean.png"


const Home = () => {
    return (
     <main>
         <container>
         <img src={image} alt="bowler-ocean" className="absolute object-cover w-full h-full" />
         <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-300 font-bold cursive leading-none lg:leading-snug home-name">Hello, I'm Matt Bowler.</h1>   
         </section>
         </container>
     </main>
    )
}

export default Home
