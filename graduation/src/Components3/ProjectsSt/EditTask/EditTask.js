import React from "react";
import "../EditTask/EditTask.css"
import img1 from "./7.jpg";
import { useState, useRef} from "react"
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EditTask(props) {

  const x = useRef()
  const handel = () =>{
    x.current.style.display= "none";
  }

  const [w, setw] = useState(props.defaultValue_name || "");
  function newW(e) {
    const newValue = e.target.value;
    if (newValue) {
      setw(newValue);
    } else {
      setw(props.defaultValue_name || "");
    }
  }

  const [r, setr] = useState(props.defaultValue_Description || "");
  function newR(e) {
    const newValue = e.target.value;
    if (newValue) {
      setr(newValue);
    } else {
      setr(props.defaultValue_Description || "");
    }
  }
  const [c, setc] = useState(props.defaultValue_Color || "");
  function newC(e) {
    const newValue = e.target.value;
    if (newValue) {
      setc(newValue);
    } else {
      setc(props.defaultValue_Color || "");
    }
  }  

  return (
    <div className="add_project" ref={x}>
      <div className="container_hider">
        <div className="hider_add">
          <img src={img1} />
          <div>
            <h2>DR / Mohammed Ramadan</h2>
            <span>Name of the academic subject</span>
          </div>
        </div>
        <i onClick={handel}><FontAwesomeIcon icon={faTimes} /></i>
      </div>
      <div className="container_form">
        <div className="container_span">
          <span></span>
          <span className="m"></span>
          <span></span>
          <span className="m"></span>
          <span></span>
          <span className="m"></span>
          <span></span>
        </div>
        <form>
          <div className="select">
              <select>
              <option>Task Category</option>
              <option value="">Category1</option>
              <option value="">Category2</option>
              <option value="">Category3</option>
              <option value="">Category4</option>
              <option value="">Category5</option>
              </select>
          </div>

          <input type="text" placeholder="Task name" onChange={newW} defaultValue={props.defaultValue_name}  />
          <textarea placeholder="Description" onChange={newR} defaultValue={props.defaultValue_Description } ></textarea>
          <div className="Time_Date">
            <input type="Date" placeholder="Date"/>
            <input type="Time" placeholder="Time"/>
          </div>
          <div className="color">
            <span>Task Color</span>
            <div>
              <input type="color" onChange={newC} defaultValue={props.defaultValue_Color} />
            </div>
          </div>
          <button onClick={(e) => { e.preventDefault(); props.updateTask(props.indexx, w, r, c); }}>send</button>
        </form>
      </div>
    </div>
  );
}
export default EditTask;
