

import styled from "styled-components";

const Button = styled.button`
  background-color: #282c34;
  color: white;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer; 
  margin-bottom: 1.25em;
`;

const buttonHit = option => () =>{
    var num = Math.floor(Math.random()*3)+1
    if (option === null){
        alert("Please select an emotion");
    }
    if (option === "Happy"){
        if (num === 1){
            alert("Take in the moment")
        }
        if (num === 2){
            alert("Share the moment with a friend")
        }
        if (num === 3){
            alert("Do a happy dance")
        }
    }
    if (option === "Angry"){
        if (num === 1){
            alert("Scream into a pillow")
        }
        if (num === 2){
            alert("Punch something soft")
        }
        if (num === 3){
            alert("Take 3 deep breaths")
        }
    }
    if (option === "Sad"){
        if (num === 1){
            alert("Talk to a friend about what's wrong")
        }
        if (num === 2){
            alert("Listen to some music")
        }
        if (num === 3){
            alert("Find someone to relate to")
        }
    }
    if (option === "Depressed"){
        if (num === 1){
            alert("Call the suicide hotline: 800-273-8255")
        }
        if (num === 2){
            alert("Call a good friend")
        }
        if (num === 3){
            alert("Make an appointment with a therapist or consider medication")
        }
    }
    if (option === "Overwhelmed"){
        if (num === 1){
            alert("Take a moment away from what is overwhelming you")
        }
        if (num === 2){
            alert("Take 3 deep breaths")
        }
        if (num === 3){
            alert("Go for a jog to burn off some steam")
        }
    }
    if (option === "Stressed"){
        if (num === 1){
            alert("Stop whatever it is that is stressing you")
        }
        if (num === 2){
            alert("Take a tea or coffee break")
        }
        if (num === 3){
            alert("Accept that not everything will turn out perfect")
        }
    }
    if (option === "Scared"){
        if (num === 1){
            alert("Find your childhood stuffed animal")
        }
        if (num === 2){
            alert("Reassure yourself that everything is going to be alright")
        }
        if (num === 3){
            alert("Get a protection buddy")
        }
    }
    if (option === "Disgusted"){
        if (num === 1){
            alert("Wash your hands")
        }
        if (num === 2){
            alert("Think of something pleasant like puppies or flowers")
        }
        if (num === 3){
            alert("Step out of the room")
        }
    }
    if (option === "Nervous"){
        if (num === 1){
            alert("Take 3 deep breaths")
        }
        if (num === 2){
            alert("Avoid caffienated beverages like coffee, pop, or tea")
        }
        if (num === 3){
            alert("Pet a pet of yours or hang out with family")
        }
    }
    if (option === "In Love"){
        if (num === 1){
            alert("Tell a friend all about him or her")
        }
        if (num === 2){
            alert("Buy him or her flowers")
        }
        if (num === 3){
            alert("Dance with him or her")
        }
    }
    if (option === "Confused"){
        if (num === 1){
            alert("Ask a professional for help")
        }
        if (num === 2){
            alert("Consult Google")
        }
        if (num === 3){
            alert("Read a book on the topic")
        }
    }
};

export {Button};
export default buttonHit;