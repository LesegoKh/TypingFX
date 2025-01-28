// get the container 

const containerEl = document.querySelector(".container");

//array of careers 
const careers = ['MINER... ','CODER...','WEB DEVELOPER...','HODL-ER...'];

let careerIndex = 0;

let characterIndex = 0;
updateText();

function updateText() {
    characterIndex++;
containerEl.innerHTML = `
 <h1 class="text-center mt-4">I'm  ${careers[careerIndex].slice(0,characterIndex) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>
`;

if (characterIndex === careers[careerIndex].length){
    careerIndex++;
    characterIndex = 0;
}
if(careerIndex === careers.length){ // when array reaches end reset to zero index
    careerIndex = 0;
}
setTimeout(updateText, 400);
};