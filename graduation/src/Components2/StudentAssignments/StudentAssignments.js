
import React, { useState, useEffect } from "react";
import "../StudentAssignments/StudentAssignments.css";
import image1 from "./Group 1171274958.svg";
import image2 from "./container.svg";
import Img1 from "./shutterstock-640011838 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCloudUpload, faUser, faCode, faPen, faLandMineOn, faYen } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header";
import { NavLink } from "react-router-dom";

function StudentAssignments() {
  const [arrey, setArrey] = useState([{category: 'category1'}, {category: 'category2'}, {category: 'category3'}, {category: 'category4'}, {category: 'category1'}]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [isTaskSelected, setisTaskSelected] = useState(false)

  const showTask = (index) => {
    setSelectedTaskIndex(index === selectedTaskIndex ? null : index);
    setisTaskSelected(true)
  };

  return (
    <div className="StudentAssignments">
      <Header />
      <div className="container_image">
        <img src={image2} className="image2" alt="container" />
        <img src={image1} className="image1" alt="group" />
      </div>
      <div className="container_content">
        <div className="container_tasks">
          <h2>Recent Activities</h2>
          {arrey.map((item, index) => (
            <div className={"tasks" + (isTaskSelected && selectedTaskIndex === index ? " selected" : "")} key={index}>
              <div className="tasks_data" onClick={() => showTask(index)}>
                <span>
                  {item.category === 'category1' && <FontAwesomeIcon icon={faCode}/>}
                  {item.category === 'category2' && <FontAwesomeIcon icon={faPen}/>}
                  {item.category === 'category3' && <FontAwesomeIcon icon={faLandMineOn}/>}
                  {item.category === 'category4' && <FontAwesomeIcon icon={faYen}/>}
                </span>
                <span>Entag Sowar</span>
                <span>10:45:16 AM</span>
                <i className="icon"></i>
                <span>10 October</span>
                <span>Not Completed</span>
              </div>
              {selectedTaskIndex === index && (
                <div className="show_div">
                  <div className="Descreption">
                    <i><FontAwesomeIcon icon={faUser}/></i>
                    <p>DescreptionDescreptionDescreption DescreptionDescreptionptionDescreption DescreptionDesc</p>
                  </div>
                  <div className="Upload">
                    <p>Days Left for deadline</p>
                    <NavLink to={'/Upload'}>
                      <a>Upload <FontAwesomeIcon icon={faCloudUpload}/></a>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="feedback">
          <h2>Project feedback</h2>
          <p>Congratulations, you got (<span>8</span>) out of (<span>10</span>) on the (<span>project name</span>) project.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor mauris dignissim consequat odio egestas pellentesque pharetra. Sed praesent eget urna pellentesque. Elementum phasellus mauris porta a et. Urna, mi accumsan, lacus in. Sed semper egestas consequat, et aliquet augue elementum a cursus. Velit purus urna, consectetur commodo, diam.</p>
        </div>
      </div>
    </div>
  );
}
export default StudentAssignments;
