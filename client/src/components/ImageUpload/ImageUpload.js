// import React from "react";
// import "./style.css";
// import FileUploadService from "../../../../utils/fileupload";



// const ImageUpload = () => {
//     return (
//         <div>
//            <div class="frame">
// 	<div class="center">
// 		<div class="title">
// 			<h1>Drop file to upload</h1>
// 		</div>

// 		<div class="dropzone">
// 			<img src="http://100dayscss.com/codepen/upload.svg" class="upload-icon" />
// 			<input type="file" class="upload-input" />
// 		</div>

// 		<button type="button" class="btn" name="uploadbutton">Upload file</button>

// 	</div>
// </div> 
//         </div>
//     )
// }

// export default ImageUpload


//To Be deleted later:

import React, { Component } from "react";
import FileUploadService from "../services/file-upload.service";

export default class UploadImages extends Component {
  constructor(props) {
	super(props);
	this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

	this.state = {
		currentFile: undefined,
		previewImage: undefined,
		progress: 0,
		message: "",
  
		imageInfos: [],
  }
}
	componentDidMount() {
		FileUploadService.getFiles().then((response) => {
		this.setState({
			imageInfos: response.data,
		});
		});
	}

	selectFile(event) {
		this.setState({
		  currentFile: event.target.files[0],
		  previewImage: URL.createObjectURL(event.target.files[0]),
		  progress: 0,
		  message: ""
		});
	  }
	
	  upload() {
		this.setState({
		  progress: 0,
		});
	
		FileUploadService.upload(this.state.currentFile, (event) => {
		  this.setState({
			progress: Math.round((100 * event.loaded) / event.total),
		  });
		})
		  .then((response) => {
			this.setState({
			  message: response.data.message,
			});
			return FileUploadService.getFiles();
		  })
		  .then((files) => {
			this.setState({
			  imageInfos: files.data,
			});
		  })
		  .catch((err) => {
			this.setState({
			  progress: 0,
			  message: "Could not upload the image!",
			  currentFile: undefined,
			});
		  });
	  }
	
  render() {
	const {
		currentFile,
		previewImage,
		progress,
		message,
		imageInfos,
	  } = this.state;

	  return (
		<div>
		  <div className="row">
			<div className="col-8">
			  <label className="btn btn-default p-0">
				<input type="file" accept="image/*" onChange={this.selectFile} />
			  </label>
			</div>
  
			<div className="col-4">
			  <button
				className="btn btn-success btn-sm"
				disabled={!currentFile}
				onClick={this.upload}
			  >
				Upload
			  </button>
			</div>
		  </div>
  
		  {currentFile && (
			<div className="progress my-3">
			  <div
				className="progress-bar progress-bar-info progress-bar-striped"
				role="progressbar"
				aria-valuenow={progress}
				aria-valuemin="0"
				aria-valuemax="100"
				style={{ width: progress + "%" }}
			  >
				{progress}%
			  </div>
			</div>
		  )}
  
		  {previewImage && (
			<div>
			  <img className="preview" src={previewImage} alt="" />
			</div>
		  )}
  
		  {message && (
			<div className="alert alert-secondary mt-3" role="alert">
			  {message}
			</div> 
		  )}
  
		  <div className="card mt-3">
			<div className="card-header">List of Files</div>
			<ul className="list-group list-group-flush">
			  {imageInfos &&
				imageInfos.map((img, index) => (
				  <li className="list-group-item" key={index}>
					<a href={img.url}>{img.name}</a>
				  </li>
				))}
			</ul>
		  </div>
		</div>
	  );
  }
}