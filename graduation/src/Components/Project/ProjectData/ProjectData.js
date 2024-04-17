import React from "react";
import '../ProjectData/ProjectData.css'
import Img1 from '../ProjectData/shutterstock-640011838 1.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";



function ProjectData (){

    const focus = useRef()
    useEffect (() =>{
        focus.current.focus()
    })

    const [background, setBackground] =useState(true)
    const [number, setNumber] =useState(true)
    const num = useRef()

    function love (){
        setNumber(!number)
        setBackground(!background)
    }

    const color = background ? '#000000' : 'red';
    const numbers = background ? 'Like this' : num.current.value = 1;

    return(
        <div className="Project_details">
            <div className="box_d">
                <h1>Project details</h1>
                <p>
                The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also,
                 there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.
                </p>
            </div>
            <div className="box_data">
                <h2>content information</h2>
                <span>Using App:</span>
                <span>Project details:</span>
                <span>Execution time:</span>
                <h2>Team information</h2>
                <span>Name: </span>
                <span>Individuals: </span>
                <span>Section number: </span>
            </div>
            <div className="x">
                <span>What do you think ?</span>
                <div>
                    <i onClick={love}><FontAwesomeIcon icon={faHeart} style={{color: color}}/></i>
                    <span ref={num}>{numbers}</span>
                </div>
            </div>
            <div className="container_input">
                <div>
                    <img src={Img1} /> 
                    <input type="text" placeholder="Write a comment" ref={focus} />
                </div>
                <i className="icon5"><FontAwesomeIcon icon={faMessage} /></i>
            </div>
        </div>
    )
}
export default ProjectData