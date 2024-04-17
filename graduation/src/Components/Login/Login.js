import React from "react";
import './Login.css'
import Imgs from '../Login/4908052_2556572 1.svg'
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagic} from '@fortawesome/free-solid-svg-icons'


function Login (props){

    const focus = useRef()
    useEffect (() =>{
        focus.current.focus()
    })


    return(
        <div className="login">
            <div className="img">
                <div className="x">
                    <span>Edu</span>
                    <span className="s">era</span>
                </div>
                <img src={Imgs} />
                <div className="box_div">
                    <span className="span">Welcome aboard my friend</span>
                    <span>just a couple of clicks and we start</span>
                </div>
            </div>
            <div className="forms">
                <div className="div_form">
                    <span>LOGIN</span>
                    <form>
                        <input type="text" placeholder="Emil" name="emil" ref={focus} />
                        <input type="password" placeholder="Password" name="password"/>
                        <Link to={'/Forget_password'}>
                            <span>Forget password</span>
                        </Link>
                        <button type="submit" onClick={props.invisibility}>Login New</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login