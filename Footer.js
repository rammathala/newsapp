import React from 'react'
import dev from './dev.png'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import log from './logo.jpg'
function Footer() {
  return (
    <div className='Footer'>
        <div className='footer'>
        <h1>FOLLOW US ON SOCIAL MEDIA</h1>
         <div className='fr1'>
            <a target='_blank' href='https://www.facebook.com/profile.php?id=61550506231576&mibextid=ZbWKwL'><FacebookIcon className='face'/></a>
            <a target='_blank' href='https://www.instagram.com/saagarasakshi/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'><InstagramIcon className='inst'/></a>
            </div>
        </div>
        <div className='footer1'>
          <div className='foom'>
               <div className='clowe'>
                <div className='cleft'>
                <img src={log}/>
                </div>
             <div className='cright'>
             <h3>SAGAR SAKSHI</h3>
             <span><MailIcon/><a href='mailto:saagarasakshi@gmail.com'> saagarasakshi@gmail.com</a></span>
             <span><CallIcon/><p className='canu'> +91 81255 88131</p></span>
             <span><PlaceIcon/><p>Kakinada</p></span>
             </div>
              
               </div>
          
        
            <div className='quick'>
                <p>Quick links</p>
                <div className='qlinks'>
                <div className='qlink1'><p><a href='/'>Home</a></p>
                <p><a href='/రాజకీయం'>రాజకీయం</a></p>
                <p><a href='/విద్య'>విద్య</a></p>
                <p><a href='/వ్యవసాయం'>వ్యవసాయం</a></p>
                <p><a href='/చిత్ర సీమ'>చిత్ర సీమ</a></p></div>
                <div className='qlink2'>
                <p><a href='/newspdf'>PDF's</a></p>
                <p><a href='/క్రీడలు'>క్రీడలు</a></p>
                <p><a href='/స్థానిక వార్తలు'>స్థానిక వార్తలు</a></p>
                <p><a href='/వ్యాపారం'>వ్యాపారం</a></p>
                <p><a href='/సాంస్కృతి'>సాంస్కృతి</a></p>
                </div>
                </div>
                </div>  
            </div>
            <div className='copyr'>
              <p className='p1'>Copyrights &copy; Saagara Sakshi 2023</p>
              <p className='p2'>||</p>
              <p className='p3'> Developer</p>
              <div class="tooltip">
              <a target='_blank' href='https://rammathala.netlify.app/'><div className='devop'><img src={dev}></img></div></a>
    <div class="top">
        <h3>Ram Mathala</h3>
        <i></i>
    </div>
</div>

            </div>
          </div>
    </div>
  )
}

export default Footer