import React, { useState } from 'react'
import Political from './Political'
import './News.css'
import Polihome from './Polihome'
import Culture from './Culture'
import Sports from './Sports'
import Education from './Education'
import Business from './Business'
import Local from './Local'
import Agriculture from './Agriculture'
import Cinema from './Cinema'

function News() {
  const[load, setload] = useState(true)
  const loads = ()=>{
    setload(false)
  }
  setTimeout(loads,2000)
  return (
    <div className='News'>
     {
      load&&
      <div className='loading'>

  <div class="main-item">
  <div class="static-background">
    <div class="background-masker btn-divide-left"></div>
  </div>
  <div class="animated-background">
    <div class="background-masker btn-divide-left1"></div>
  </div>
  <div class="animated-background1">
    <div class="background-masker btn-divide-left1"></div>
  </div>

  <div class="animated-background2">
    <div class="background-masker btn-divide-left1"></div>
  </div>
  
  <div class="animated-background1">
    <div class="background-masker btn-divide-left1"></div>
  </div>
</div>


      </div>
      
      }
    

    <Polihome/>
      <Culture/>
      <Sports/>
      <Education/>
      <Business/>
      <Local/>
      <Agriculture/>
      <Cinema/>

     
    </div>
  )
}

export default News