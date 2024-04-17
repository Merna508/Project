import React from "react";
import './ProjectDetails.css'
import { useState } from "react";
import image from '../../images/2.jpg'
import image2 from '../../images/about1.jpeg'
import image3 from '../../images/about2.jpeg'
import image4 from '../../images/about3.jpeg'
import image5 from '../../images/about4.jpeg'
import drive from '../../images/google-drive 1.png'
import Header from '../../Components/Header'
import {
    faCalendar,
    faHourglass,
    faTimes
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectDetails (){
    const[number, setNumber] = useState(null)
    const Projects = [
        {id: 1,name: 'ali', rating: null, imgProject: [image, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35 am', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Ramadan', imgDR:image5, teamName: 'Ahmed'},
        {id: 2,name: 'ali', rating: null, imgProject: [image4, image3, image, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '3:35 am', data: '15 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @ali  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Ramadan', imgDR:image5, teamName: 'Ahmed'},
        {id: 3,name: 'ali', rating: null, imgProject: [image2, image3, image5, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '5:35 pm', data: '30 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @gamal @sara  @merna  @gamal', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Ramadan', imgDR:image5, teamName: 'Ahmed'},
        {id: 4,name: 'ali', rating: null, imgProject: [image, image2, image4, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '2:35 am', data: '10 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@mohammed  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Ramadan', imgDR:image3, teamName: 'Ahmed'},
        {id: 5,name: 'ali', rating: null, imgProject: [image4, image2, image5, image3, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '8:35 pm', data: '11 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Ramadan', imgDR:image3, teamName: 'Ahmed'},
        {id: 6,name: 'ali', imgProject: [image3, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '9:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
        {id: 7,name: 'ali', imgProject: [image2, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
        {id: 8,name: 'ali', imgProject: [image3, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
        {id: 9,name: 'ali', imgProject: [image4, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
        {id: 10,name: 'ali', imgProject: [image, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
        {id: 11,name: 'ali', imgProject: [image, image2, image4, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
        {id: 12,name: 'ali', imgProject: [image, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
        {id: 13,name: 'ali', imgProject: [image, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
        {id: 14,name: 'ali', imgProject: [image, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
        {id: 15,name: 'ali', imgProject: [image, image2, image3, image4, image5], description: 'Careers Page UI Screens Careers Page UI Screens Careers Page UI Screens', time: '7:35', data: '22 April 2024', executionTim: 'tow days', duration: '2 m', UsingApp: 'Adobe Animate', Individuals: '@sara  @merna  @shahd ', SectionNumber: 4, link: 'https://google.com', nameDR: 'Mohammed Rmdan', imgDR:image3, teamName: 'Ahmed'},
    ]
    console.log(Projects[0])
    const[activ, setActiv] = useState(0)
    const[emage, setEmage] = useState(0)
    const[value, setValue] = useState(Projects[0])
    // const[number, setNumber] = useState(null)
    console.log(number)

    // assess
    const[assess, setAssess] = useState([1,2,3,4,5,6,7,8,9,10])
    const[show, setShow] = useState(false)

    return(
        <div className="ProjectDetails">
            <Header />
            {show && <div className="op"></div>}
                <duv className="projectss">
                    {Projects.map((e, index) => 
                        <div key={index} className={`project ${activ === index ? "active" : ""}`} onClick={ () => {setActiv(index); setValue(e)}}>
                            <span>{e.rating}</span>
                            <img src={e.imgProject[0]}/>
                            <div className="container">
                                <div className="name">
                                    <p className="p">{e.name}</p>
                                    <p>{e.description}</p>
                                </div>
                                <div className="time">
                                    <p>{e.time}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </duv>
                <duv className="evaluation">
                        <img src={value.imgProject[emage]}/>
                        <div>
                            {value.imgProject.map((e, index) => 
                                <img className="img2"src={e} onClick={() => setEmage(index)}/>
                            )}
                        </div>
                        <div className="box">
                            <div className="data">
                                <div>
                                    <h2>Project details</h2>
                                    <p>{value.description}</p>
                                </div>
                                <div>
                                    <h2>Content information</h2>
                                    <p>Using App  :<span>{value.UsingApp}</span></p>
                                    <p>Project duration  :<span>{value.duration}</span></p>
                                    <p>execution time  :<span>{value.executionTim}</span></p>
                                </div>
                                <div>
                                    <h2>Team Information</h2>
                                    <p>name :<span>team name </span></p>
                                    <p>Individuals :<span>{value.Individuals}</span></p>
                                    <p>Section number :<span>{value.SectionNumber}</span></p>
                                </div>
                            </div>
                            <div className="Assignments">
                                <div className="div1">
                                    <a href={value.link}>
                                    <img src={drive}/>
                                    {value.link}
                                    </a>
                                </div>
                                <div className="div2">
                                    <img src={value.imgDR}/>
                                    <p>DR/ {value.nameDR}</p>
                                </div>
                                <div className="div3">
                                    <h2>Assignments</h2>
                                    <p><i><FontAwesomeIcon icon={faCalendar}/></i>{value.data} </p>
                                    <p><i><FontAwesomeIcon icon={faHourglass}/></i>{value.time}</p>
                                </div>
                                <button onClick={() => setShow(!show)}>Project Evaluation</button>
                            </div>
                        </div>
               
                {show && 
                    // <div className="assess">
                    <div className="assess">
                        <div className="head">
                            <span>Student's grade</span>
                            <span className="span" onClick={() => setShow(!show)}><FontAwesomeIcon icon={faTimes}/></span>
                        </div>
                        <div className="content">
                            <div>
                                {assess.map((e, index) => 
                                <span key={index} className="range">{number === index ? <span className="active" onClick={() => setNumber(index)}>{e}</span> : <span onClick={() => setNumber(index)}>{e}</span>}</span> 
                                )}
                            </div>
                            <p>The rating for this project is <span>{number+1}</span> out of <span>10</span></p>
                            <p className="p"> team name :  <span>{value.teamName}</span></p>
                            <p className="p"> Individuals : <span>{value.Individuals}</span> </p>
                            <textarea placeholder="feedback"></textarea>
                            <button onClick={() => setShow(!show)}>evaluation</button>
                        </div>
                    </div>
               }
             </duv>
        </div>
    )
}
export default ProjectDetails