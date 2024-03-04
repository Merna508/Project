import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Calendar from './Calender';

 function Home(){
    return (<>            
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
                            <Calendar />
                                </div>
                                </div>
                                </>   
                            );
    }                       
export default Home;