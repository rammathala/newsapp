import React, { useEffect, useState } from 'react'
import './Polihome.css'
import { Link } from 'react-router-dom'
import db from './firebase';
import Po from './Po';

function Polihome() {
     const [poli, setpoli] = useState([])
     useEffect(()=>{
        getpns();
      },[]);
      function getpns(){
        db.collection('Political').orderBy('date','desc').limit(3).onSnapshot(function(querySnapshot){
          setpoli(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().Ntitle,
              subtitle:doc.data().Stitle,
              image: doc.data().image,
              desc: doc.data().Description,
              artlink:doc.data().links,
              date:doc.data().date
            }))
          );
        });
        
      }
  return (
    <div className='Polihome1'>
    <div className='Poliindex'>
         <p>రాజకీయం</p>
         <Link  to={'/రాజకీయం'}>More</Link>
    </div>
     
    <div className='Polihome'>
      {
          poli.map(po=>
               (
               <Po id={po.id} title={po.title} image={po.image} desc={po.desc} stamp={po.date} links={po.artlinks} stitle={po.subtitle}/>
               )
          )
      }
  
 

    </div>
    </div>
  )
}

export default Polihome