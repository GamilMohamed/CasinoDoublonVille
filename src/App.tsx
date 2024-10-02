import Voltorbe2 from "./assets/voltorb2.svg";
import "./App.css";
import { Last, Moha, SpecialLigne, Bar } from "./Variables";

import MemoTSX from "./Memo";
import LeaveTSX from "./Leave";
import OpenTSX from "./OpenMemo";
import { useContext } from "react";
import GameContext from "./GameContext";
import Card from "./Card";
import Game from "./Game";

function App() {
  const color = ["#e07050", "#40a840", "#e8a038", "#3090f8", "#c060e0"];
  const { tab } = useContext(GameContext);
  return (
    <>
      {/* <Game/> */}

      <div className="bg-[#28a068]  h-[100vh] w-[100vw] flex justify-center items-center relative">
        <div className="h-[600px] w-[800px] flex ">
          <div className="h-[600px] w-[600px] relative overflow-visible">
            {Array.from(Array(6).keys()).map((i) => (
              <div
                key={i}
                className="h-[100px] flex justify-around items-center relative "
              >
                {i != 5 && (
                  <SpecialLigne
                    className="absolute"
                    $col={i}
                    $color={color[i]}
                  />
                )}
                {Array.from(Array(6).keys()).map((j) => (
                  <Moha
                    $row={i}
                    $col={j}
                    key={j}
                    className="h-[100px] w-[100px] relative flex justify-center items-center"
                  >
                    {(i == 5 || j == 5) && !(i == 5 && j == 5) ? (
                      <>
                        <Last $color={color[j == 5 ? i : i == 5 ? j : i]}>
                          <div className="w-[100%]  border-white border-b-4 flex justify-around text-end">
                          <div
                              className="w-[50%]"
                            />
                            <p className="w-[50%] text-xl   text-myblack text-end">
                              {/* {tab[i][j][0].toString().padStart(2, "0")} */}
                              {tab[i][j][0] ? tab[i][j][0].toString().padStart(2,"0") : "00"}
                            </p>
                          </div>
                          <div className="w-full flex justify-around items-center  h-[80%]">
                            {/* <p className="w-[50%]  bg-purple-700 text-center text-myblack">
                    <>
                    {tab[i][j][1]}
                    </>
                  </p> */}
                            <img
                              className="w-[50%]"
                              src={Voltorbe2}
                              alt="voltorbe"
                            />
                            <p className="w-[30%] text-xl   text-myblack text-end">
                              <>{tab[i][j][1]}</>
                            </p>
                          </div>
                        </Last>
                      </>
                    ) : (
                      <>
                        <Card row={i} col={j} />
                      </>
                    )}
                    <Bar
                      className="top-5"
                      $row={i}
                      $col={j}
                      $color={color[j]}
                    />
                  </Moha>
                ))}
              </div>
            ))}
          </div>
          <div className="h-[600px] w-[200px] flex flex-col justify-around items-center">
            <OpenTSX />
            <MemoTSX />
            <LeaveTSX />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
