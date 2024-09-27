import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Voltorbe from "/voltorbe.png";
import "./App.css";
import { styled } from "styled-components";
// background-color: ${(props) =>
// props.$row == 5 || props.$col == 5 ? props.$color : "#28a068"};
const Moha = styled.div<{ $row: number; $col: number; $color: string }>`
  opacity: ${(props) => (props.$row == 5 && props.$col == 5 ? 0 : 1)};
`;

const Ligne = styled.div<{ $row: number; $col: number; $color: string }>`
  width: 100%;
  background-color: ${(props) => props.$color};
  height: 20px;
  position: absolute;
  top: 40px;
  z-index: 1;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
`;

const Bar = styled.div<{ $row: number; $col: number; $color: string }>`
  height: 100%;
  background-color: ${(props) => props.$color};
  width: 20px;
  position: absolute;
  left: 40px;
  z-index: 1;
  border-left: 5px solid white;
  border-right: 5px solid white;
  display: ${(props) =>
    props.$row == 5 || props.$col == 5 ? "none" : "block"};
`;

const Bloc = styled.div`
  z-index: 10;
  width: 78px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  background-color: #188060;
  background-image: linear-gradient(
      45deg,
      #28a068 25%,
      transparent 25%,
      transparent 75%,
      #28a068 75%
    ),
    linear-gradient(
      45deg,
      #28a068 25%,
      transparent 25%,
      transparent 75%,
      #28a068 75%
    );
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
  border: 3px solid black;
  outline: 3px solid white;
`;

const SpecialLigne = styled.div<{ $col: number; $color: string }>`
  width: 80%;
  background-color: ${(props) => props.$color};
  height: 20px;
  position: absolute;
  top: 40px;
  z-index: 1;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
`;

// const SpecialBar = styled.div<{ $row: number; $color: string }>`
//   height: 80%;
//   background-color: ${(props) => props.$color};
//   width: 20px;
//   position: absolute;
//   left: 40px;
//   z-index: 100;
//   border-left: 5px solid white;
//   border-right: 5px solid white;
// `;

const Last = styled.div<{ $color: string }>`
position: relative;
flex-direction: column;
  width: 78px;
  height: 78px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
  border: 3px solid black;
  outline: 3px solid white;
  z-index: 10;
  background-color: ${(props) => props.$color};
`;


function App() {
  const color = ["#e07050", "#40a840", "#e8a038", "#3090f8", "#c060e0"];

  return (
    <>
      <div className="bg-red-400 h-[100vh] w-[100vw] color-pink flex justify-center items-center relative">
        <div className="bg-[#28a068] h-[600px] w-[600px] flex-col relative">
          {Array.from(Array(6).keys()).map((i) => (
            <div
              // $color={color[i]}
              key={i}
              className="h-[100px] flex justify-around items-center relative "
            >
              {i != 5 && (
                <SpecialLigne className="absolute" $col={i} $color={color[i]} />
              )}
              {/* <SpecialBar className="absolute" $row={i} $color={"black"} /> */}
              {Array.from(Array(6).keys()).map((j) => (
                <Moha
                  $row={i}
                  $col={j}
                  key={j}
                  $color={color[j == 5 ? i : i == 5 ? j : i]}
                  className="h-[100px] w-[100px] relative flex justify-center items-center"
                >
                  {/* <Ligne $row={i} $col={j} $color={color[i]} /> */}
                  <Bar className="top-5" $row={i} $col={j} $color={color[j]} />
                  {i == 5 || j == 5 ? (
                    <>
                      <Last $color={color[j == 5 ? i : i == 5 ? j : i]}>
                        <p>adsadas</p>
                        <img src={Voltorbe} alt="voltorbe" width={"40px"} />
                      </Last>
                    </>
                  ) : (
                    <>
                      <Bloc className="z-10"></Bloc>
                    </>
                  )}
                </Moha>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
