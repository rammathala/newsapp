import React, { useEffect, useState } from 'react'
import './Polpage.css'
import db from '../firebase';
import Popage from './Popage';
function Politicalpage() {
  const [polipag, setpolipag] = useState([])
     useEffect(()=>{
        getpnps();
      },[]);
      function getpnps(){
        db.collection('Political').orderBy('date','desc').onSnapshot(function(querySnapshot){
          setpolipag(
            querySnapshot.docs.map((doc)=>({
              id:doc.id,
              title:doc.data().Ntitle,
              image: doc.data().image,
              desc: doc.data().Description,
              artlink:doc.data().links,
              date:doc.data().date
            }))
          );
        });
     
      }
  return (
    <div className='Politicalpage'>
      {
          polipag.map(po=>
               (
              <Popage id ={po.id} title={po.title} image={po.image} desc={po.desc} dat={po.date}/>
               )
          )
      }
    </div>
  )
}

export default Politicalpage