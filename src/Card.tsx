import { useContext, useState } from "react";
import GameContext from "./GameContext";
import styled from "styled-components";
import Voltorbe from "./assets/voltorb2.svg";

// Card wrapper for 3D flip
const CardWrapper = styled.div`
  width: 78px;
  height: 78px;
  perspective: 1000px; /* Perspective for 3D flip */
  z-index: 10;
`;

// Inner container for flipping animation
const CardInner = styled.div<{ turned: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.2s; /* Controls flip speed */
  transform: ${({ turned }) =>
    turned ? "rotateY(180deg)" : "rotateY(0deg)"}; /* Rotate based on state */
`;

// Front and back of the card
const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide back face when not flipped */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  border: 3px solid black;
  outline: 3px solid white;
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
  background-position: 0 0, 25px 25px;
`;

// Back face (Turned)
const Turned = styled(CardFace)`
  background-color: #b88880;
  font-size: 1.5rem;
  color: #404040;
  text-shadow: 0 2px #f8f8f8, 2px 0 #f8f8f8, 0 -2px #f8f8f8, -2px 0 #f8f8f8;
  transform: rotateY(180deg); /* Flip the back side */
`;

interface CardProps {
  row: number;
  col: number;
}

export default function Card({ row, col }: CardProps) {
  const { correct } = useContext(GameContext);
  const [turned, setTurned] = useState(false);

  return (
    <CardWrapper onClick={() => setTurned(!turned)}>
      <CardInner turned={turned}>
        <Bloc />
        <Turned>
          {(correct[row][col] == 0 && (
            <img width={"70%"} src={Voltorbe}></img>
          )) ||
            correct[row][col]}
        </Turned>
      </CardInner>
    </CardWrapper>
  );
}
