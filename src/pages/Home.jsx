import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
        <div>
            <h1 className='text-white text-8xl p-20'>This is a home page of the</h1>
            <h1 className='text-blue-500 text-6xl ml-40'>INITIATE Assignment Project</h1>

            <Link to="/signup">
            <button className='border border-transparent rounded p-5 mt-8 bg-blue-500 font-bold '>Click Here For SignUp....</button>
            </Link>
        </div>
    </div>
  )
}

export default Home