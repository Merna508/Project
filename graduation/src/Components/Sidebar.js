import { faHouse, faBookmark, faMessage, faUser, faCalendarCheck, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Sidebar.css';
function Sidebar(){
    const [show, setShow] = useState(true);
    return(
        <div className="Sidelog">
            <div className='logo'></div>
                <div className="sidebar">
                    <ul>
{
    show && <div className='tab-layer'
                style={{width:119,height:40,marginLeft:-15,
                backgroundColor:'rgba(255, 255, 255, 0.6)',
                borderRadius:'47px 0 0 47px',position:'absolute'}}>
            </div>

}
                            <li onClick={() => setShow(!show)}>
                                <i><FontAwesomeIcon icon={faHouse} /></i>
                                <Link to={'/home'} className="home">Home</Link>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faBookmark} /></i>
                                <Link to={'/favorites'} className="favorites">Favorites</Link>
                            </li>
                            <li className='Gap'>
                               <i><FontAwesomeIcon icon={faMessage} /></i>
                                <Link to={'/chat'} className="chat">Chat</Link>
                            </li>
                            <li className='Gap'>
                                <i><FontAwesomeIcon icon={faUser} /></i>
                                <Link to={'/about'} className="about">About</Link>
                            </li>
                            <li>
                               <i><FontAwesomeIcon icon={faCalendarCheck} /></i>
                                <Link to={'/contact'} className="Contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='Logbtn'>
                        <button>
                            <i><FontAwesomeIcon icon={faArrowRightFromBracket} /></i>
                            <Link to={'/Login'} className='log'>Logout</Link>
                        </button>
                    </div>
                </div>
        );
}
export default Sidebar;