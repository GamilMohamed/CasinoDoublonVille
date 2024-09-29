import { useState } from "react";
import { Leave } from "./Variables";

export default function LeaveTSX() {
	const [display, setDisplay] = useState("block");

	const handleClick = () => {
		setDisplay("none");
	};

	return (
		<Leave
			onClick={handleClick}
			$display={display}						
			className=" h-[15%] w-[100%] border-myblack border-4 flex justify-center items-center"
			id="Exit"
		>
			<h1 style={{ fontFamily: "Casino", fontSize: "1.5rem" }}>
				Quitter
			</h1>
		</Leave>
	);
}