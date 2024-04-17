import React, {useState, useCallback} from "react";
import '../Upload/Upload.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useDropzone} from 'react-dropzone'

function Upload () {
    const [categories, setCategories] = useState([
        "UI/UX design",
        "Product Management",
        "Branding Design",
        "Mobile Development",
        "Web Development",
      ]);


      const[errorImage, setErrorImage] = useState();
      const[errorFile, setErrorFile] = useState();

      const[images, setImages] = useState([]);
      const onDrop = useCallback((acceptedFiles) => {
        const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image/'));
        
        if (imageFiles.length > 0) {
            if (images.length + imageFiles.length <= 5) {
                setImages(prevImages => [
                    ...prevImages,
                    ...imageFiles.map(file => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    }))
                ]);
            } else {
                setErrorImage(' You can set an error state or display a message to the user عدد الصور يكون 5')
            }
        } else {
            setErrorFile('You can set an error state or display a message to the user صور لا غير')
        }
    }, [images]);
    const {getRootProps, getInputProps} = useDropzone({onDrop})



    const text = 'choose task type'
    const[icon, setIcon] = useState(false)
    function handelClick() {
        setIcon(!icon)
    }

  const[taskName, setTaskName] = useState()
  const[tasURL, setTaskURL] = useState()
  const[taskType, setTaskType] = useState()
  const[Descraption, setDescraption] = useState()
    const Data = {
        image: images,
        taskName: taskName,
        taskType: taskType,
        tasURL: tasURL,
        Descraption: Descraption,
    }
    console.log(Data)

   const ResetInputs = () => {
        setTaskName(""); // مسح قيمة الاسم
        setDescraption(""); // مسح قيمة الوصف
        setTaskURL(""); // مسح قيمة رابط المشروع
        setTaskType(""); // مسح قيمة نوع المهمة
        setImages([]); // مسح قائمة الصور
    };

    const[errorname, seterrorName] = useState()
    const[errordescription, seterrorDescription] = useState()
    const[errorcategory, seterrorCategory] = useState()
    const[errorimage, setErrorimage] = useState()
    const[errorurl, seterrorURL] = useState()

    function UploadTask(e) {
        e.preventDefault();
    
        let isError = false;
    
        if (!taskName) {
            seterrorName("Error name");
            isError = true;
        } else {
            seterrorName("");
        }
    
        if (!Descraption) {
            seterrorDescription("Error Description");
            isError = true;
        } else {
            seterrorDescription("");
        }
        if (!images.length) {
            setErrorimage("Error color");
            isError = true;
        } else {
            setErrorimage("");
        }

        if (!tasURL) {
            seterrorURL("Error Date & Time");
            isError = true;
        } else {
            seterrorURL("");
        }
        if (!taskType) {
            seterrorCategory("Error Category");
            isError = true;
        } else {
            seterrorCategory("");
        }
    
        if (isError) {
            return;
        }
    
        ResetInputs()
    }
    return(
        <div className="Upload">
            <form className="container">
                <div className="Add_project">
                    <h3>Add project photo</h3>
                    {errorimage && <p className="error" >{errorimage}</p>}
                    {errorFile && <p className="error" >{errorFile}</p>}
                    {errorImage && <p className="error" >{errorImage}</p>}
                    <div className="add">
                        {images.map((file, index) => (
                                <img key={index} src={file.preview}/>
                        ))}
                    </div>
                    <div className="add">
                        <i><FontAwesomeIcon icon={faCloudUpload}/></i>
                        <p {...getRootProps()}>Drag and drop files to upload</p>
                        <span>RO</span>
                        <span className="span"{...getRootProps()}>Browse</span>
                    </div>
                </div>
                <div className="project_data">
                    {errorname && <p className="error" >{errorname}</p>}
                    <input type="text" placeholder="Task Name" onChange={(e) => setTaskName(e.target.value)} value={taskName}/>
                    {errorcategory && <p className="error" >{errorcategory}</p>}
                    <div className="box">
                        <div className="heade">
                            <span>{taskType ? taskType : text}</span>
                            <i onClick={handelClick}><FontAwesomeIcon icon={faChevronRight}/></i>
                        </div>
                        {icon &&
                            <div className="cat">
                                {categories.map((e, i) => 
                                    <p onClick={() => (setTaskType(e), setIcon(!icon))}>{e}</p>
                                )}
                            </div>
                        }
                    </div>
                    {errordescription && <p className="error" >{errordescription}</p>}
                    <textarea placeholder="Descraption" onChange={(e) => setDescraption(e.target.value)} value={Descraption}></textarea>
                    {errorurl && <p className="error" >{errorurl}</p>}
                    <input type="Url" placeholder="Link of project" onChange={(e) => setTaskURL(e.target.value)} value={tasURL}/>
                    <div className="friends">
                        <button >+</button>
                        <p>Add Friends</p>
                    </div>
                    <button onClick={UploadTask}>Send</button>
                    {/* <button type="reset" onClick={() => Reset}>Cansle</button> */}
                    <button type="reset" onClick={ResetInputs}>Reset</button>
                </div>
            </form>
        </div>
    )
}
export default  Upload