import { useContext } from "react";
import { Box } from "./Variables";
import { Memo } from "./Variables";
import Voltorbe from "./assets/voltorb.svg";
import Return from "./assets/return.svg";
import GameContext from "./GameContext";


export default function MemoTSX() {
	const { selected, setSelected, memo, setMemo} = useContext(GameContext);

	return (
    <Memo
      $display={selected == 4 || !memo ? "0" : "1"}
      className="
		grid grid-cols-2 grid-rows-3
		w-[85%] h-[40%]
		bg-[#c07050]
		gap-2
		p-2
		rounded-[5px]
		"
      id="Memo"
    >
      <Box onClick={() => setSelected(0)} $selected={selected == 0}>
        <img src={Voltorbe} alt="voltorbe" width={"70%"} />
      </Box>
      <Box onClick={() => setSelected(1)} $selected={selected == 1}>
        1
      </Box>
      <Box onClick={() => setSelected(2)} $selected={selected == 2}>
        2
      </Box>
      <Box onClick={() => setSelected(3)} $selected={selected == 3}>
        3
      </Box>
      <div className="bg-red-200 h-[100%] w-[100%] opacity-0" id="Memo1"></div>
      <div
        onClick={() => setMemo(false)}
        className="h-[100%] w-[100%] border-4 border-[#e89880] flex justify-center items-center mt-1"
        id="Memo2"
      >
        <img src={Return} alt="retour" width={"80%"} />
      </div>
    </Memo>
  );
}
