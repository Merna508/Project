import { faHouse, faBookmark, faMessage, faUser, faCalendarCheck, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';
// import home from '../icons/home.svg'
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
                                {/* <img src={home} alt="icon"/> */}
                                <Link to={'/home'} className="home">Home</Link>
                            </li>
                            <li>
                                <i><FontAwesomeIcon icon={faBookmark} /></i>
                                <Link to={'/favorites'} className="favorites">Favorites</Link>
                            </li>
                            <li>
                               <i className='gap'><FontAwesomeIcon icon={faMessage} /></i>
                                <Link to={'/chat'} className="chat">Chat</Link>
                            </li>
                            <li>
                                <i className='gap'><FontAwesomeIcon icon={faUser} /></i>
                                <Link to={'/about'} className="about">About</Link>
                            </li>
                            <li>
                               <i><FontAwesomeIcon icon={faCalendarCheck} /></i>
                                <Link to={'/contact'} className="contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='btn'>
                        <button>
                            <i><FontAwesomeIcon icon={faArrowRightFromBracket} /></i>
                            Logout
                        </button>
                    </div>
                    <div className="clear"></div>
                </div>
        );
}
export default Sidebar;