import React from "react";
import "./style.css";



const ImageUpload = () => {
    return (
        <div>
           <div class="frame">
	<div class="center">
		<div class="title">
			<h1>Drop file to upload</h1>
		</div>

		<div class="dropzone">
			<img src="http://100dayscss.com/codepen/upload.svg" class="upload-icon" />
			<input type="file" class="upload-input" />
		</div>

		<button type="button" class="btn" name="uploadbutton">Upload file</button>

	</div>
</div> 
        </div>
    )
}

export default ImageUpload
