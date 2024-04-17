
import React, { useState,} from "react";
import Img1 from "./shutterstock-640011838 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell,faEllipsisVertical,faTrash,faPen,
} from "@fortawesome/free-solid-svg-icons";
import Add from "./Add/Add"
import EditTask from "./EditTask/EditTask";
import Header from '../../Components/Header'
import "../ProjectsSt/ProjectsSt.css";
import { Link, NavLink } from "react-router-dom";

function ProjectsSt() {
  const [hidan, setHidan] = useState(false);
  const [defaultValue_name, setDefaultValue_Name] = useState("");
  const [defaultValue_color, setDefaultValue_Color] = useState("");
  const [defaultValue_Description, setDefaultValue_Description] = useState("");
  const [number, setNumber] = useState("")
  const [arrey, setArrey] = useState([
    {
      name: "ali",
      Description: "iughrituhtyhethutyueryheiu",
      showIcons: false,
      color: "#7413d6",
    },
    {
      name: "gamal",
      Description: "iughrituhtyhethutyueryheiu",
      showIcons: false,
      color: "#7413d6",
    },
    {
      name: "mohamed",
      Description: "iughrituhtyhethutyueryheiu",
      showIcons: false,
      color: "#7413d6",
    },
    {
      name: "nor",
      Description: "iughrituhtyhethutyueryheiu",
      showIcons: false,
      color: "#7413d6",
    },
  ]);

  const [edit, setEdit] = useState(false);
  const [color, setColor] = useState("");
  const [Description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [Category, setCategory] = useState("");

  function handel() {
    setHidan(!hidan);
  }

  function TaskName(e) {
    setName(e.target.value);
  }

  function TaskDescription(e) {
    setDescription(e.target.value);
  }

  function TaskColor(e) {
    setColor(e.target.value);
  }
  function TaskDate(e) {
    setDate(e.target.value);
  }
  function TaskTime(e) {
    setTime(e.target.value);
  }
  function TaskCategory(e) {
    setCategory(e.target.value);
  }
  
  function addTask(e) {
    e.preventDefault();

    let isError = false;

    if (!name) {
        seterrorName("Error name");
        isError = true;
    } else {
        seterrorName("");
    }

    if (!Description) {
        seterrorDescription("Error Description");
        isError = true;
    } else {
        seterrorDescription("");
    }

    if (!color) {
        seterrorColore("Error color");
        isError = true;
    } else {
        seterrorColore("");
    }

    if (!date || !time) {
        seterrorDate("Error Date & Time");
        isError = true;
    } else {
        seterrorDate("");
    }
    if (!Category) {
        seterrorCategory("Error Category");
        isError = true;
    } else {
        seterrorCategory("");
    }

    if (isError) {
        return;
    }

    const arreys = [
        ...arrey,
        { name: name, Description: Description, showIcons: false, color: color, date: date, time: time, Category: Category },
    ];

    setArrey(arreys);
    setNumber(arreys.length);
    setName("");
    setDescription("");
    setColor("");
    setDate("");
    setTime("");
    setCategory("");
}


  const [errorName, seterrorName] = useState("")
  const [errorDescription, seterrorDescription] = useState("")
  const [errorColore, seterrorColore] = useState("")
  const [errorDate, seterrorDate] = useState("")
  const [errorTime, seterrorTime] = useState("")
  const [errorCategory, seterrorCategory] = useState("")

  const [indexx, setIndexx] = useState("");
  function updateTask(index, name, Description, color) {
    const newArray = [...arrey];
    newArray[index].name = name; 
    newArray[index].Description = Description; 
    newArray[index].color = color;

    setArrey(newArray);
  }

  function icons(index) {
    const newArray = [...arrey];
    newArray[index].showIcons = !newArray[index].showIcons;
    setArrey(newArray);
  }

  function deleteTask(index) {
    setArrey(arrey.filter((_, i) => i !== index));
    setNumber(arrey.length-1);
  }

  function editTask(index) {
    setDefaultValue_Name(arrey[index].name);
    setDefaultValue_Color(arrey[index].color);
    setDefaultValue_Description(arrey[index].Description);
    setEdit(!edit);
    setIndexx(index);
    console.log(indexx);
    console.log(index);
  }

  return (
    <div className="ProjectsSt">
      {hidan && (
        <Add
          TaskName={TaskName}
          TaskDescription={TaskDescription}
          TaskColor={TaskColor}
          TaskDate={TaskDate}
          TaskTime={TaskTime}
          TaskCategory={TaskCategory}
          addTask={addTask}
          d={name}
          f={Description}
          g={color}
          date={date}
          time={time}
          Category={Category}
          // deleteTask={deleteTask}
          // handleBlur={handleBlur}
          errorName={errorName}
          errorDescription={errorDescription}
          errorColore={errorColore}
          errorDate={errorDate}
          errorTime={errorTime}
          errorCategory={errorCategory}
        />
      )}
      {edit && (
        <EditTask
          defaultValue_name={defaultValue_name}
          defaultValue_Color={defaultValue_color}
          defaultValue_Description={defaultValue_Description}
          updateTask={updateTask}
          indexx={indexx}
        />
      )}
      <Header />
      <div className="Sent_projects">
        <h1>Sent projects</h1>
        <div className="content">
          <div className="content_box">
            <p>Post Tasks</p>
          </div>
          <div className="content_level">
            <p>
              Short by : <span>hhhh</span>
            </p>
            <i>&lt; </i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container_projects">
          {arrey.map((elment, index) => 
            <div
              className="box"
              key={index}
              style={{ borderColor: elment.color }}
            >
              <i onClick={() => icons(index)}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </i>
              <NavLink to={"/Proje"}>
                <h2 className="h2">{elment.name}</h2>
                <p className="p">{elment.Description}</p>
              </NavLink>
              {elment.showIcons && (
                <div style={{ backgroundColor: elment.color }}>
                  <span onClick={() => deleteTask(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                  <i className="ic"></i>
                  <span onClick={() => editTask(index)}>
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="container_add">
          <div className="add">
            <button onClick={handel}>+</button>
            <span>Add New project</span>
          </div>
          <div className="text">
            <span>{number} projects added</span>
            <p>The first project was completed by 66% of students</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSt;