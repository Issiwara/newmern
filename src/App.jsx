import React from "react";
import "./App.css";

import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import { generateDownload } from "./utils/cropImage";
import RenderCropper from "./components/cropper/cropper";
import RenderAvatar from "./components/avatar/avatar";

export default function App() {

	
	return (
		<div><RenderAvatar/></div>
	) 
}