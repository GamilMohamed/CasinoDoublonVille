import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Voltorbe from "./assets/voltorb.svg";
import Quit from "./assets/leave.svg";
import Voltorbe2 from "./assets/voltorb2.svg";
import Return from "./assets/return.svg";
import "./App.css";
import { styled } from "styled-components";
// background-color: ${(props) =>
// props.$row == 5 || props.$col == 5 ? props.$color : "#28a068"};
const Moha = styled.div<{ $row: number; $col: number; $color: string }>`
  opacity: ${(props) => (props.$row == 5 && props.$col == 5 ? 0 : 1)};
`;

const Memo = styled.div<{ $display: string }>`
  opacity: ${(props) => props.$display};
  outline: 3px solid #404040;
  inline: 3px solid black;
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

const Leave = styled.div`
width: 90%;
box-shadow: 0px 5px #404040, 0px -5px #404040, 5px 0px #404040, -5px 0px #404040, 0px 0px 5px #404040;
background: rgb(104,168,248);
background: linear-gradient(180deg, rgba(104,168,248,1) 34%, rgba(104,168,248,1) 34%, rgba(104,168,248,1) 42%, rgba(104,168,248,1) 48%, rgba(92,155,243,1) 48%, rgba(75,135,236,1) 57%, rgba(48,104,224,1) 57%, rgba(48,104,224,1) 63%, rgba(48,104,224,1) 64%, rgba(48,104,224,1) 64%, rgba(48,104,224,1) 69%, rgba(48,104,224,1) 74%);
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

// border-inline: 3px solid black;
const Box = styled.div<{ $selected: boolean }>`
    background-color: ${(props) => (props.$selected ? "#188060" : "#88a8a8")};
    color: ${(props) => (props.$selected ? "#f8b830" : "#609060")};
    outline: 3px solid ${(props) => (props.$selected ? "#404040" : "#707070")};
    border: 3px solid ${(props) => (props.$selected ? "#28a068" : "#98b8b8")};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
`;

const Last = styled.div<{ $color: string }>`
position: relative;
flex-direction: column;

  width: 78px;
  height: 78px;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5%;
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
  // border: 3px solid black;
  outline: 3px solid white;
  z-index: 10;
  background-color: ${(props) => props.$color};
`;


const bomb = [
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1],
  [1, 2, 1, 1, 2, 0],
];

const correct = [
  [0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 6],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 6],
  [0, 0, 0, 0, 0, 7],
  [5, 3, 6, 6, 5, 0],
];

function App() {
  const color = ["#e07050", "#40a840", "#e8a038", "#3090f8", "#c060e0"];
  const [selected, setSelected] = useState(0);
  const [memo, setMemo] = useState(false);

  return (
    <>
      <div className="bg-[#F4F4F4]] h-[100vh] w-[100vw] flex justify-center items-center relative">
       <div className="bg-blue-200 h-[600px] w-[800px] flex ">
       <div className="bg-[#28a068] h-[600px] w-[600px] relative ">
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
                        <p
                        className="text-myblack white w-[105%] text-end pr-1 text-lg m-[-1px] border-white border-b-4"
                        >{correct[i][j].toString().padStart(2, '0')}</p>
                        <div
                        className="flex justify-around items-center w-full h-[80%]"
                        >
                        <img src={Voltorbe2} alt="voltorbe" width={"40px"} />
                        <p
                        className="text-2xl text-myblack"
                        >{bomb[i][j]}</p>
                        </div>
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
        <div className="bg-yellow-500 h-[600px] w-[200px] flex flex-col justify-around items-center">
          <div
          id="OpenMemo"
          className="bg-purple-700 h-[30%] w-[80%]"
          onClick={() => setMemo(!memo)}
          ></div>
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
          <Box 
          onClick={() => setSelected(0)}
          $selected={selected == 0}>
            <img src={Voltorbe} alt="voltorbe" width={"70%"} />
          </Box>
          <Box
          onClick={() => setSelected(1)}
          $selected={selected == 1}>1</Box>
          <Box
          onClick={() => setSelected(2)}
          $selected={selected == 2}>2</Box>
          <Box
          onClick={() => setSelected(3)}
          $selected={selected == 3}>3</Box>
          <div
          className="bg-red-200 h-[100%] w-[100%] opacity-0"
          id="Memo1"
          ></div>
          <div
          onClick={() => setMemo(false)}
          className="h-[100%] w-[100%] border-4 border-[#e89880] flex justify-center items-center mt-1"
          id="Memo2"
          >
            <img src={Return} alt="retour" width={"80%"} />
          </div>

          </Memo>
          {/* </div> */}

          <Leave
          className=" h-[15%] w-[100%] border-myblack border-4 flex justify-center items-center"
          id="Exit"
          >
            <img src={Quit} alt="leave" width={"80%"} />
          </Leave>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
