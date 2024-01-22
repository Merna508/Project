import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBookmark, faMessage, faUser, faCalendarCheck, faArrowRightFromBracket,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Home(){
    return(<div className="main">
        <div className="container">
        <div className='header'>
         <form>
              <input type="text" placeholder="Search.." name="search"/>
              <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
       <div className="sidebar">
           <div className='home' id='Home'>
              <FontAwesomeIcon icon={faHouse} />
              <p>Home</p>
            </div> 
           <div className="favorites" id='Favorites'>
              <FontAwesomeIcon icon={faBookmark} />
              <p>Favorites</p>
            </div> 
           <div className='chat' id='Chat'>
              <FontAwesomeIcon icon={faMessage} />
              <p>Chat</p>
            </div> 
           <div className='about' id='About'>
              <FontAwesomeIcon icon={faUser} />
              <p>About</p>
            </div> 
           <div className='contact' id='Contact'>
           <FontAwesomeIcon icon={faCalendarCheck} />
              <p>Contact Us</p>
            </div> 
           <div className='btn'>
              <button>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Logout
                </button>
            </div> 
           </div>
        </div>
    </div>);
}
export default Home;