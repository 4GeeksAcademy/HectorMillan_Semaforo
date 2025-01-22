import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selectedColor, SetSelectedColor] = useState("green");

	
	function alternarColor (){

		switch (selectedColor) {
			case "red":
				SetSelectedColor("yellow");
				break;


			case "yellow":

				SetSelectedColor("green");
				break;

			
			case "green":
				SetSelectedColor("red");
				break;
			
		
			default:
				break;
		}

	}
		
	return (
		<div className="traffic-light">

			<div onClick={() => SetSelectedColor("red")} className={"light red" + ((selectedColor === "red") ? " glow" : "")}></div>
			<div onClick={() => SetSelectedColor("yellow")} className={"light yellow"+ ((selectedColor === "yellow") ? " glow" : "")}></div>
			<div onClick={() => SetSelectedColor("green")} className={"light green"+ ((selectedColor === "green") ? " glow" : "")}></div>
			<button type="button" class="btn btn-primary" onClick={alternarColor}>CambiarColor</button>
			<button type="button" class="btn btn-primary" onClick={addColor}>CambiarColor</button>
			
		</div>
	);
};

export default Home;
