import React, { useState, useEffect, useRef } from "react";
import "../Calendar/Calendar.css";
import image from '../../images/about1.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { avatarClasses } from "@mui/material";

function Calendar(props) {

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 60); // تحديث كل دقيقة

    return () => clearInterval(intervalId); // تنظيف المؤقت عندما يتم إزالة المكون
  }, []); // استدعاء useEffect فقط عندما يتم تحميل المكون لأول مرة


  const Week = [["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",'',], 
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",'', '', '', ''],
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",'', '', '', '', ''], 
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",''],  
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",'', '', ''], 
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",'', '', '', '', '', ''], 
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",''], 
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",'', '', '', ''], 
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",'', ''], 
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",'', '', '', '', ''], 
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]];
  const Month = ["January","February","September","April","May","June","July","August","September","October","November","December",];
  const days = [
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
  ];
  const [currentIndexDay, setCurrentIndexDay] = useState(date.getDay())
  const IndexDay = date.getDay()
  const [currentIndexWeek, setCurrentIndexWeek] = useState(date.getMonth())
  const currentIndexW = date.getMonth()
  const currentIndexMonth = date.getDate();
  const [FullYear, setFullYear] = useState(date.getFullYear())
  const FullYe = date.getFullYear();
  const Hours = date.getHours();
  const Minutes = date.getMinutes();
  const Seconds = date.getSeconds();

  const currentMonth = Month[currentIndexWeek];
  const WeekMonth = Week[currentIndexDay];
  const daysInMonth = days[currentIndexWeek][currentIndexMonth];


  const APIdata = [
    [
      {img: image, name: 'Mohamed Rmadan', material: 'sor', staetTime: 8, endTime: 9},
      {img: image, name: 'Mohamed Rmadan', material: 'sor', staetTime: 9, endTime: 11},
      {img: image, name: 'Mohamed Rmadan', material: 'sor', staetTime: 11, endTime: 12},
    ],
    [
      {img: image, name: 'ali Rmadan', material: 'entag sor', staetTime: 8, endTime: 9},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 10, endTime: 11},
      {img: image, name: 'Mohamed gamal', material: 'entag ', staetTime: 11, endTime: 12},
      {img: image, name: 'Mohamed gamal', material: 'entag ', staetTime: 15, endTime: 16},

    ],
    [
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 8, endTime: 9},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 9, endTime: 10},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 10, endTime: 12},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 12, endTime: 1},
    ],
    [
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 8, endTime: 9},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 10, endTime: 12},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 13, endTime: 18},
    ],
    [
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 8, endTime: 9},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 10, endTime: 12},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 14, endTime: 16},
    ],
    [
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 15, endTime: 20},
    ],
    [
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 8, endTime: 9},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 9, endTime: 10},
      {img: image, name: 'Mohamed Rmadan', material: 'entag sor', staetTime: 12, endTime: 15},
    ],
  ]

  const ddd = [,,,,,,,,"8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm",,,]

  const addMonth = () => {
    if(currentIndexWeek !== 11){
      setCurrentIndexWeek(currentIndexWeek + 1)
    }else{
      setCurrentIndexWeek(0)
      setFullYear(FullYear + 1)
    } 
  }

    function deleteMonth() {
      if(currentIndexWeek !== 0){
        setCurrentIndexWeek(currentIndexWeek - 1)
      }else{
        setCurrentIndexWeek(11)
      setFullYear(FullYear - 1)
      } 
    }
    // const[nn, setNn] = useState(0)
  return (
    <div className="Calendar">
      <p onClick={props.FunsHowCalendar} className="p"><FontAwesomeIcon icon={faChevronRight}/></p>
    {/* <div className="Calendar" style={{right: `${-nn}px`}}> */}
      {/* <p onClick={ () => (props.FunsHowCalendar ,setNn(500))} className="p"><FontAwesomeIcon icon={faChevronRight}/></p> */}
        <div className="Week">
          <div className="date_time">
            <div className="date">
              <p>{currentMonth}</p>
              <p>{FullYear}</p>
            </div>
            <div className="time">
              <p>{Hours}</p><span>:</span>
              <p>{Minutes}</p><span>:</span>
              <p>{Seconds}</p>
              <div className="icon">

              <span><FontAwesomeIcon icon={faChevronLeft} onClick={deleteMonth}/></span>
              <span><FontAwesomeIcon icon={faChevronRight} onClick={addMonth}/></span>
              </div>
            </div>
          </div>
          <div className="box">
            {Week[currentIndexWeek].map((day, index) => (
              <>
                {index === currentIndexDay && currentIndexWeek ===  currentIndexW && FullYear === FullYe ? <p onClick={() => setCurrentIndexDay(index)} className="activ" key={day}>{day}</p> : <p className="noactiv"onClick={() => setCurrentIndexDay(index)} key={day}>{day}</p>}
              </>
            ))}

            {days[currentIndexWeek].map((day, index) => (
              <>
                {day === currentIndexMonth && currentIndexWeek ===  currentIndexW && FullYear === FullYe? <p className="activs" key={day}>{day}</p> : <p className="noactivs" key={day}>{day}</p>}
                {/* {day === currentIndexMonth && currentIndexWeek ===  currentIndexW && FullYear === FullYe? <p onClick={() => setCurrentIndexDay(index)} className="activs" key={day}>{day}</p> : <p onClick={() => setCurrentIndexDay(index)} className="noactivs" key={day}>{day}</p>} */}
              </>
            ))}

            <span className="Todays_Lectures">Todays Lectures</span>
          </div>

          <div className="Lectures">
            <div className="div" style={{marginTop:`${((Hours * 60) - 480) + Minutes}px`}}>
            <span className="span">
              {Minutes}:{Seconds}
            </span>
            </div>
            <div className="hours_Lectures">
              {ddd.map((e, index) => 
              <>
                {Hours === index ? <span style={{background: 'blue', color: 'white'}} >{e}</span> : <span>{e}</span> }
              </>
              )}
            </div>
            <div>
  
              {APIdata[currentIndexDay].map((e) => 
              <>
                { Hours >= e.staetTime &&  Hours < e.endTime && currentIndexDay == IndexDay && currentIndexWeek ===  currentIndexW && FullYear === FullYe  ? <div className="Lectures_active" style={{height: (e.endTime - e.staetTime) * 60, marginTop: (e.staetTime - 8) * 60}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>
                </div> : e.staetTime === 8 ? <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: (e.staetTime - 8) * 60}}>
                  <img src={e.img}/>
                  <img src={e.fri}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>     
                </div> : e.staetTime === 9 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '60px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 10 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '120px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 11 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '180px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 12 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '240px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 13 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '300px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 14 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '360px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 15 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '420px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 16 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '480px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 17 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '540px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 18 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '600px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime ===19 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '660px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : e.staetTime === 20 ?  <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '720px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.endTime - e.staetTime} Hours</p>   
                  </div> : <div className="Lectures_noactive" style={{height: (e.endTime - e.staetTime) * 60, marginTop: '100px'}}>
                  <img src={e.img}/>
                  <p>{e.name}</p>
                  <p>{e.material}</p>
                  <p>{e.staetTime}</p>      
                  <p>{e.endTime}</p>
                  </div>}
                </>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Calendar;
