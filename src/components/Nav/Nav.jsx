import React from "react";
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {FiBookOpen} from 'react-icons/fi'
import {MdWorkOutline} from 'react-icons/md'

const nav = () => {
    // const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href={'#'}><AiOutlineHome/></a>
            <a href={'#about'}><BiUserCircle/></a>
            <a href={'#portfolio'}><FiBookOpen/></a>
            <a href={'#experience'}><MdWorkOutline/></a>
            <a href={'#Contacts'}><AiOutlineMessage/></a>
        </nav>
    )
}
export default nav