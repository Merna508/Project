import './Home.css';
import './Favorites.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import willKiny from '../images/willKiny.png'


import {
    faBookmark,
    faMessage,
    faEllipsisVertical,
  } from "@fortawesome/free-solid-svg-icons";
  import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
  import { NavLink } from "react-router-dom";

function Favorites (){
  const[arreys, setArreys]= useState( useSelector(state => state.favor.favoritse))
  console.log(arreys)

  function react(id) {
    const updatedreact = arreys.map((element) => {
      if (element.id === id) {
        return { ...element, like: !element.like };
      }
      return element;
    });
    setArreys(updatedreact)
  }

  const addToFavorites = (id) => {
    const updatedElement = arreys.map((element) => {
      if (element.id === id) {
        return { ...element, m: !element.m };
      }
      return element;
    });
    setArreys(updatedElement)
  }

  const [showSpans, setShowSpans] = useState(null);
  function showSpan(index) {
    setShowSpans(index === showSpans ? null : index);
  }

    return(
    <div className='Favorites'>
        <Header />
        <div className="projects">
        {arreys.length == 0 && <p className='not'>There is not favorites</p>}
            {arreys.map((e, i) => (
            <div className="project" key={i}>
                <div className="owner">
                  <div>
                    <img src={willKiny} alt="profile" />
                    <p className="owner-name">Will Kiney</p>
                  </div>
                  <div className="icon-part">
                    
                   <i onClick={() => addToFavorites(e.id)}>
                      {e.m ? <FontAwesomeIcon icon={faBookmark} style={{color:"blueviolet"}}/>: <FontAwesomeIcon icon={faBookmark} style={{color:"#777"}}/>}
                    </i>
                    <i className="bmIcon" onClick={() => showSpan(i)}>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </i>
                  </div>
                </div>
                {showSpans === i && (
                  <div className="options">
                    <span className="option">Hide</span>
                    <span className="option">Add to favorite</span>
                    <span className="option">Copy link</span>
                  </div>
                )}
                <p className="project-text">Lorem spanLoremspan</p>

                <NavLink to={"/ProjectDetails"}>
                <img src={e.img} alt="project" />
                </NavLink>

                <div className="react">
                  <div className="icon-color">
                    <i onClick={() => react(e.id)}>
                      {e.like ? <FavoriteOutlinedIcon style={{color: "red"}}/>: <FavoriteOutlinedIcon style={{color:"#777"}}/>}
                      {/* {e.like ? <FontAwesomeIcon icon={faHeart} style={{color:"blueviolet"}}/>: <FontAwesomeIcon icon={faHeart} style={{color:"#777"}}/>} */}
                    </i>
                    {e.like ? <span></span>: <span>react</span>}
                    {e.like ? <span className="slected">+1</span> : null}
                    </div>
                    <div className="icon_color">

                    <NavLink to={"/ProjectDetails"}>
                      <i>
                        <FontAwesomeIcon icon={faMessage} />
                      </i>
                    </NavLink>
                        <p className="react-text">
                        Comments<span>{e.Comments.length}</span>
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div>

    </div>
    )
}
export default Favorites;