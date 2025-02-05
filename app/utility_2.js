function hideElementByID(ElementNAMEforHIDE){
    const hide_element = document.getElementById(ElementNAMEforHIDE);
    hide_element.classList.add('hidden')
}


function showElementByID(ElementNAMEforSHOW) {
    const show_element = document.getElementById(ElementNAMEforSHOW);
    show_element.classList.remove('hidden');
}
 

// keyboard er btn e bg color set screen e letter er namer id ta select korar maddome: 
function setBgColorByID(keyIdNAME) {
    const colorSetID =document.getElementById(keyIdNAME)
   colorSetID.classList.add('bg-orange-400');
    console.log(colorSetID.classList);
}


// remove pressed key backgroundColor :
// function removeBgColorByID(idName) {
// const element = document.getElementById(idName);
// element.classList.remove('bg-orange-400');
// console.log(element.classList);
// }

function removeBgColorByID(keyIdNAME1) {
    const colorRemoveID =document.getElementById(keyIdNAME1);
colorRemoveID.classList.remove('bg-orange-400');
    // colorRemoveID.classList.remove('bg-orange-400');
    console.log(colorRemoveID.classList);
}


/* 
1.
*/
function getTextElementValueByID(elementID){
const element = document.getElementById(elementID);
const elementText= element.innerText ;
const elementTextStringToNumber = parseInt(elementText);

return elementTextStringToNumber;
}

function setTextElementNewValueByID(elementId, updateValue) {
    const element1 = document.getElementById(elementId);
    element1.innerText = updateValue;
}

// 2.get one letter from  alpabets: 
function get_A_Random_AlphabetS(){
const alphabets1 = 'abcdefghijklmnopqrstuvwxyz';
const alphabetsAfterSplit =alphabets1.split('');

//3.random number genarate by math obj:
const randomNumber = Math.random()*25;
const index = Math.round(randomNumber);
console.log('random index number after convert to round  =',index)

// 4.random index number pass korar  maddome random letter pawa:
const random_1_alphabet = alphabetsAfterSplit[index];

return random_1_alphabet;
}


// callback function for user_clicked key 
function getKeyPressLETTER(event){
const playerPressedKEY = event.key;
console.log('player pressed key is = ',playerPressedKEY);

// get the expected to press :
const  currentScreenAlphabet =document.getElementById('random_letter');
const screenLetter1 = currentScreenAlphabet.innerText;
const currentScreenLetter = screenLetter1.toLowerCase();

console.log('current screen letter is =',currentScreenLetter);

// user true btn click korle green hobe false hole red hobe sei condi:

if( currentScreenLetter === playerPressedKEY) {

    continueGAME()

    //age theke function banai reke function call korar maddome score & life er value barano komanu:
   const currentScore1 = getTextElementValueByID('current_Score');
   console.log('current score is = ',currentScore1)
  updateScoreBy1 = currentScore1 + 1;

//    set new value:
setTextElementNewValueByID('current_Score', updateScoreBy1)





//     // -----------------------------------------------------------------------------------------------
//     //2. direct niome korte caile niser niome korte hobe: 
//     //1. get the score element
//     // 2.score element text convert string type to number type,for increase score value
//     // 3. update score element value as a new score
//    const scoreElement =document.getElementById('current_Score');
//     const scoreElementText = scoreElement.innerText;
//      const scoreElementTextToNUMBER = parseInt(scoreElementText);

//     //  new score:
//     const newScore = scoreElementTextToNUMBER + 1;

// //4.show & set the newScore variable's value as a score element innerText
// scoreElement.innerText = newScore;

    removeBgColorByID(currentScreenLetter);
    playerPressedKEY.style.backgroundColor = 'green';
}
else{

  //age theke function banai reke function call korar maddome score & life er value barano komanu:

  const currentLife = getTextElementValueByID('current_life');
//   console.log('current life is = ',currentLife)
updateLifeBy1 = currentLife - 1;

//    set new value:
setTextElementNewValueByID('current_life', updateLifeBy1)



//     // -----------------------------------------------------------------------------------------------   //2. direct niome korte caile niser niome korte hobe: 

    //  // 1. get the life element 
    //  const lifeElement = document.getElementById('current_life');
    //  const lifeElementText = lifeElement.innerText;
    //  const lifeElementTextToNUMBER = parseInt(lifeElementText);
     
    //  // 2.life element er innertext default vabe string thake tai string to number type datai convert korte hobe, karon 1 kore jog/biyok korle jate mathematically kaj kore,string er sate to number jog/biyok hobena tai stirng theke number e convert korte hobe.
     
     
    //  // 3.then oi life element er innertext number type datai ortat parseInt() korar pore sei innertext er sate 1 kore increament or dicreament kortee hobe. taw condition ways. 
    //  const newLife =lifeElementTextToNUMBER -1;
 
    //  // 4.sei notun kore set kora value ta oi life/score element er innerText hisebe abr set kore dite hobe, jate output e update hoi.
 
    //  lifeElement.innerText = newLife;
 


    playerPressedKEY.style.backgroundColor = 'red';

}

}

document.addEventListener('keyup' , getKeyPressLETTER);//



// prottekbar jate new new alphabet p tag e set kore dei tar jonno loop: 
function  continueGAME(){
    const random_1_letter =  get_A_Random_AlphabetS();
    console.log(random_1_letter);
  
  const set_random_1_letter =document.getElementById('random_letter');
  set_random_1_letter.innerHTML = random_1_letter;
  
  // random sonka jeta hobe oi mane jei key button id html e newa hoise,jmn a btn er jonno a name id newa hoise evabe oi keybtn er id er maddome oi btn ta ta js e select kora hobe.then setar backgroundColor golder kora hbe :
  setBgColorByID(random_1_letter);
  }   
  continueGAME()

  
  function play(){
    hideElementByID ('home_screen')
    hideElementByID ('score_part')
    
    showElementByID ('play_ground')
    // continueGAME()
}

