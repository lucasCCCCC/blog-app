import React from "./write.css"

export default function Write() {
  return (
    <div className="write">

        <img className="writeImage" alt=""
        src="https://db-service.toubiz.de/var/plain_site/storage/images/orte/zermatt/matterhorn/mueller-10-073/1370946-1-ger-DE/Mueller-10-073_front_large.jpg"
        />

        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-arrow-up-from-bracket"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Get creative with your title!" className="writeInput" autoFocus={true}/>
            </div>

            <div className="writeFormGroup">
                <textarea placeholder="Tell us something intersting!" type="text" className="writeInput writeText"></textarea>
            </div>

            <button className="writeSubmit">Publish</button>

        </form>

    </div>
  )
}
