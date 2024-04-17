import React from "react";
import "../Add/Add.css";
import img1 from "./7.jpg";
import { useRef } from "react";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Add(props) {
  const x = useRef();
  const handel = () => {
    x.current.style.display = "none";
  };

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
          {props.errorCategory && (
            <p style={{ color: "red" }}>{props.errorCategory}</p>
          )}
          <div className="select">
            <select onChange={props.TaskCategory} value={props.Category}>
              <option className="op">Task Category</option>
              <option value="Category1">Category1</option>
              <option value="Category2">Category2</option>
              <option value="Category3">Category3</option>
              <option value="Category4">Category4</option>
              <option value="Category5">Category5</option>
            </select>
          </div>
          {props.errorName && <p style={{ color: "red" }}>{props.errorName}</p>}
          <input
            type="text"
            placeholder="Task name"
            onChange={props.TaskName}
            value={props.d}
          />

          {props.errorDescription && (
            <p style={{ color: "red" }}>{props.errorDescription}</p>
          )}
          <textarea
            placeholder="Description"
            onChange={props.TaskDescription}
            value={props.f}
          ></textarea>

          {props.errorDate && <p style={{ color: "red" }}>{props.errorDate}</p>}
          {props.errorTime && <p style={{ color: "red" }}>{props.errorTime}</p>}
          <div className="Time_Date">
            <input type="Date" onChange={props.TaskDate} value={props.date} />
            <input type="Time" onChange={props.TaskTime} value={props.time} />
          </div>

          {props.errorColore && (
            <p style={{ color: "red" }}>{props.errorColore}</p>
          )}
          <div className="color">
            <span>Task Color</span>
            <div>
              <input type="color" onChange={props.TaskColor} />
            </div>
          </div>
          <button onClick={props.addTask}>send</button>
        </form>
      </div>
    </div>
  );
}
export default Add;
