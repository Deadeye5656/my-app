import React, {useState} from "react";
//import { findAllInRenderedTree } from "react-dom/cjs/react-dom-test-utils.production.min";
import './App.css';
import {options, DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, ListItem} from './dropdown.js'
import buttonHit, {Button} from './buttonHit.js'


function Search (){
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
    return (
    <form action="/" method="get"> 
        <label className = "question" htmlFor="header-search">
            How do you feel today?
        </label>
        <DropDownContainer className = "dropdown">
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Choose an Emotion"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
        
      </DropDownContainer>
        <Button onClick={buttonHit(selectedOption)}>
            Receive Advice
        </Button>
    </form>
    )
};
export default Search;