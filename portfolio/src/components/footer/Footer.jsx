import React from 'react'
import './footer.css'
import {BsFacebook,BsTwitter} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Portfolio</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://www.instagram.com/shiva_ravinadhan/?igshid=Yjk4NWM2ZWVkMw%3D%3D"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>

      </div>

      <div className="footer_copyright">
        <small>&copy; SIVA R. All Rights Reserved.</small>
      </div>
      
    </footer>
  )
}

export default Footer