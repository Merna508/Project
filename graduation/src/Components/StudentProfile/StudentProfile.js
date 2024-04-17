import React from "react";
import '../StudentProfile/StudentProfile.css'

import Img1 from './shutterstock-640011838 1.svg'
import Img2 from './unsplash_0aMMMUjiiEQ.svg'
import Img3 from './Ellipse 58.svg'
import Img4 from './2.jpg'
import project2 from '../../images/project2.jfif'
import project3 from '../../images/project5.jfif'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH, faEllipsisVertical, faBookmark, faMessage} from "@fortawesome/free-solid-svg-icons";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Header from "../Header";

import { useState, useRef } from "react";


function StudentProfile () {

    const [arreys, setArreys] = useState([
        { id: 0, m: false, like: false, category: "category1", img: project2, Comments: ["ali", "gamal", "ali"] },
        { id: 1, m: false, like: false, category: "category1", img: project2, Comments: ["ali"] },
        { id: 2, m: false, like: false, category: "category1", img: project2, Comments: ["ali", "gamal"] },
        { id: 3, m: false, like: false, category: "category2", img: project2, Comments: ["ali", "gamal", "ali"] },
        { id: 4, m: false, like: false, category: "category3", img: project2, Comments: ["gamal", "ali"] },
        { id: 5, m: false, like: false, category: "category4", img: project2, Comments: ["ali", "gamal", "mohamed"] },
        { id: 6, m: false, like: false, category: "category1", img: project2, Comments: ["ali", "gamal", "gamal"] },
        { id: 7, m: false, like: false, category: "category3", img: project2, Comments: ["ali", "gamal", "ahmed"] },
        { id: 8, m: false, like: false, category: "category3", img: project2, Comments: ["ali", "gamal", "ali"] },
        { id: 9, m: false, like: false, category: "category2", img: project2, Comments: ["ali", "gamal", "ali"] },
        { id: 10, m: false, like: false, category: "category5", img: project2, Comments: ["ali", "gamal", "ali"] },
        { id: 11, m: false, like: false, category: "category5", img: project2, Comments: ["ali", "gamal", "ali"] },
        { id: 12, m: false, like: false, category: "category5", img: project2, Comments: ["ali", "gamal", "ali"] },
        { id: 13, m: false, like: false, category: "category5", img: project2, Comments: ["ali", "gamal", "ali"] },
      ]);
    const divs = [1, 2, 3, 4, 5, 6]

    const [activeDiv, setActiveDiv] = useState('div1')

    const handleDivClick = (divID) =>{
        setActiveDiv(divID)
    }

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
      
     const about = useRef()
    //   window.onscroll = function(){
    //     if(window.scrollY >= 200){
    //         about.current.style.position = 'fixed'
    //         about.current.style.top = '8px'
    //         about.current.style.width = '20%'
    //     }
    //     if(window.scrollY <= 200){
    //         about.current.style.position = 'absolute'
    //         about.current.style.width = '22%'
    //     }
    //  }
    return(
        <div className="container_StudentProfile">
            <Header />
            <div className="countainer_images">
                <img src={Img2} className="image1"/>
                <div className="countainer_image_and_Icon">
                    <div>
                        <img src={Img3} className="image2"/>
                        <p>
                            <h3>Charles Deo</h3>
                            <span>UI/UX Designer</span>
                        </p>
                    </div>
                    <i><FontAwesomeIcon icon={faComments}/></i>
                </div>
            </div>
            <div className="countainer_parent">
                <div className="countainer_About" ref={about}>
                    <h2>About</h2>
                    <p><FontAwesomeIcon icon={faEnvelope}/><span>Male</span></p>
                    <p><FontAwesomeIcon icon={faBirthdayCake}/><span>Born June 26, 1980</span></p>
                    <p><FontAwesomeIcon icon={faFile}/><span>Department of Education Technology</span></p>
                    <p><FontAwesomeIcon icon={faStickyNote}/><span>charles5182@ummoh.com</span></p>
                    <p><FontAwesomeIcon icon={faPhone}/><span>33757005467</span></p>
                </div>
                <div className="countainer_Data">
                    <div className="project_title">
                    <p className={`University_projects  ${activeDiv == 'div1' && 'act'}`}  id="div1" onClick={ () => handleDivClick('div1')}>University Projects</p> 
                    <p className={`University_projects  ${activeDiv == 'div2' && 'act'}`} id="div2" onClick={ () => handleDivClick('div2')}>Personal Projects</p> 
                    </div>

                    {activeDiv == 'div1' ? 

                    <div className="project_API">
                        {arreys.map((e) => (
                            <div className="countainer_API">
                                <div className="hider_API">
                                    <div className="box">
                                        <img src={Img1}/>
                                        <span>Will Kiney</span>
                                    </div>
                                    <div>
                                        <i onClick={() => addToFavorites(e.id)}>
                                            {e.m ? <FontAwesomeIcon icon={faBookmark} style={{color:"blueviolet"}}/>: <FontAwesomeIcon icon={faBookmark} style={{color:"#777"}}/>}
                                        </i>
                                        <i><FontAwesomeIcon icon={faEllipsisVertical}/></i>
                                    </div>
                                </div>
                                <h2>Onboarding Illustrations </h2>
                                <NavLink to={"/ProjectDetails"}>
                                    <img src={e.img} className="box_img"/>
                                </NavLink>
                                <div className="react">
                                    <div className="icon-color">
                                        <i onClick={() => react(e.id)}>
                                        {e.like ? <FavoriteOutlinedIcon style={{color: "red"}}/>: <FavoriteOutlinedIcon style={{color:"#777"}}/>}
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
                    </div>

                    : null }

                    {activeDiv == 'div2' ? 

                    <div className="project_API">
                      {arreys.map((e) => (
                        <div className="countainer_API">
                            <div className="hider_API">
                                <div className="box">
                                    <img src={Img4}/>
                                    <span>Will Kiney</span>
                                </div>
                                <div>
                                    <i onClick={() => addToFavorites(e.id)}>
                                        {e.m ? <FontAwesomeIcon icon={faBookmark} style={{color:"blueviolet"}}/>: <FontAwesomeIcon icon={faBookmark} style={{color:"#777"}}/>}
                                    </i>
                                    <i><FontAwesomeIcon icon={faEllipsisVertical}/></i>
                                </div>
                            </div>
                            <h2>Onboarding Illustrations </h2>
                            <NavLink to={"/ProjectDetails"}>
                                <img src={project3} className="box_img"/>
                            </NavLink>
                            <div className="react">
                                <div className="icon-color">
                                    <i onClick={() => react(e.id)}>
                                    {e.like ? <FavoriteOutlinedIcon style={{color: "red"}}/>: <FavoriteOutlinedIcon style={{color:"#777"}}/>}
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
                    </div>

                  : null}

                </div>
            </div>
        </div>
    )
}
export default StudentProfile