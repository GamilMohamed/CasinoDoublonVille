import { createContext, useEffect } from "react";
import { useState } from "react";
import Game from "./Game";

interface GameContextProps {
  memo: boolean;
  setMemo: React.Dispatch<React.SetStateAction<boolean>>;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  correct: number[][][];
  allTurned: boolean;
  setAllTurned: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  tab: number[][][];
  setTab: React.Dispatch<React.SetStateAction<number[][]>>;
  nbBombs: number;
}

const GameContext = createContext<GameContextProps>({} as GameContextProps);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [memo, setMemo] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  const [allTurned, setAllTurned] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);

    const nbbombs = 6;
    const nblines = 6;
    const [tab, setTab] = useState<number[][]>(() => Array.from({ length: nblines }, () => Array(6).fill(1)));
    const nbcolumns = 6;
  
    // Create the initial tab, linebomb, and colbomb arrays
    // const [tab, setTab] = useState<number[][]>(() => Array.from({ length: nblines }, () => Array(nbcolumns).fill(1)));
    
    const [linebomb, setLinebomb] = useState<number[]>(() => Array(nblines).fill(0));
    const [colbomb, setColbomb] = useState<number[]>(() => Array(nbcolumns).fill(0));
  
    // Helper function to get random integer between min (inclusive) and max (inclusive)
    const getRandomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    
    // Function to place bombs on the grid
    const placeBombs = (tab: number[][]) => {
      let b = 0;
      while (b < nbbombs) {
        const x = getRandomInt(0, nblines - 2);
        const y = getRandomInt(0, nbcolumns - 2);
        if (tab[x][y] === 1) {
          tab[x][y] = 0;
          linebomb[x] += 1;
          colbomb[y] += 1;
          b += 1;
        }
        if (b > 20)
          alert("b > 20");
        console.log("b in place bombs: ", b, x, y, tab[x][y]);
        console.log("tab: ", tab);
      }
    };
  
    // Level generator
    const generateLevel = (tab: number[][]) => {
      const levels = [[3, 3, 3, 3]];
      const randlevel = levels[getRandomInt(0, levels.length - 1)];
  
      let b = 0;
      while (b < randlevel.length) {
        const rx = getRandomInt(0, nblines - 2);
        const ry = getRandomInt(0, nbcolumns - 2);
        if (tab[rx][ry] === 1) {
          tab[rx][ry] = randlevel[b];
          b += 1;
        }
        if (b > 30)
          alert("b > 30");
        console.log("b in generate level: ", b);
      }
    };
  
    // Function to update the sums for the last row and column
    const updateSums = (tab: number[][]) => {
      for (let i = 0; i < 5; i++) {
        tab[i][5] = [tab[i].slice(0, 5).reduce((a, b) => a + b, 0), linebomb[i]] as any;
        tab[5][i] = [tab.slice(0, 5).reduce((acc, row) => acc + row[i], 0), colbomb[i]] as any;
      }
    };
  
    function loadGame() {
      const newTab = Array.from({ length: nblines }, () => Array(6).fill(1));
      linebomb.fill(0);
      colbomb.fill(0);
      placeBombs(newTab);
      generateLevel(newTab);
      updateSums(newTab);
      setTab(newTab);
    }
    // Initialize the grid with bombs and level on first render

  


  Game();
  useEffect(() => {
    if (gameOver) {
      setAllTurned(true);
    }
  }, [gameOver]);
  
  const handleGame = () => {
    setAllTurned(false);
    setGameOver(false);
    loadGame();
  };



  // console.log(tab);
  // const correct =  [
  //   [1, 0, 3, 3, 0, [7, 2]],
  //   [1, 1, 0, 3, 3, [8, 1]],
  //   [0, 0, 0, 1, 0, [1, 4]],
  //   [0, 1, 0, 1, 1, [3, 2]],
  //   [1, 0, 0, 1, 0, [2, 3]],
  //   [[3, 2], [2, 3], [3, 4], [9, 0], [4, 3], 1],
  // ];
    
  // ];

  return (
    <GameContext.Provider
      value={{
        memo,
        setMemo,
        selected,
        setSelected,
        allTurned,
        setAllTurned,
        gameOver,
        setGameOver,
        tab,
        setTab,
        nbBombs: 8,
      }}
    >
      <>
        <button
          onClick={() => {
            loadGame();
          }}
        >
          loadGame();
        </button>
        {gameOver && (
          <div
            className="z-[10000]  bg-red-400 h-[100vh] w-[100vw] overflow-visible absolute top-0 left-0 opacity-0 flex justify-center items-center"
            onClick={handleGame}
          >
          </div>
        )}
        {children}
      </>
    </GameContext.Provider>
  );
};

export default GameContext;
