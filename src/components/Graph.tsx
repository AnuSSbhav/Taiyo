import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Graph = () => {

    const {data}=useQuery(['line'],()=>{})

  return (
    <div>Graph</div>
  )
}

export default Graph