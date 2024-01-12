import React, { useEffect, useState } from 'react'
import db from './firebase';
import './Viewpdf.css'
import { Link } from 'react-router-dom';
import Pdfcard from './Pdfcard';
function Viewpdf() {
  const [pdfs,setpdfs] = useState([''])
  useEffect(()=>{
    getpdfs();
  },[]);
  function getpdfs(){
    db.collection('pdfs').onSnapshot(function(querySnapshot){
      setpdfs(
        querySnapshot.docs.map((doc)=>({
          id:doc.id,
          name:doc.data().pdfname,
          pdf:doc.data().pdf,
        }))
      );
    });
 console.log(pdfs)
  }
  return (
    <div className='viewpdf'>
        <div className='pdfcoun'>
           <p>Total pdf:{pdfs.length}</p>
        </div>
  <div className='viewpdf1'>

  {
        pdfs.map((pdf)=>(
     <Pdfcard id={pdf.id} name={pdf.name} pdf={pdf.pdf}/>
        ))
      }
   
   </div>
    </div>
  )
}

export default Viewpdf