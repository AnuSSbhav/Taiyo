import React from 'react'
import Graph from './Graph'
import Mapped from './Mapped'
import WorldCard from './WorldCard'

const Dashboard = () => {
  return (
    <div className='flex flex-col' style={{background:"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(50,2,91,0.9002320185614849) 55%, rgba(0,212,255,1) 100%)",width:'100%'}} >
        <Graph/>
        <Mapped/>
        <WorldCard/>
    </div>
  )
}

export default Dashboard