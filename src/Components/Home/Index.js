import React from 'react'
import HomeFront from './HomeFront/Home'
import CardMember from './HomeMembers/CardMember'
import CardNews from './HomeNews/CardNews'
import CardTestimonial from './HomeTestimonial/CardTestimonial'
import './index.css'

const Index = () => {
  return (
    <div className='container-index-home'>
        <HomeFront />
        <CardMember />
        <CardTestimonial />
        <CardNews />   
    </div>
  )
}

export default Index