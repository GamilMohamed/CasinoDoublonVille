import { createContext } from "react";
import { useState } from "react";

interface GameContextProps {
  memo: boolean;
  setMemo: React.Dispatch<React.SetStateAction<boolean>>;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  bomb: number[][];
  correct: number[][];
}



const GameContext = createContext<GameContextProps>({} as GameContextProps);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [memo, setMemo] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const bomb = [
	[0, 0, 0, 0, 0, 2],
	[0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 3],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1],
	[1, 2, 1, 1, 2, 0],
  ];
  
  const correct = [
	[0, 1, 2, 0, 1, 4],
	[1, 0, 1, 1, 3, 6],
	[1, 0, 0, 1, 0, 2],
	[1, 1, 1, 2, 1, 6],
	[2, 1, 2, 2, 0, 7],
	[5, 3, 6, 6, 5, 0],
  ];
  return (
    <GameContext.Provider value={{ memo, setMemo, selected, setSelected, bomb, correct }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
