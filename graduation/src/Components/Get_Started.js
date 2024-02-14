import React from 'react';
import style from "./App.module.css";
import './';
import getstartedback from "../images/getstartedback.jpeg";
function Get_Started() {
  return (
  <>
  <div className={`${style.back}`}>
  <div className= {`${style.contact}`}>
            <div className='overflow-hidden'>
            <h3 className='text-white ms-4 '>Edu<span className='text-warning'>era</span></h3>
            <div className='row  mt-5'>
                <div className='form position-relative col-md-6 '>
                    <div className=' mt-5' >
                        <h1 className={`ms-3 ${style.title}`}>Good coaching is <br /> good teaching</h1>
                        <p className={`fw-bold ms-5 mt-5  ${style.paragraph}`}>In a coaching role, you ask the questions and <br /> rely more on your staff, who become the <br /> experts, to provide the information.</p>
                        <button type="button" className={`mt-5  position-absolute top-95 start-50 translate-middle px-5 py-3  ${style.landbtn}`}>Let’s Start</button>
                    </div>
                </div>

                <div className='imageForm col-md-6 '>
                    <div>
                    <button type="button" className={` ${style.loginbtn} position-absolute top-0 end-0 me-5 mt-4 py-2 px-5`}>Login</button>
                        <img src={getstartedback} className={`mt-5 ${style.formImage}`} alt="" />
                    </div>
                </div>
            </div>
            </div>
    </div>
  </div>
  </>
  )
}
export default Get_Started;
