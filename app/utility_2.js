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
    let colorRemoveID =document.getElementById(keyIdNAME1);
colorRemoveID.classList.remove('bg-orange-400');
    // colorRemoveID.classList.remove('bg-orange-400');
    console.log(colorRemoveID.classList);
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
const keyColor1 = document.getElementById(currentScreenLetter);

if( currentScreenLetter === playerPressedKEY) {
    console.log('you have pressed ' ,currentScreenLetter);
    continueGAME()
    removeBgColorByID(keyColor1.id);
    // keyCOLOR1.style.backgroundColor = 'green';
}else{
    keyColor1.style.backgroundColor = 'red';
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

