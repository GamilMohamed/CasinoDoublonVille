import { useContext } from "react";
import GameContext from "./GameContext";
import { OpenIt, MyButton, Title } from "./Variables";

export default function OpenTSX() {
	const { memo, setMemo } = useContext(GameContext);

	return (
		<OpenIt
		$display={memo}
		id="OpenMemo"
		className="bg-purple-700 h-[30%] w-[80%]"
		onClick={() => setMemo(!memo)}
		>
		<MyButton>
		{memo ? <Title>Fermer mémo</Title> : <Title>Ouvrir mémo</Title>}
		</MyButton>
		</OpenIt>
	);
}