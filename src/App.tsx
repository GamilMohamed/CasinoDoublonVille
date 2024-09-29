import Voltorbe2 from "./assets/voltorb2.svg";
import "./App.css";
import {
  Last,
  Moha,
  SpecialLigne,
  Bar,
} from "./Variables";

import MemoTSX from "./Memo";
import LeaveTSX from "./Leave";
import OpenTSX from "./OpenMemo";
import { useContext } from "react";
import GameContext from "./GameContext";
import Card from "./Card";



function App() {
  const color = ["#e07050", "#40a840", "#e8a038", "#3090f8", "#c060e0"];
  const { correct, bomb } = useContext(GameContext);
  return (
    <>
      <div className="bg-[#F4F4F4]] h-[100vh] w-[100vw] flex justify-center items-center relative">
        <div className="bg-blue-200 h-[600px] w-[800px] flex ">
          <div className="bg-[#28a068] h-[600px] w-[600px] relative ">
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

                    {i == 5 || j == 5 ? (
                      <>
                        <Last $color={color[j == 5 ? i : i == 5 ? j : i]}>
                          <p className="text-myblack white w-[105%] text-end pr-1 text-lg m-[-1px] border-white border-b-4">
                            {correct[i][j].toString().padStart(2, "0")}
                          </p>
                          <div className="flex justify-around items-center w-full h-[80%]">
                            <img
                              src={Voltorbe2}
                              alt="voltorbe"
                              width={"40px"}
                            />
                            <p className="text-2xl text-myblack">
                              {bomb[i][j]}
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
                                      style={{ zIndex: 2 }}
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
          <div className="bg-yellow-500 h-[600px] w-[200px] flex flex-col justify-around items-center">
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
