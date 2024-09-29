import styled from "styled-components";
import Explosion from "./assets/explosion2.gif"; // Import the explosion image

const OverlayContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed; /* Fixed so it's not affected by scrolling */
  top: 0
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* To avoid interfering with clicks */
  z-index: 9999; /* Highest value to be above everything */
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${( props ) => props.$isVisible ? "visible" : "visible"};)
  pointer-events: none;
//   background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
`;

const Gif = styled.img`
  width: 300px;
  height: 300px;
`;

interface ExplosionOverlayProps {
	  isVisible: boolean;
}

// Explosion overlay component
function ExplosionOverlay({ isVisible }: ExplosionOverlayProps) {
  return (
    <OverlayContainer 
	$isVisible={isVisible}>
      <Gif 
	  src={Explosion} />
    </OverlayContainer>
  );
}

export default ExplosionOverlay;
