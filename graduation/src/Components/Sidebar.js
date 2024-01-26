import { faHouse, faBookmark, faMessage, faUser, faCalendarCheck, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
function Home(){
    return(
    <>
  <div className="container">
                    <div className='logo'></div>
                    <div className="sidebar">
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faHouse} />
                                <Link to={'/home'} className="home">Home</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBookmark} />
                                <Link to={'/favorites'} className="favorites">Favorites</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMessage} />
                                <Link to={'/chat'} className="chat">Chat</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faUser} />
                                <Link to={'/about'} className="about">About</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCalendarCheck} />
                                <Link to={'/contact'} className="contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='btn'>
                        <button>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            Logout
                        </button>
                    </div>
                </div>
    </>);
}
export default Home;