import { useContext, useState } from "react";
import GameContext from "./GameContext";
import { OpenIt, MyButton, Title } from "./Variables";
import Memo from "./assets/memo.svg";
import Fermer from "./assets/fermer.svg";
import Ouvrir from "./assets/ouvrir.svg";

export default function OpenTSX() {
	const { memo, setMemo } = useContext(GameContext);
	const [switchMemo, setSwitchMemo] = useState(false);
	return (
		<>

		<OpenIt
		$display={memo}
		id="OpenMemo"
		className="bg-purple-700 h-[30%] w-[80%]"
		onClick={() => setMemo(!memo)}
		>
			<MyButton>
				{switchMemo &&
				<>
				{memo ? (<Title>Fermer</Title>) : (<Title>Ouvrir</Title>)}
				<Title>mémo</Title>
				</> ||
				<>
				{memo ? <img src={Fermer} alt="fermer" width={"90%"} /> : <img
					style={{ marginBottom: "10px"}}
					src={Ouvrir} alt="ouvrir" width={"90%"} />}
					<img src={Memo} alt="memo" width={"70%"} />
					</>
				
			}
		</MyButton>
		</OpenIt>
		<button onClick={() => setSwitchMemo(!switchMemo)}>Switch</button>
		</>
	);
}

// {memo ? (<Title>Fermer</Title>) : (<Title>Ouvrir</Title>)}
// <Title>mémo</Title> 
// {memo ? <img src={Fermer} alt="fermer" width={"90%"} /> : <img
// style={{ marginBottom: "10px" }}
// src={Ouvrir} alt="ouvrir" width={"90%"} />}
// <img src={Memo} alt="memo" width={"70%"} />