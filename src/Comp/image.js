import $ from "jquery";
import { Fragment, useEffect, useState } from "react";
export default function Image() {
    const [imageData, setimageData] = useState();

    useEffect(() => {
        updateData();
    }, []);

    function updateData() {
        let tempData = localStorage.getItem("imgData");
        if(tempData){
            setimageData(tempData);
        }
        else{
            setimageData("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png")
        }
    }

    function chg(e){
        setimageData(e.target.value);

    }

    function submit() {
        console.log(imageData);
        localStorage.setItem("imgData", imageData);
        updateData();
    }

    function remove(){
        localStorage.clear();
        setimageData();
        updateData();
    }



    return (
        <>
            <div id="avatar">
                <img src={imageData} height="200px" alt="notFound"></img>
            </div>
            <input type="text" id="files" onChange={chg} placeholder="Enter image URL"></input>
            <div style={{display:"flex",gap:"2rem"}}>
            <button onClick={submit}>Edit</button>
            <button onClick={remove}>Remove</button>
            </div>
            
        </>
    );
}
