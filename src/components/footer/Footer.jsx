import React from 'react'
import MainLogo from '../../assets/Combined Shape.svg'
import './Footer.css'
import InstaIcon from '../../assets/insta.png'
import YoutubeIcon from '../../assets/youtube.png'
import FacebookIcon from '../../assets/facebook.png'

const Footer = () => {
  return (
    <div style={{backgroundColor:"#2B59C3"}}>
       <div className='container'>
          <div className='footer-flex-block'>
                <div style={{display:"flex",flexDirection:"column", gap:'10px'}}>
                    <div>
                    <img src={MainLogo} alt="" />
                    </div>
                    <div style={{fontSize:"16px", fontWeight:"500", color:'#D9DBE1'}}>
                    &copy;2023 Makers All rights reserved
                    </div>
                </div>
               <div className='ul-list'>
               <ul style={{display:"flex",flexDirection:"column", gap:'10px'}}>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Курсы</a></li>
                <li><a href="#">Бесплатные курсы</a></li>
               </ul>
               </div>
               <div className='information' style={{display:"flex",flexDirection:"column", gap:'10px'}}>
                <div>
                <span>+996 706 266 966</span>
                <span> </span>
                <span> </span>
                <span>+996 501 619 690</span>
                </div>
                <div>
                    <span>Табышалиева 29, Бишкек Кыргызстан</span>
                </div>
                <div >
                    <span><img src={InstaIcon} alt="" style={{margin:"0px 5px"}}/></span>
                    <span><img src={YoutubeIcon} alt="" style={{margin:"0px 5px"}}/></span>
                    <span><img src={FacebookIcon} alt="" style={{margin:"0px 5px"}}/></span>
                </div>
               </div>
          </div>
       </div>
    </div>
  )
}

export default Footer