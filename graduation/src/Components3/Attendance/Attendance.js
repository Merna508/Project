import React, { useEffect } from "react";
import './Attendance.css'
import {faMagnifyingGlass, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../images/about1.jpeg'
import { useState } from "react";
function Attendance (){
    const[level, setLevel] = useState(['One','Tow','Thre','for'])
    const[icon, setIcon] = useState(false)
    const[text, setText] = useState('Thre')
    function handelClick () {
        setIcon(!icon)
    }

    // const[allLactrecs, setAllLactrecs] = useState([,'Lactrec1','Lactrec2','Lactrec3','Lactrec4','Lactrec5','Lactrec6','Lactrec7','Lactrec8','Lactrec9','Lactrec10','Lactrec11','Lactrec12', 'Lactrec12'])


    const [people, setPeople] = useState([
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        {name: 'mohammed rady', img: image, lactrec:[true, true, true, true, true, true, false, false, false, null, null, null, null]},
        // {name: 'mohammed rady', img: 'img', lactrec1:{id: 1, value: true, title: 'Lactrec 1'}, lactrec2:{id: 1, value: true, title: 'Lactrec 2'}, lactrec3:{id: 1, value: true, title: 'Lactrec 3'}}
        // {name: 'mohammed rady', img: 'img', lactrec1:{id: 1, value: true, title: 'Lactrec 1'}, lactrec2:{id: 1, value: true, title: 'Lactrec 2'}, lactrec3:{id: 1, value: true, title: 'Lactrec 3'}},
    ])

// const[nn, setNn] = useState(people[0].lactrec)
// console.log
// const displayElement = (index) => {
//     if(index === 0){
//         setPeople(people.lactrec.slice(0, 5))
//     }
//     if(index === 1){
//         setPeople(people.lactrec.slice(5, 9))
//     }
//     if(index === 2){
//         setPeople(people.lactrec.slice(9))
//     }
//    }
// const[slicedPeople, setSlicedPeople] = useState([])
// const displayElement = (index) => {
//     if(index === 0){
//         setPeople(people.lactrec.splice(0, 5));
//     }
//     if(index === 1){
//         setPeople(people.lactrec.splice(5, 9));
//     }
//     if(index === 2){
//         setPeople(people.lactrec.splice(9));
//     }
//     // console.log(slicedPeople)

// }

    const[showIndex, setShowIndex] = useState([1, 2, 3])
    const[showLactrecs, setShowLactrecs] = useState(0)

    const[activ, setActiv] = useState()
    if(showLactrecs == 3){
        setShowLactrecs(0)
    }
    if(showLactrecs == -1){
        setShowLactrecs(2)
    }
    return(
        <div className="Attendance">
            <div className="search">
                <div>
                    <h3>Student Attendance</h3>
                    <p>All student</p>
                </div>
                <div>
                    <div >
                        <i className='magnifier'><FontAwesomeIcon icon={faMagnifyingGlass} /></i> 
                        <input type="text" className='srch-input' placeholder='search..'/>
                    </div>
                </div>
            </div>
            <div className="header">
                <p>Total Students: <span>207</span></p>
                <p>Total Present: <span>105</span></p>
                <p>Total Absent: <span>102</span></p>
                <div className="box">
                    <div className="level">
                        <p>Level: <span>{text}</span></p>
                        <i onClick={handelClick}><FontAwesomeIcon icon={faChevronRight}/></i>
                    </div>

                    {icon &&
                        <div className="levels">
                            {level.map((e) => 
                                <p onClick={() => (setText(e), setIcon(!icon))}>{e}</p>
                            )}
                        </div>
                    }
                </div>
            </div>
            <div className="Lactrecs">
                <div className="name">
                    <p>Name</p>
                    <div>
                        {showLactrecs === 0 &&<span>{people[0].lactrec.slice(0, 4).map((e, index) => <span>{`Lactrec${index+1}`}</span>)}</span>}
                        {showLactrecs === 1 &&<span>{people[0].lactrec.slice(4, 8).map((e, index) => <span>{`Lactrec${index+5}`}</span>)}</span>}
                        {showLactrecs === 2 &&<span>{people[0].lactrec.slice(8, 12).map((e, index) => <span>{`Lactrec${index+9}`}</span>)}</span>}
                    </div>
                </div>
                <div className="allStudent">
                    {people.map((e) => 
                        <div className="all">
                            <div className="image">
                                <img src={e.img}/>
                                <p>{e.name}</p>
                            </div>
                            <div className="allLactrecs">
                                {showLactrecs === 0 &&<span>{e.lactrec.slice(0, 4).map((e, index) => <span>{e === true && <span style={{backgroundColor: '#32f152', color: '#077118'}}>Present</span>}{e === false && <span style={{backgroundColor: '#FFC5C5', color: 'red'}}>Absent</span>}{e === null && <span style={{backgroundColor: '#C4C4C4', color: 'black'}}>not yet</span>}</span>)}</span>}
                                {showLactrecs === 1 &&<span>{e.lactrec.slice(4, 8).map((e, index) => <span>{e === true && <span style={{backgroundColor: '#32f152', color: '#077118'}}>Present</span>}{e === false && <span style={{backgroundColor: '#FFC5C5', color: 'red'}}>Absent</span>}{e === null && <span style={{backgroundColor: '#C4C4C4', color: 'black'}}>not yet</span>}</span>)}</span>}
                                {showLactrecs === 2 &&<span>{e.lactrec.slice(8, 12).map((e, index) => <span>{e === true && <span style={{backgroundColor: '#32f152', color: '#077118'}}>Present</span>}{e === false && <span style={{backgroundColor: '#FFC5C5', color: 'red'}}>Absent</span>}{e === null && <span style={{backgroundColor: '#C4C4C4', color: 'black'}}>not yet</span>}</span>)}</span>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="Showing">
                <p>Showing all students entries</p>
                <div>
                    <i onClick={ () => setShowLactrecs(showLactrecs-1)}><FontAwesomeIcon icon={faChevronLeft}/></i>
                    {showIndex.map((e, index) => <span key={index} className={showLactrecs === index ? "active" : ""} onClick={() => setShowLactrecs(index)}>{e}</span>)}
                    <i onClick={ () => setShowLactrecs(showLactrecs+1)}><FontAwesomeIcon icon={faChevronRight}/></i>
                </div>
            </div>
        </div>
    )
}
export default Attendance