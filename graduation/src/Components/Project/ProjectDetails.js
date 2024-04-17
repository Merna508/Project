import React from "react";
import ProjectData from "./ProjectData/ProjectData";
import Img1 from '../../images/about1.jpeg'
import Img2 from '../../images/about2.jpeg'
import Img3 from '../../images/about3.jpeg'
import Img4 from '../../images/about4.jpeg'
import Img5 from '../../images/about5.jpeg'
import '../Project/ProjectDetails.css'
import { useState, useRef } from "react";
import Header from '../Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faTimes, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
// import StudentProfile from "../StudentProfile/StudentProfile";

function Project () {

    const [selectedItem, setSelectedItem] = useState(Img2)
    const [selected, setSelected] = useState(0)


    const imgss = [Img1, Img2, Img3, Img4, Img5]

    const [activ, setActiv] = useState(1)
    function handelImgeClik(image, index){
        setSelectedItem(image)
        setSelected(index + 1)
        setActiv(index)
    }

    const [isVisible, setIsVisible] = useState(true)
    const toogleVisiblity = () =>{
        setIsVisible(!isVisible)
        {isVisible ? hed.current.style.width= '100%': hed.current.style.width= '80%'}

    }
    const hed = useRef(null)

    function back() {
        window.history.go(-1)
    }

    return(
        <div className="Project" >
            <Header />
            <div className="container_icon">
                <i className="icon1" onClick={back}><FontAwesomeIcon icon={faChevronLeft}/></i>
                <i className="icon2" onClick={toogleVisiblity}><FontAwesomeIcon icon={faTimes}/> </i>
            </div>
            <div className="containerr">
                <div className="container_image">
                    <duv className="image_and_aicon">
                        <NavLink to={"/StudentProfile"}>
                            <img src={Img1} /> 
                        </NavLink>
                        <span>Will Kenny</span>
                    </duv>
                    <div className="box_image">
                        <div className="m">
                            <img src={selectedItem} ref={hed}/>
                        </div>
                        <div className="div_counter">
                            <div className="counter">
                                0{selected}<span>/05</span>
                            </div>
                            <div className="div_images">
                                <p>{imgss.map((image, index) => (<img src={image} key={index} className={activ === index ? 'activ' : ''} onClick={() => handelImgeClik(image, index)}/>))}</p>
                            </div>
                        </div> 
                    </div>
                </div>
                {isVisible ?
                <div className="box_data">
                    <ProjectData />
                </div>
                : null}
            </div>
        </div>
    )
}

export default Project
