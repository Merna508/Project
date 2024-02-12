import './Home.css';
import { faMagnifyingGlass, faBell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilepic from '../images/profilepic.png';

function Favorites (){
    return(<>
            <div className='home-section'>
                    <div className='header'>
                        <div className='search'>
                            <form className='frm'>
                                   <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i> 
                                <input type="text" placeholder="Search.." name="search"/>
                            </form>
                            </div>
                        <div className='profile'>
                        <p>Registered</p>
                        <div className='profile-img'>
                            <img src={profilepic} alt="profile"/>
                            </div>
                            <div className='icon'>
                            <FontAwesomeIcon icon={faBell} size = '2x'/>
                            </div>
                        </div>
                        </div>
                    <div className='content'>
                        <div className='head'>
                        <h1 className='title-head'>favorites</h1>
                        <div className='categories'>
                            <div className='category'>All projects</div>
                            <div className='category'>UI/UX design</div>
                            <div className='category cat-w'>Product Management</div>
                            <div className='category cat-w'>Branding Design</div>
                            <div className='category cat-w'>Mobile Development</div>
                            <div className='category cat-w'>Web Development</div>
                        </div>
                        </div>
                        </div>
                    </div>
    </>)
}
export default Favorites;