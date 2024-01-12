import React, { useEffect, useState } from 'react'
import db from '../firebase';
import Cpage from './Cpage';
function Cinemapage() {
  const [cinema, setcinema] = useState([])
     useEffect(()=>{
        getpmps();
      },[]);
      function getpmps(){
        db.collection('Cinema').orderBy('date','desc').onSnapshot(function(querySnapshot){
          setcinema(
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
        cinema.map(po=>
             (
            <Cpage id ={po.id} title={po.title} image={po.image} desc={po.desc} dat={po.date}/>
             )
        )
    }
  </div>
  )
}

export default Cinemapage