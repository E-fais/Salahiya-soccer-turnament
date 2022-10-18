import React from 'react'
import Footer from './components/footer/Footer'
import Map from './components/Map/Map'
import Match from './components/MatchFixture/Match'
import Poster from './components/poster/Poster'
import Rules from './components/Rules/Rules'
import Title from './components/Title/Title'


function HomePage() {
  return (
    <div style={{backgroundColor:"white"}}>
        <Title/>
        <Poster/>
        <Rules/>
        <Match/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default HomePage