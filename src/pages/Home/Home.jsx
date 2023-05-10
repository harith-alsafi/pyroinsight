import React from 'react'
import MainDash from '../../components/MainDash/MainDash'
import RightSide from '../../components/RightSide/RightSide';
import './Home.css'


const Home = () => {
  return (
    <div className="Home">
      <div className="main">
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  )
}

export default Home;