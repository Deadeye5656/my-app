import styled from "styled-components";

// const Main = styled("div")`
//   font-family: sans-serif;
//   background: #f0f0f0;
//   height: 100vh;
// `;

const DropDownContainer = styled("div")`
  color: white;
  width: 13.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.4em;
  padding: 0.4em 0em 0.4em 0em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: black;
  background: #AFA9A8;
  border: 2px solid black;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  display: ${(props) => (props.collapsed ? "none" : "block")};
  height: 12.7em;
  width: 10.45em;
  overflow-y: scroll;
  margin: 0;
  padding: 0.4em 0em 0.4em 0em;
  position: absolute;
  background: #AFA9A8;
  border: 2px solid black;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Happy", "Angry", "Sad", "Depressed", "Overwhelmed", "Stressed", "Scared", "Disgusted", "Nervous", "In Love", "Confused"];


export {options, DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, ListItem};