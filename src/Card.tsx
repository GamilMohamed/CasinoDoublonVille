import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom"; // Import createPortal from ReactDOM
import styled from "styled-components";
import Voltorbe from "./assets/voltorb2.svg";
import Voltorbe2 from "./assets/voltorb.svg";
import Explosion from "./assets/explosion2.gif";
import GameContext from "./GameContext";
import React from "react";

const Test = styled.img<{ $turned: boolean }>`
  transform-style: preserve-3d;
`;
// Card wrapper for 3D flip
const CardWrapper = styled.div`
  width: 78px;
  height: 78px;
  perspective: 1000px;
  z-index: 6;
  position: relative; /* Ensure this is positioned relative for inner positioning */
`;

// Inner container for flipping animation
const CardInner = styled.div<{ $turned: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.2s;
  transform: ${(props) => props.$turned ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

// Front and back of the card
const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  border: 3px solid black;
  outline: 3px solid white;
`;

const Container = styled.div<{ $color?: string }>`
  flex-basis: 100%; /* to force .bottom to wrap */
  display: flex;
  justify-content: space-between;
  background-color: ${({ $color }) => $color || "red"};
`;

// Front face (Bloc)
const Bloc = styled(CardFace)`
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
  background-position: 0 0, 24px 24px;
`;

// Back face (Turned)
const Turned = styled(CardFace)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b88880;
  font-size: 1.5rem;
  color: #404040;
  text-shadow: 0 2px #f8f8f8, 2px 0 #f8f8f8, 0 -2px #f8f8f8, -2px 0 #f8f8f8;
  transform: rotateY(180deg);
`;

// Explosion GIF styled component
const Gif = styled.img<{ $top: number; $left: number }>`
  position: absolute;
  z-index: 9999; /* Ensure it appears on top of everything in the DOM */
  transform: translate(-50%, -50%);
  top: ${({ $top }) => $top + 40}px;
  left: ${({ $left }) => $left + 40}px;
  pointer-events: none; /* Prevent interaction issues */
`;

interface CardProps {
  row: number;
  col: number;
}

const Note = styled.p<{ $visible: boolean }>`
  color: #f8b830;
  display: block;
  display: ${(props) => (props.$visible ? "block" : "none")};
`;

export default function Card({ row, col }: CardProps) {
   const ref = React.useRef<HTMLDivElement>(null);
  const {
    correct,
    memo,
    selected,
    allTurned,
    setGameOver,
    gameOver,
  } = useContext(GameContext);
  const [turned, setTurned] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [explosionPosition, setExplosionPosition] = useState({
    top: 0,
    left: 0,
  });
  const [notes, setNotes] = useState([0, 0, 0, 0]);
  const [gifSrc, setGifSrc] = useState(Explosion);

  const triggerExplosion = () => {
    setShowExplosion(true);
    
    setGifSrc(`${Explosion}?t=${Date.now()}`);

  };

  useEffect(() => {
    if (!memo && turned) {
      // alert("turned" + ref.current?.classList);
      // ref.current?.classList.add("myexplosion");
      ref.current?.animate(
        [
          // Keyframes corresponding to the CSS keyframes
          { 
            transform: "scale(1) rotateX(0deg)", 
            filter: "hue-rotate(30deg)" 
          },
          { 
            transform: "scale(1.6) rotateX(-30deg)", 
            filter: "hue-rotate(30deg)" 
          },
          { 
            transform: "scale(1) rotateX(0deg)", 
            filter: "hue-rotate(30deg)" 
          }
        ],
        {
          // Timing options
          duration: 1000, // Match your CSS animation duration
          iterations: 1   // Number of times the animation should repeat
        }
      );
    //   // alert("turned");
    }
  }, [turned]);

  useEffect(() => {
    if (gameOver) {
		setNotes([0, 0, 0, 0]);
    }
	setTurned(false);
  }, [gameOver]);

  const handleClick = (e: React.MouseEvent) => {
	  if (memo === true) {
		  const updatedNotes = [...notes];
		  updatedNotes[selected] = updatedNotes[selected] === 0 ? 1 : 0;
		  setNotes(updatedNotes);
		  console.log(e.currentTarget, selected, updatedNotes);
		  return;
		}
		setTurned(true);
    if (correct[row][col] === 0) {
      const rect = e.currentTarget.getBoundingClientRect(); // Get the card position
      setExplosionPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setGameOver(true);
      triggerExplosion();
    //   if (gameOver == false) {
    //     setTimeout(() => {
    //       setAllTurned(true);
    //     }, 1000);
    //   }
    }
  };

  return (
    <>
      <CardWrapper onClick={handleClick}>
        <CardInner $turned={allTurned || turned}>
          <Bloc>
            <div className="container">
              <Container $color="blue">
                <Note
                  $visible={notes[0] == 1}
                  className=" bg-blue-200"
                >
                  <img
                    // className="w-[100%]"
                    className="absolute top-1 left-1"
                    src={Voltorbe2}
                    alt="voltorbe"
                    width={"20%"}
                  />
                </Note>
                <Note
                  $visible={notes[1] == 1}
                  className="absolute top-0 right-1"
                >
                  1
                </Note>
                <Note
                  $visible={notes[2] == 1}
                  className="absolute bottom-0 left-1"
                >
                  2
                </Note>
                <Note
                  $visible={notes[3] == 1}
                  className="absolute bottom-0 right-1"
                >
                  3
                </Note>
              </Container>
            </div>
          </Bloc>
          <Turned className="cube-wrap">
            {correct[row][col] === 0 ? (

<Test
ref={ref}
// className="myexplosion"

              $turned={turned}
              width={"70%"} src={Voltorbe} alt="voltorbe" />

              // <img
              // className={turned ? "myanimation" : ""}
              // width={"70%"} src={Voltorbe} alt="voltorbe" />
            ) : (
              correct[row][col]
            )}
          </Turned>
        </CardInner>
      </CardWrapper>
      {/* Use a portal to show explosion on top of all cards */}
      {showExplosion &&
        ReactDOM.createPortal(
          <Gif
            src={gifSrc}
            $top={explosionPosition.top}
            $left={explosionPosition.left}
          />,
          document.body
        )}
    </>
  );
}
