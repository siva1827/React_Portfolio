import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';

function HeaderSocials() {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/siva-r-1185511b7" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/siva1827" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/shiva_ravinadhan/?igshid=Yjk4NWM2ZWVkMw%3D%3D" target="_blank"><AiOutlineInstagram/></a>

        </div>
    );
}

export default HeaderSocials