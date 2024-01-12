import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Spage from './Spage';
function Sportspage() {
  const [sports, setsports] = useState([])
  useEffect(()=>{
     getpsps();
   },[]);
   function getpsps(){
     db.collection('Sports').orderBy('date','desc').onSnapshot(function(querySnapshot){
       setsports(
         querySnapshot.docs.map((doc)=>({
           id:doc.id,
           title:doc.data().title,
           image: doc.data().image,
           desc: doc.data().description,
           artlink:doc.data().artlink,
           date:doc.data().date
         }))
       );
     });
  
   }
  return (
    <div className='Politicalpage'>
      {
         sports.map(so=>
               (
              <Spage id ={so.id} title={so.title} image={so.image} desc={so.desc} dat={so.date}/>
               )
          )
      }
    </div>
  )
}

export default Sportspage