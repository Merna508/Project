import { faBookmark, faMessage, faEllipsisVertical, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from 'react';
import './Home.css';
import willKiny from '../images/willKiny.png';
import project1 from '../images/project1.jfif';
import project2 from '../images/project2.jfif';
import project4 from '../images/project4.jfif';
import project5 from '../images/project5.jfif';
import Header from './Header';
import Sidebar from './Sidebar';
// import Comments from './Comments/Comments';
function Home(){
     //editing menu
     const [isOpen, setIsOpen] = useState(false);
    // const [open, setOpen]=useState(false);
    // const Menu=['Hide', 'Save as', 'Copy Link'];
    // const menuRef= useRef();
    // const divRef= useRef();
    // window.addEventListener('click', (e) => {
    //     if(e.target !== menuRef.current && e.target !== divRef.current){
    //         setOpen(false);
    //     }
    // })
        //icons color
        //heart icon
        const [isActive1, setIsActive2] = useState(false);
// //Define state to keep track of colors for each icon
//   const [iconColors, setIconColors] = useState({
//     icon1: '#696F8C',
//     icon2: '#696F8C',
//   });
//    // Function to handle click on an icon
//     const handleIconClick = (iconId, color) => {
//        // Update the state with the new color for the clicked icon
//         setIconColors(prevColors => ({
//           ...prevColors,
//           [iconId]: color,
//         }));
//       };
    
    //  const [background, setBackground] =useState(true);
    //  const [number, setNumber] =useState(true);
    //  const count =useRef();
    //  function love(){
    //      setNumber(!number)
    //     setBackground(!background)
    //  }
    // const color = background ? '#D9D9D9' : 'red'; 
    //const numbers = background ? '' : count.current.value = 1; 
    // //bookmark icon
    const [backgroundBook, setBackgroundBook] =useState(true);
    // const bookmark =useRef();
    function Mark(){
        setBackgroundBook(!backgroundBook)
    }
    const bookColor = backgroundBook ? '#D9D9D9' : 'yellow'; 
    // category
    // const [changeColor, setChangeColor]=useState(false);
    // const handelClick=() =>{
    //     setChangeColor(!changeColor)
    // }
    //categories color
    // const [categoryColor, setCategoryColor] = useState('#fff');
    // const categoryClick = categoryColor =>{
    //     setCategoryColor(categoryColor)
    // }
    // useEffect(()=>{
    //     document.getElementsByClassName('Category').style.backgroundColor=categoryColor;
    // },[categoryColor])
   //hide option
   const [isActive, setIsActive] = useState(false);
   const handleClick = () => {
     // toggle
     setIsActive(current => !current);
     // or set to true
     // setIsActive(true);
     //comment
    //  const [commentOpen, setCommentOpen] = useState(false);
   };
    return (
        <>
                <Header />
               <Sidebar />
            <div className='home-section'>
                    <div className='content'>
                        <div className='head'>
                            <h1 className='title-head'>Discover Course & Bootcamp</h1>
                            <div className='categories'>
                                <div className='category fcategory'>All projects</div>
                                <div className='category'>UI/UX design</div>
                                <div className='category cat-w'>Product Management</div>
                                <div className='category cat-w'>Branding Design</div>
                                <div className='category cat-w'>Mobile Development</div>
                                <div className='category cat-w'>Web Development</div>
                            </div>
                        </div>
                        {/* style={{
                                backgroundColor: isActive ? '#e6f4f7' : '',
                                color: isActive ? 'white' : '',
                                }} */}
                        <div className='projects'>
                            <div className='project' style={{
                                backgroundColor: isActive ? '#f5f7f7' : '',
                                color: isActive ? 'white' : '',
                                }}>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={willKiny} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                           <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
                                        </div>
                                        <div className='edit edit-delete'>
                                            <i onClick={() => setIsOpen(!isOpen)} onBlur={() => setIsOpen(false)}>
                                                <FontAwesomeIcon icon={faEllipsisVertical} />
                                                {isOpen && <div className='settings drop-down'>
                                                {isOpen && <div className='option drop-line' onClick={handleClick} >Hide
                                                    </div>}
                                                {isOpen && <div className='option drop-line'>Add to favorite
                                                    </div>}
                                                {isOpen && <div className='option'>Copy link</div>}  
                                                </div>}
                                            </i>
                                            
                                        </div>
                                        {/* ref={divRef} onClick={()=>setOpen(!open)} */}
                                        {/* { open && (<div className='settings' id='Setting' ref={menuRef}>
                                                <ul>
                                                    {Menu.map((menu) => (
                                                    <li onClick={()=> setOpen(false)} className="drop-down"key={menu}>
                                                        {menu} 
                                                        
                                                         <div className='drop-line' style={{borderBottomWidth: 1, 
                                                            borderBottomStyle:'solid',borderBottomColor: 'rgb(0, 0, 0)',}}></div>
                                                            
                                                    </li>))}
                                                </ul>
                                                </div>)} */}
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={project1} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                          <i>{isActive1? <FavoriteBorderOutlinedIcon  onClick={()=>{
                                                setIsActive2(!isActive1)}}/>:
                                            <FavoriteOutlinedIcon  style={{color:'red'}} onClick={()=>{
                                                setIsActive2(!isActive1)}} />
                                                }</i>
                                            <span style={{color:'#696F8C'}}>react</span>
                                        </div>
                                       
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                        {/* onClick={()=>setCommentOpen(!commentOpen)} */}
                                            <i style={{marginTop:-15,}}><FontAwesomeIcon icon={faMessage} /></i>
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                                {/* {commentOpen && <Comments />} */}
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={willKiny} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                           <i className='bmIcon' onClick={Mark}><FontAwesomeIcon icon={faBookmark} style={{color:bookColor}} /></i> 
                                        </div>
                                        <div className='edit edit-delete'>
                                            <i><FontAwesomeIcon icon={faEllipsisVertical} />
                                            {/* onClick={() => setIsOpen(!isOpen)} onBlur={() => setIsOpen(false)} */}
                                                {/* {isOpen && <div className='settings drop-down'>
                                                {isOpen && <div className='option drop-line' onClick={handleClick} >Hide
                                                    </div>}
                                                {isOpen && <div className='option drop-line'>Add to favorite
                                                    </div>}
                                                {isOpen && <div className='option'>Copy link</div>}  
                                                </div>} */}
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={project2} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <i><FavoriteBorderOutlinedIcon /></i>
                                            <span style={{color:'#696F8C'}}> react</span>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={willKiny} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                         <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={project2} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <i><FavoriteBorderOutlinedIcon /></i>
                                            <span  style={{color:'#696F8C'}}>react</span>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={willKiny} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                            <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={project4} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <i><FavoriteBorderOutlinedIcon /></i>
                                            <span  style={{color:'#696F8C'}}> react</span>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={willKiny} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                           <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i> 
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={project5} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color' id='heartIcon'>
                                            <i><FavoriteBorderOutlinedIcon /></i>
                                            <span style={{color:'#696F8C'}}> react</span>
                                        </div>
                                        <div className='number-section'>
                                            <span>15</span>
                                            <p className='react-text'>Reacts</p>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={willKiny} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                        <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                         <img src={project2} alt='project' /> 
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <i><FavoriteBorderOutlinedIcon /></i>
                                            <span style={{color:'#696F8C'}}> react</span>
                                        </div>
                                        <div className='number-section'>
                                            <span>15</span>
                                            <p className='react-text'>Reacts</p>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={willKiny} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                        <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={project2} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <i><FavoriteBorderOutlinedIcon /></i>
                                            <span style={{color:'#696F8C'}}> react</span>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
        </>
    );
}
export default Home;