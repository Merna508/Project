import './Home.css';
import { faMagnifyingGlass, faBell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilepic from '../images/profilepic.png';
import Header from './Header';
import Sidebar from './Sidebar';
function Favorites (){
    return(<>
                <Header />
               <Sidebar />
            <div className='home-section'>
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