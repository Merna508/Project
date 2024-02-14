import React from 'react'
import style from "../src/App.module.css"   
function Forget_pass() {
  return (
   <>
   <div className={`${style.back}`}>
   <div className= {`${style.contact} `}>
            <div className='overflow-hidden'>
            <h3 className='text-white ms-4 mt-4'>Edu<span className='text-warning'>era</span></h3>
            <div className='row gx-5 mt-5'>
                <div className='col-md-7 '>
                    <div className=' mt-2' >
                        <h1 className={`ms-3 mb-5 ${style.title}`}>How do you get your <br /> password?</h1>
                        <p className={` ms-5 my-5  ${style.paragraph}`}>To navigate through the sections, click on <br /> the pages found on the top left of Figma.</p>
                        <p className={` ms-5 my-5  ${style.paragraph}`}>You can find the UI Screens on the Screens <br /> Page.</p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className={` bg-white w-75 p-1 rounded-4 `} >
                        <div className={`${style.titleForm} text-white fw-bold py-2 px-2 d-flex justify-content-between align-items-center rounded-4 `}>
                            <i class="fa-solid fa-gear"></i>
                            <div>
                                <span>Setting</span>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>

                        <div className={`${style.formInfo} px-4 pb-4 mt-5  `}>
                            <h6 className={` px-2 py-1 ${style.titleLable}`}>Mimi Headline</h6>

                            <div className='my-3'>
                                <div className='d-flex justify-content-between pb-2'>
                                    <span>Edit Profile</span>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    <span>Edit Profile</span>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>

                            <h6 className={` px-2 py-1 ${style.titleLable}`}>Edit email</h6>

                            <div>
                                <label>Username</label>
                                <input className='form-control' type="text" />

                                <label className='mt-2'>Email I’d</label>
                                <input className='form-control' type="text" />

                                <label className='mt-2'>Password</label>
                                <input className='form-control' type="text" />
                            </div>
                        </div>
                    </div>
                    <p className={`${style.added}`}>Lorem!</p>
                </div>
            </div>
            </div>
        </div>
   </div>
   </>
  );
}

export default Forget_pass;
