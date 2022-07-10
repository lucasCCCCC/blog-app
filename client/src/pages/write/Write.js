import React from "./write.css"
import {useContext, useState} from "react";
import axios from "axios";
import {Context} from "../../Context/Context"

export default function Write() {

  const {user} = useContext(Context)

  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
        usermame:user.username,
        title,
        description,
    };


    if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;

        try {

            await axios.post("/upload", data);

        } catch (err) {}
    }

    try{
        const res = await axios.post("/posts", newPost);
        window.location.replace("/post/"+res.data._id)
        console.log(res)
    } catch (err) {}
  };
 

  return (
    <div className="write">

        {file && (

            <img className="writeImage" alt=""
                src={URL.createObjectURL(file)}
            />
        )}

        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">

                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-arrow-up-from-bracket"></i>
                </label>

                <input 
                    type="file" 
                    id="fileInput" 
                    style={{display:"none"}} 
                    onChange={e => setFile(e.target.files[0])}
                />

                <input 
                    type="text" 
                    placeholder="Get creative with your title!" 
                    className="writeInput" 
                    autoFocus={true} 
                    onChange={e => setTitle(e.target.value)}
                    />
            </div>

            <div className="writeFormGroup">
                <textarea 
                    placeholder="Tell us something intersting!" 
                    type="text" 
                    className="writeInput writeText"
                    onChange={e => setDescription(e.target.value)}>
                </textarea>
            </div>

            <button className="writeSubmit" type="submit">Publish</button>

        </form>

    </div>
  )
}
