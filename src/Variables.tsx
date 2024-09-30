import styled from "styled-components";

export const Moha = styled.div<{ $row: number; $col: number }>`
  opacity: ${(props) => (props.$row == 5 && props.$col == 5 ? 0 : 1)};
`;

export const Memo = styled.div<{ $display: string }>`
  opacity: ${(props) => props.$display};
  outline: 3px solid #404040;
  inline: 3px solid black;
`;

export const MyButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 10px;
  line-height: 2;
  cursor: pointer;
  border-radius: 3px 3px 0 0;
  width: 100%;
  height: 70%;
  background: rgb(248, 248, 248);
  background: linear-gradient(
    180deg,
    rgba(248, 248, 248, 1) 58%,
    rgba(238, 238, 238, 1) 58%,
    rgba(224, 224, 224, 1) 65%,
    rgba(200, 200, 200, 1) 65%,
    rgba(187, 187, 187, 1) 71%,
    rgba(181, 181, 181, 1) 71%,
    rgba(176, 176, 176, 1) 74%,
    rgba(173, 173, 173, 1) 76%,
    rgba(168, 168, 168, 1) 79%
  );
`;

export const OpenIt = styled.div<{ $display: boolean }>`
  display: flex;
  align-items: end;
  text-align: center;
  background-color: #28a068;
  cursor: pointer;
  border-radius: 5px;
  outline: 3px solid #404040;
  border: 3px solid #188060;
  `;

export const Leave = styled.div<{ $display: string }>`
  width: 90%;
  box-shadow: 0px 5px #404040, 0px -5px #404040, 5px 0px #404040,
    -5px 0px #404040, 0px 0px 5px #404040;
  background: rgb(104, 168, 248);
  background: linear-gradient(
    180deg,
    rgba(104, 168, 248, 1) 34%,
    rgba(104, 168, 248, 1) 34%,
    rgba(104, 168, 248, 1) 42%,
    rgba(104, 168, 248, 1) 48%,
    rgba(92, 155, 243, 1) 48%,
    rgba(75, 135, 236, 1) 57%,
    rgba(48, 104, 224, 1) 57%,
    rgba(48, 104, 224, 1) 63%,
    rgba(48, 104, 224, 1) 64%,
    rgba(48, 104, 224, 1) 64%,
    rgba(48, 104, 224, 1) 69%,
    rgba(48, 104, 224, 1) 74%
  );
  transform: ${(props) => props.$display == "none" && "scale(1.5)"};
  transition: transform 0.5s ease-in-out;
`;

export const Bar = styled.div<{ $row: number; $col: number; $color: string }>`
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

export const Bloc = styled.div`
  position: relative;
  z-index: 5;
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

export const SpecialLigne = styled.div<{ $col: number; $color: string }>`
  width: 80%;
  background-color: ${(props) => props.$color};
  height: 20px;
  position: absolute;
  top: 40px;
  z-index: 1;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
`;

export const Box = styled.div<{ $selected: boolean }>`
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

export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: "Casino";
`;

export const Last = styled.div<{ $color: string }>`
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
  outline: 3px solid white;
  z-index: 5;
  background-color: ${(props) => props.$color};
`;
