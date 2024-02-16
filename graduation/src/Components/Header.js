import './Header.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {faMagnifyingGlass, faBell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alex from '../images/Alex.jfif';
import Edward from '../images/Edward.jfif';
import Maria from '../images/Maria.jfif';
import profilepic from '../images/profilepic.png';
function Header(){
      //notification
      const [show, setShow] = useState(false);
      function Notify(){
          setShow(!show)
      } 
      const [data,setData]=useState([]);
      const [records,setRecords]=useState([]);
      useEffect(()=>{
        axios.get("http://localhost:8000/").then(res=> {
            setData(res.data)
            setRecords(res.data);
        })
        .catch(err => console.log(err));
      },[])
      const Filter =(event) =>{
        setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
      }
   return(
    <div className='header'>
    <div className='search'>
            <form className='frm'>
                <div className='flex'>
                    <i className='magnifier'><FontAwesomeIcon icon={faMagnifyingGlass} /></i> 
                   <p className='place'>search..</p>
                   </div>
                <input type="text" className='srch-input' name="search" onChange={Filter}/>
                {/* {records.map((d))} */}
            </form>
            </div>
            <div className='profile'>
                            <p className='reg'>Registered</p>
                            <div className='profile-img'>
                                <img src={profilepic} alt="profile" />
                            </div>
                            <div className='icon1'>
                                <i style={{color:'#787486'}} onClick={Notify}><FontAwesomeIcon icon={faBell} size='2x' /></i>
                                <div className='circle'>34</div>
                                {show ? <div className='notification' style={{backgroundColor:'#fff',width:410,height: 900,position:'absolute',display:'block',zIndex:'1',right:-82,top:35,borderRadius:10,boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.19)',}}>
                                    <div className='notify-head' style={{display:'flex',padding:10,height:50,}}>
                                        <p className='notify-title' style={{color:'#000',fontSize:'16px'}}>Notifications</p>
                                        <p className='Mark' style={{marginLeft: 190,color:'#7513D6'}}>Mark all as read</p>
                                    </div>

                                    <div className='notify-end' style={{borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#696F8C'}}></div>
                                    <div className='notify-content' style={{background:"#edf",borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#696F8C',padding:'0PX',height:120}}>
                                        <div className='notify-img'>
                                            <img src={Alex} alt='profile' style={{borderRadius:'50%',width:42,height:43,marginRight: 40,marginLeft:-280,marginTop: 20,}}/>
                                        </div>
                                        <div className='notify-text'>
                                            <p className='notify-person' style={{marginTop:-50,marginLeft:-160,color:'#000'}}>Alex Carpena</p>
                                            <div className='notify-sentence' style={{display:'flex'}}>
                                                <div className='notify-line' style={{borderLeftStyle:'solid',borderLeftColor:'#7513D6',borderBottomWidth:3,height:33,padding:5,marginLeft:85,}}></div>
                                                <div className='notify-child'>
                                                    <p className='notify-txt' style={{color:'#000'}}>
                                                        Alex Carpena liked your post.
                                                    </p>
                                                    <span className='notify-time' style={{marginLeft:-137,marginBottom:10,fontSize:14,}}>8 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='notify-content' style={{borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#696F8C'}}>
                                        <div className='notify-img'>
                                            <img src={Edward} alt='profile' style={{borderRadius:'50%',width:42,height:43,marginRight: 40,marginLeft:-280,marginTop: 20,}}/>
                                        </div>
                                        <div className='notify-text'>
                                            <p className='notify-person' style={{marginTop:-50,marginLeft:-160,color:'#000'}}>Edward Curr</p>
                                            <div className='notify-sentence' style={{display:'flex'}}>
                                                <div className='notify-line' style={{borderLeftStyle:'solid',borderLeftColor:'#7513D6',borderBottomWidth:3,height:33,padding:5,marginLeft:85,}}></div>
                                                <div className='notiry-child'>
                                                    <p className='notify-txt' style={{color:'#000'}}>
                                                     Edward commented on your post.
                                                    </p>
                                                    <span className='notify-time' style={{marginLeft:-155,marginBottom:10,fontSize:14,}}>10 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='notify-content' style={{borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#696F8C'}}>
                                        <div className='notify-img'>
                                            <img src={Maria} alt='profile' style={{borderRadius:'50%',width:42,height:43,marginRight: 40,marginLeft:-280,marginTop: 20,}}/>
                                        </div>
                                        <div className='notify-text'>
                                            <p className='notify-person' style={{marginTop:-50,marginLeft:-180,color:'#000'}}>Maria Hill</p>
                                            <div className='notify-sentence' style={{display:'flex'}}>
                                                <div className='notify-line' style={{borderLeftStyle:'solid',borderLeftColor:'#7513D6',borderBottomWidth:3,height:33,padding:5,marginLeft:85,}}></div>
                                                <div className='notiry-child'>
                                                    <p className='notify-txt' style={{color:'#000'}}>
                                                         Maria Hill sent you  a message.
                                                    </p>
                                                    <span className='notify-time' style={{marginLeft:-137,marginBottom:10,fontSize:14,}}>18 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='notify-content' style={{borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#696F8C'}}>
                                        <div className='notify-img'>
                                            <img src={Maria} alt='profile' style={{borderRadius:'50%',width:42,height:43,marginRight: 40,marginLeft:-280,marginTop: 20,}}/>
                                        </div>
                                        <div className='notify-text'>
                                            <p className='notify-person' style={{marginTop:-50,marginLeft:-180,color:'#000'}}>Maria Hill</p>
                                            <div className='notify-sentence' style={{display:'flex'}}>
                                                <div className='notify-line' style={{borderLeftStyle:'solid',borderLeftColor:'#7513D6',borderBottomWidth:3,height:33,padding:5,marginLeft:85,}}></div>
                                                <div className='notiry-child'>
                                                    <p className='notify-txt' style={{color:'#000'}}>
                                                    Maria Hill sent you  a message.
                                                    </p>
                                                    <span className='notify-time' style={{marginLeft:-137,marginBottom:10,fontSize:14,}}>18 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className='notify-content' style={{borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#696F8C'}}>
                                        <div className='notify-img'>
                                            <img src={Maria} alt='profile' style={{borderRadius:'50%',width:42,height:43,marginRight: 40,marginLeft:-280,marginTop: 20,}}/>
                                        </div>
                                        <div className='notify-text'>
                                            <p className='notify-person' style={{marginTop:-50,marginLeft:-180,color:'#000'}}>Maria Hill</p>
                                            <div className='notify-sentence' style={{display:'flex'}}>
                                                <div className='notify-line' style={{borderLeftStyle:'solid',borderLeftColor:'#7513D6',borderBottomWidth:3,height:33,padding:5,marginLeft:85,}}></div>
                                                <div className='notiry-child'>
                                                    <p className='notify-txt' style={{color:'#000'}}>
                                                    Maria Hill sent you  a message.
                                                    </p>
                                                    <span className='notify-time' style={{marginLeft:-137,marginBottom:10,fontSize:14,}}>20 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> : null}
                            </div>  
                            <div className='clear'></div>
                        </div>
                    </div>
            
   ); 
}
export default Header;