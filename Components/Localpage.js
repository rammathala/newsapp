import React , { useEffect, useState }from 'react'
import db from '../firebase';
import Lopage from './Lopage';
function Localpage() {
  const [local, setlocal] = useState([])
  useEffect(()=>{
     getplps();
   },[]);
   function getplps(){
     db.collection('Local').orderBy('date','desc').onSnapshot(function(querySnapshot){
       setlocal(
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
          local.map(lo=>
               (
                <Lopage id ={lo.id} title={lo.title} image={lo.image} desc={lo.desc} dat={lo.date}/>
               )
          )
      }
    </div>
  )
}

export default Localpage