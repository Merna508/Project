import {
  faBookmark,
  faMessage,
  faEllipsisVertical,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
// import willKiny from "../images/willKiny.png";
// import project1 from "../images/project1.jfif";
// import project2 from "../images/project2.jfif";
// import project4 from "../images/project4.jfif";
import willKiny from "../../images/willKiny.png";
import project1 from "../../images/project1.jfif";
import project2 from "../../images/project2.jfif";
import project4 from "../../images/project4.jfif";
import project5 from "../../images/project5.jfif";
import Header from "../../Components/Header";
import Calendar from "../Calendar/Calendar";
import "./Home.css";

function Home() {

  const [arreys, setArreys] = useState([
    { id: 0, m: false, like: false, category: "category1", img: project1, Comments: ["ali", "gamal", "ali"] },
    { id: 1, m: false, like: false, category: "category1", img: project1, Comments: ["ali"] },
    { id: 2, m: false, like: false, category: "category1", img: project1, Comments: ["ali", "gamal"] },
    { id: 3, m: false, like: false, category: "category2", img: project2, Comments: ["ali", "gamal", "ali"] },
    { id: 4, m: false, like: false, category: "category3", img: project1, Comments: ["gamal", "ali"] },
    { id: 5, m: false, like: false, category: "category4", img: project4, Comments: ["ali", "gamal", "mohamed"] },
    { id: 6, m: false, like: false, category: "category1", img: project1, Comments: ["ali", "gamal", "gamal"] },
    { id: 7, m: false, like: false, category: "category3", img: project1, Comments: ["ali", "gamal", "ahmed"] },
    { id: 8, m: false, like: false, category: "category3", img: project1, Comments: ["ali", "gamal", "ali"] },
    { id: 9, m: false, like: false, category: "category2", img: project2, Comments: ["ali", "gamal", "ali"] },
    { id: 10, m: false, like: false, category: "category5", img: project5, Comments: ["ali", "gamal", "ali"] },
    { id: 11, m: false, like: false, category: "category5", img: project5, Comments: ["ali", "gamal", "ali"] },
    { id: 12, m: false, like: false, category: "category5", img: project5, Comments: ["ali", "gamal", "ali"] },
    { id: 13, m: false, like: false, category: "category5", img: project5, Comments: ["ali", "gamal", "ali"] },
  ]);

  const [categories, setCategories] = useState([
    "All projects",
    "UI/UX design",
    "Product Management",
    "Branding Design",
    "Mobile Development",
    "Web Development",
  ]);
  const [uIUX, setUIUX] = useState([]);
  const [product, setProduct] = useState([]);
  const [branding, setBranding] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [web, setWeb] = useState([]);

  useEffect(() => {
    const uIUXArray = arreys.filter((item) => item.category === "category1");
    const productArrey = arreys.filter((item) => item.category === "category2");
    const brandingArrey = arreys.filter((item) => item.category === "category3");
    const mobileArrey = arreys.filter((item) => item.category === "category4");
    const webArrey = arreys.filter((item) => item.category === "category5");
    setUIUX(uIUXArray);
    setProduct(productArrey);
    setBranding(brandingArrey);
    setMobile(mobileArrey);
    setWeb(webArrey);
  }, [arreys]);

  const sl = [arreys, uIUX, product, branding, mobile, web]

  const [show, setShow] = useState(0);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const selectedElement = (index) => {
    setSelectedTaskIndex(index === selectedTaskIndex ? null : index);
    setShow(index);
  };

  const [showSpans, setShowSpans] = useState(null);
  function showSpan(index) {
    setShowSpans(index === showSpans ? null : index);
  }

  // console.log(show)

  // const [inputValue, setInputValie] = useState("");
  // function formMessage(e) {
  //   e.preventDefault();
  //   const newMessage = inputValue;
  //   const updatedArreys = arreys.map((item) => {
  //     if (item.Comments) {
  //       return { Comments: [...item.Comments, newMessage] };
  //     }
  //     return item;
  //   });
  //   setArreys(updatedArreys);
  //   e.target.reset(); // تفريغ الحقول داخل الفورم
  // }

  // const [newFavorites, setNewFavorites] = useState([]);
  const addToFavorites = (id) => {
    const updatedElement = arreys.map((element) => {
      if (element.id === id) {
        return { ...element, m: !element.m };
      }
      return element;
    });
    setArreys(updatedElement)
  }


  function react(id) {
    const updatedreact = arreys.map((element) => {
      if (element.id === id) {
        return { ...element, like: !element.like };
      }
      return element;
    });
    setArreys(updatedreact)
  }

  const[showCalendar, setShowCalendar] = useState(true)

  function FunsHowCalendar() {
    setShowCalendar(!showCalendar)
  }

  return (
    <div className="Home">
      <Header />

      {showCalendar && <div className="opcety"></div>}


      {showCalendar && <Calendar FunsHowCalendar={FunsHowCalendar}/>}
      <div className="home-section">
        <div className="head">
          <h1 className="title-head">Discover Course & Bootcamp</h1>
          <div className="categories">
            {categories.map((e, index) => (
              <p
                className={selectedTaskIndex === index ? "selected" : ""}
                key={index}
                onClick={() => selectedElement(index)}
              >
                {e}
              </p>
            ))}
          </div>
          <span className="calendar" onClick={FunsHowCalendar}><FontAwesomeIcon icon={faCalendar}/></span>
        </div>
        <div className="projects">
            {sl[show].map((e, i) => (
            <div className="project" key={i}>
                <div className="owner">
                  <div>
                    <img src={willKiny} alt="profile" />
                    <p className="owner-name">Will Kiney</p>
                  </div>
                  <div className="icon-part">
                    
                   <i onClick={() => addToFavorites(e.id)}>
                      {e.m ? <FontAwesomeIcon icon={faBookmark} style={{color:"blueviolet"}}/>: <FontAwesomeIcon icon={faBookmark} style={{color:"#777"}}/>}
                    </i>
                    <i className="bmIcon" onClick={() => showSpan(i)}>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </i>
                  </div>
                </div>
                {showSpans === i && (
                  <div className="options">
                    <span className="option">Hide</span>
                    <span className="option">Add to favorite</span>
                    <span className="option">Copy link</span>
                  </div>
                )}
                <p className="project-text">Lorem spanLoremspan</p>

                <NavLink to={"/ProjectDetails"}>
                <img src={e.img} alt="project" />
                </NavLink>

                <div className="react">
                  <div className="icon-color">
                    <i onClick={() => react(e.id)}>
                      {e.like ? <FavoriteOutlinedIcon style={{color: "red"}}/>: <FavoriteOutlinedIcon style={{color:"#777"}}/>}
                      {/* {e.like ? <FontAwesomeIcon icon={faHeart} style={{color:"blueviolet"}}/>: <FontAwesomeIcon icon={faHeart} style={{color:"#777"}}/>} */}
                    </i>
                    {e.like ? <span></span>: <span>react</span>}
                    {e.like ? <span className="slected">+1</span> : null}
                    </div>
                    <div className="icon_color">

                    <NavLink to={"/ProjectDetails"}>
                      <i>
                        <FontAwesomeIcon icon={faMessage} />
                      </i>
                    </NavLink>
                        <p className="react-text">
                        Comments<span>{e.Comments.length}</span>
                        </p>
                    </div>
                </div>
            </div>
            ))}



          {/* {show === 0 &&
            arreys.map((e, i) => (
            <div className="project" key={i}>
                <div className="owner">
                  <div>
                    <img src={willKiny} alt="profile" />
                    <p className="owner-name">Will Kiney</p>
                  </div>
                  <div className="icon-part">
                    
                   <i onClick={() => addToFavorites(e.id)}>
                      {e.m ? <FontAwesomeIcon icon={faBookmark} style={{color:"blueviolet"}}/>: <FontAwesomeIcon icon={faBookmark} style={{color:"#777"}}/>}
                    </i>
                    
                    <i className="bmIcon" onClick={() => showSpan(i)}>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </i>
                  </div>
                </div>
                {showSpans === i && (
                  <div className="options">
                    <span className="option">Hide</span>
                    <span className="option">Add to favorite</span>
                    <span className="option">Copy link</span>
                  </div>
                )}
                <p className="project-text">Lorem spanLoremspan</p>

                <NavLink to={"/project_img"}>
                <img src={project1} alt="project" />
                </NavLink>

                <div className="react">
                  <div className="icon-color">
                    <i onClick={() => react(i)}>
                      {react_color !== i && (
                        <FavoriteOutlinedIcon style={{ color: "#777" }} />
                      )}
                      {react_color === i && (
                        <FavoriteOutlinedIcon style={{ color: "red" }} />
                      )}
                    </i>
                    {react_text !== i && <span>react</span>}
                    {react_text === i && <span></span>}
                    {showSpan_icon === i && <span className="slected">+1</span>}
                    </div>
                    <div className="icon_color">

                    <NavLink to={"/project_img"}>
                      <i onClick={() => ShowMessageForm(i)}>
                        <FontAwesomeIcon icon={faMessage} />
                      </i>
                    </NavLink>
                        <p className="react-text">
                        Comments<span>{e.Comments.length}</span>
                        </p>
                        {showForms === i && (
                        <form onSubmit={formMessage}>
                                {e.Comments.map((Comment) => <p className="Message">{Comment}</p>)}

                                <input onChange={inputMessage} type="text" />
                        </form>
                        )}
                    </div>
                </div>
            </div>
            ))} */}
        </div>
      </div>
    </div>
  );
}
export default Home;


//                 <div className='projects'>
//                     <div className='project' style={{
//                         backgroundColor: isActive ? '#f5f7f7' : '',
//                         color: isActive ? 'white' : '',
//                         }}>
//                         <div className='owner'>
//                             <div className='owner-img'>
//                                 <img src={willKiny} alt="profile" />
//                             </div>
//                             <p className='owner-name'>Will Kiney</p>
//                             <div className='icon-part'>
//                                 <div className='edit edit-book'>
//                                     <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
//                                 </div>
//                                 <div className='edit edit-delete'>
//                                     <i onClick={() => setIsOpen(!isOpen)} onBlur={() => setIsOpen(false)}>
//                                         <FontAwesomeIcon icon={faEllipsisVertical} />
//                                         {isOpen && <div className='settings drop-down'>
//                                         {isOpen && <div className='option drop-line' onClick={handleClick} >Hide
//                                             </div>}
//                                         {isOpen && <div className='option drop-line'>Add to favorite
//                                             </div>}
//                                         {isOpen && <div className='option'>Copy link</div>}
//                                         </div>}
//                                     </i>

//                                 </div>
//                             </div>
//                         </div>
//                         <div className='project-details'>
//                             <p className='project-text'>Lorem spanLoremspan</p>
//                             <div className='project-img'>
//                                 <img src={project1} alt='project' />
//                             </div>
//                         </div>
//                         <div className='react'>
//                             <div className='like'>
//                                 <div className='icon-color'>
//                                     <i>{isActive1? <FavoriteBorderOutlinedIcon  onClick={()=>{
//                                         setIsActive2(!isActive1)}}/>:
//                                     <FavoriteOutlinedIcon  style={{color:'red'}} onClick={()=>{
//                                         setIsActive2(!isActive1)}} />
//                                         }</i>
//                                     <span style={{color:'#696F8C'}}>react</span>
//                                 </div>

//                             </div>
//                             <div className='comment'>
//                                 <div className='icon_color'>
//                                 {/* onClick={()=>setCommentOpen(!commentOpen)} */}
//                                     <i style={{marginTop:-15,}}><FontAwesomeIcon icon={faMessage} /></i>
//                                 </div>
//                                 <div className='number-section'>
//                                     <span>14</span>
//                                     <p className='react-text'>Comments</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Home;

// import { faBookmark, faMessage, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
// import { useState } from 'react';
// import './Home.css';
// import willKiny from '../images/willKiny.png';
// import project1 from '../images/project1.jfif';
// import project2 from '../images/project2.jfif';
// import project4 from '../images/project4.jfif';
// import project5 from '../images/project5.jfif';
// import Header from './Header';
// import Sidebar from './Sidebar';
// // import Comments from './Comments/Comments';
// function Home(){
//      //editing menu
//      const [isOpen, setIsOpen] = useState(false);
//     // const [open, setOpen]=useState(false);
//     // const Menu=['Hide', 'Save as', 'Copy Link'];
//     // const menuRef= useRef();
//     // const divRef= useRef();
//     // window.addEventListener('click', (e) => {
//     //     if(e.target !== menuRef.current && e.target !== divRef.current){
//     //         setOpen(false);
//     //     }
//     // })
//         //icons color
//         //heart icon
//         const [isActive1, setIsActive2] = useState(false);
// // //Define state to keep track of colors for each icon
// //   const [iconColors, setIconColors] = useState({
// //     icon1: '#696F8C',
// //     icon2: '#696F8C',
// //   });
// //    // Function to handle click on an icon
// //     const handleIconClick = (iconId, color) => {
// //        // Update the state with the new color for the clicked icon
// //         setIconColors(prevColors => ({
// //           ...prevColors,
// //           [iconId]: color,
// //         }));
// //       };

//     //  const [background, setBackground] =useState(true);
//     //  const [number, setNumber] =useState(true);
//     //  const count =useRef();
//     //  function love(){
//     //      setNumber(!number)
//     //     setBackground(!background)
//     //  }
//     // const color = background ? '#D9D9D9' : 'red';
//     //const numbers = background ? '' : count.current.value = 1;
//     // //bookmark icon
//     const [backgroundBook, setBackgroundBook] =useState(true);
//     // const bookmark =useRef();
//     function Mark(){
//         setBackgroundBook(!backgroundBook)
//     }
//     const bookColor = backgroundBook ? '#D9D9D9' : 'yellow';
//     // category
//     // const [changeColor, setChangeColor]=useState(false);
//     // const handelClick=() =>{
//     //     setChangeColor(!changeColor)
//     // }
//     //categories color
//     // const [categoryColor, setCategoryColor] = useState('#fff');
//     // const categoryClick = categoryColor =>{
//     //     setCategoryColor(categoryColor)
//     // }
//     // useEffect(()=>{
//     //     document.getElementsByClassName('Category').style.backgroundColor=categoryColor;
//     // },[categoryColor])
//    //hide option
//    const [isActive, setIsActive] = useState(false);
//    const handleClick = () => {
//      // toggle
//      setIsActive(current => !current);
//      // or set to true
//      // setIsActive(true);
//      //comment
//     //  const [commentOpen, setCommentOpen] = useState(false);
//    };
//     return (
//         <div className='Home'>
//                 <Header />
//                {/* <Sidebar /> */}
//             <div className='home-section'>
//                     <div className='content'>
//                         <div className='head'>
//                             <h1 className='title-head'>Discover Course & Bootcamp</h1>
//                             <div className='categories'>
//                                 <div className='category fcategory'>All projects</div>
//                                 <div className='category'>UI/UX design</div>
//                                 <div className='category cat-w'>Product Management</div>
//                                 <div className='category cat-w'>Branding Design</div>
//                                 <div className='category cat-w'>Mobile Development</div>
//                                 <div className='category cat-w'>Web Development</div>
//                             </div>
//                         </div>
//                         {/* style={{
//                                 backgroundColor: isActive ? '#e6f4f7' : '',
//                                 color: isActive ? 'white' : '',
//                                 }} */}
//                         <div className='projects'>
//                             <div className='project' style={{
//                                 backgroundColor: isActive ? '#f5f7f7' : '',
//                                 color: isActive ? 'white' : '',
//                                 }}>
//                                 <div className='owner'>
//                                     <div className='owner-img'>
//                                         <img src={willKiny} alt="profile" />
//                                     </div>
//                                     <p className='owner-name'>Will Kiney</p>
//                                     <div className='icon-part'>
//                                         <div className='edit edit-book'>
//                                            <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
//                                         </div>
//                                         <div className='edit edit-delete'>
//                                             <i onClick={() => setIsOpen(!isOpen)} onBlur={() => setIsOpen(false)}>
//                                                 <FontAwesomeIcon icon={faEllipsisVertical} />
//                                                 {isOpen && <div className='settings drop-down'>
//                                                 {isOpen && <div className='option drop-line' onClick={handleClick} >Hide
//                                                     </div>}
//                                                 {isOpen && <div className='option drop-line'>Add to favorite
//                                                     </div>}
//                                                 {isOpen && <div className='option'>Copy link</div>}
//                                                 </div>}
//                                             </i>

//                                         </div>
//                                         {/* ref={divRef} onClick={()=>setOpen(!open)} */}
//                                         {/* { open && (<div className='settings' id='Setting' ref={menuRef}>
//                                                 <ul>
//                                                     {Menu.map((menu) => (
//                                                     <li onClick={()=> setOpen(false)} className="drop-down"key={menu}>
//                                                         {menu}

//                                                          <div className='drop-line' style={{borderBottomWidth: 1,
//                                                             borderBottomStyle:'solid',borderBottomColor: 'rgb(0, 0, 0)',}}></div>

//                                                     </li>))}
//                                                 </ul>
//                                                 </div>)} */}
//                                     </div>
//                                 </div>
//                                 <div className='project-details'>
//                                     <p className='project-text'>Lorem spanLoremspan</p>
//                                     <div className='project-img'>
//                                         <img src={project1} alt='project' />
//                                     </div>
//                                 </div>
//                                 <div className='react'>
//                                     <div className='like'>
//                                         <div className='icon-color'>
//                                           <i>{isActive1? <FavoriteBorderOutlinedIcon  onClick={()=>{
//                                                 setIsActive2(!isActive1)}}/>:
//                                             <FavoriteOutlinedIcon  style={{color:'red'}} onClick={()=>{
//                                                 setIsActive2(!isActive1)}} />
//                                                 }</i>
//                                             <span style={{color:'#696F8C'}}>react</span>
//                                         </div>

//                                     </div>
//                                     <div className='comment'>
//                                         <div className='icon_color'>
//                                         {/* onClick={()=>setCommentOpen(!commentOpen)} */}
//                                             <i style={{marginTop:-15,}}><FontAwesomeIcon icon={faMessage} /></i>
//                                         </div>
//                                         <div className='number-section'>
//                                             <span>14</span>
//                                             <p className='react-text'>Comments</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* {commentOpen && <Comments />} */}
//                             </div>
//                             <div className='project'>
//                                 <div className='owner'>
//                                     <div className='owner-img'>
//                                         <img src={willKiny} alt="profile" />
//                                     </div>
//                                     <p className='owner-name'>Will Kiney</p>
//                                     <div className='icon-part'>
//                                         <div className='edit edit-book'>
//                                            <i className='bmIcon' onClick={Mark}><FontAwesomeIcon icon={faBookmark} style={{color:bookColor}} /></i>
//                                         </div>
//                                         <div className='edit edit-delete'>
//                                             <i><FontAwesomeIcon icon={faEllipsisVertical} />
//                                             {/* onClick={() => setIsOpen(!isOpen)} onBlur={() => setIsOpen(false)} */}
//                                                 {/* {isOpen && <div className='settings drop-down'>
//                                                 {isOpen && <div className='option drop-line' onClick={handleClick} >Hide
//                                                     </div>}
//                                                 {isOpen && <div className='option drop-line'>Add to favorite
//                                                     </div>}
//                                                 {isOpen && <div className='option'>Copy link</div>}
//                                                 </div>} */}
//                                             </i>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='project-details'>
//                                     <p className='project-text'>Lorem spanLoremspan</p>
//                                     <div className='project-img'>
//                                         <img src={project2} alt='project' />
//                                     </div>
//                                 </div>
//                                 <div className='react'>
//                                     <div className='like'>
//                                         <div className='icon-color'>
//                                             <i><FavoriteBorderOutlinedIcon /></i>
//                                             <span style={{color:'#696F8C'}}> react</span>
//                                         </div>
//                                     </div>
//                                     <div className='comment'>
//                                         <div className='icon_color'>
//                                             <FontAwesomeIcon icon={faMessage} />
//                                         </div>
//                                         <div className='number-section'>
//                                             <span>14</span>
//                                             <p className='react-text'>Comments</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='project'>
//                                 <div className='owner'>
//                                     <div className='owner-img'>
//                                         <img src={willKiny} alt="profile" />
//                                     </div>
//                                     <p className='owner-name'>Will Kiney</p>
//                                     <div className='icon-part'>
//                                         <div className='edit edit-book'>
//                                          <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
//                                         </div>
//                                         <div className='edit edit-delete'>
//                                             <FontAwesomeIcon icon={faEllipsisVertical} />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='project-details'>
//                                     <p className='project-text'>Lorem spanLoremspan</p>
//                                     <div className='project-img'>
//                                         <img src={project2} alt='project' />
//                                     </div>
//                                 </div>
//                                 <div className='react'>
//                                     <div className='like'>
//                                         <div className='icon-color'>
//                                             <i><FavoriteBorderOutlinedIcon /></i>
//                                             <span  style={{color:'#696F8C'}}>react</span>
//                                         </div>
//                                     </div>
//                                     <div className='comment'>
//                                         <div className='icon_color'>
//                                             <FontAwesomeIcon icon={faMessage} />
//                                         </div>
//                                         <div className='number-section'>
//                                             <span>14</span>
//                                             <p className='react-text'>Comments</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='project'>
//                                 <div className='owner'>
//                                     <div className='owner-img'>
//                                         <img src={willKiny} alt="profile" />
//                                     </div>
//                                     <p className='owner-name'>Will Kiney</p>
//                                     <div className='icon-part'>
//                                         <div className='edit edit-book'>
//                                             <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
//                                         </div>
//                                         <div className='edit edit-delete'>
//                                             <FontAwesomeIcon icon={faEllipsisVertical} />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='project-details'>
//                                     <p className='project-text'>Lorem spanLoremspan</p>
//                                     <div className='project-img'>
//                                         <img src={project4} alt='project' />
//                                     </div>
//                                 </div>
//                                 <div className='react'>
//                                     <div className='like'>
//                                         <div className='icon-color'>
//                                             <i><FavoriteBorderOutlinedIcon /></i>
//                                             <span  style={{color:'#696F8C'}}> react</span>
//                                         </div>
//                                     </div>
//                                     <div className='comment'>
//                                         <div className='icon_color'>
//                                             <FontAwesomeIcon icon={faMessage} />
//                                         </div>
//                                         <div className='number-section'>
//                                             <span>14</span>
//                                             <p className='react-text'>Comments</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='project'>
//                                 <div className='owner'>
//                                     <div className='owner-img'>
//                                         <img src={willKiny} alt="profile" />
//                                     </div>
//                                     <p className='owner-name'>Will Kiney</p>
//                                     <div className='icon-part'>
//                                         <div className='edit edit-book'>
//                                            <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
//                                         </div>
//                                         <div className='edit edit-delete'>
//                                             <FontAwesomeIcon icon={faEllipsisVertical} />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='project-details'>
//                                     <p className='project-text'>Lorem spanLoremspan</p>
//                                     <div className='project-img'>
//                                         <img src={project5} alt='project' />
//                                     </div>
//                                 </div>
//                                 <div className='react'>
//                                     <div className='like'>
//                                         <div className='icon-color' id='heartIcon'>
//                                             <i><FavoriteBorderOutlinedIcon /></i>
//                                             <span style={{color:'#696F8C'}}> react</span>
//                                         </div>
//                                         <div className='number-section'>
//                                             <span>15</span>
//                                             <p className='react-text'>Reacts</p>
//                                         </div>
//                                     </div>
//                                     <div className='comment'>
//                                         <div className='icon_color'>
//                                             <FontAwesomeIcon icon={faMessage} />
//                                         </div>
//                                         <div className='number-section'>
//                                             <span>14</span>
//                                             <p className='react-text'>Comments</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='project'>
//                                 <div className='owner'>
//                                     <div className='owner-img'>
//                                         <img src={willKiny} alt="profile" />
//                                     </div>
//                                     <p className='owner-name'>Will Kiney</p>
//                                     <div className='icon-part'>
//                                         <div className='edit edit-book'>
//                                         <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
//                                         </div>
//                                         <div className='edit edit-delete'>
//                                             <FontAwesomeIcon icon={faEllipsisVertical} />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='project-details'>
//                                     <p className='project-text'>Lorem spanLoremspan</p>
//                                     <div className='project-img'>
//                                          <img src={project2} alt='project' />
//                                     </div>
//                                 </div>
//                                 <div className='react'>
//                                     <div className='like'>
//                                         <div className='icon-color'>
//                                             <i><FavoriteBorderOutlinedIcon /></i>
//                                             <span style={{color:'#696F8C'}}> react</span>
//                                         </div>
//                                         <div className='number-section'>
//                                             <span>15</span>
//                                             <p className='react-text'>Reacts</p>
//                                         </div>
//                                     </div>
//                                     <div className='comment'>
//                                         <div className='icon_color'>
//                                             <FontAwesomeIcon icon={faMessage} />
//                                         </div>
//                                         <div className='number-section'>
//                                             <span>14</span>
//                                             <p className='react-text'>Comments</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='project'>
//                                 <div className='owner'>
//                                     <div className='owner-img'>
//                                         <img src={willKiny} alt="profile" />
//                                     </div>
//                                     <p className='owner-name'>Will Kiney</p>
//                                     <div className='icon-part'>
//                                         <div className='edit edit-book'>
//                                         <i className='bmIcon'><FontAwesomeIcon icon={faBookmark} /></i>
//                                         </div>
//                                         <div className='edit edit-delete'>
//                                             <FontAwesomeIcon icon={faEllipsisVertical} />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='project-details'>
//                                     <p className='project-text'>Lorem spanLoremspan</p>
//                                     <div className='project-img'>
//                                         <img src={project2} alt='project' />
//                                     </div>
//                                 </div>
//                                 <div className='react'>
//                                     <div className='like'>
//                                         <div className='icon-color'>
//                                             <i><FavoriteBorderOutlinedIcon /></i>
//                                             <span style={{color:'#696F8C'}}> react</span>
//                                         </div>
//                                     </div>
//                                     <div className='comment'>
//                                         <div className='icon_color'>
//                                             <FontAwesomeIcon icon={faMessage} />
//                                         </div>
//                                         <div className='number-section'>
//                                             <span>14</span>
//                                             <p className='react-text'>Comments</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//         </div>
//     );
// }
// export default Home;
