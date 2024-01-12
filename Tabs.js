import React from 'react'
import './Tabs.css'
import { NavLink } from 'react-router-dom'
function Tabs() {
  return (
    <div className='Tabs'>
        <NavLink to={'/స్థానిక వార్తలు'}>స్థానిక వార్తలు</NavLink>
        <NavLink to={'/వ్యవసాయం'}>వ్యవసాయం</NavLink>
        <NavLink to={'/వ్యాపారం'}>వ్యాపారం</NavLink>
        <NavLink to={'/క్రీడలు'}>క్రీడలు</NavLink>
        <NavLink to={'/చిత్ర సీమ'}>చిత్ర సీమ</NavLink>
        <NavLink to={'/విద్య'}>విద్య</NavLink>
        <NavLink to={'/రాజకీయం'}>రాజకీయం</NavLink>
        <NavLink to={'/సాంస్కృతి'}>సాంస్కృతి</NavLink>
    </div>
  )
}

export default Tabs