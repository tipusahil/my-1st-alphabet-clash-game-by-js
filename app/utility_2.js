function play(){
    hideElementByID ('home_screen')
    hideElementByID ('score_part')
    
    showElementByID ('play_ground')
}


function hideElementByID(ElementNAMEforHIDE){
    const hide_element = document.getElementById(ElementNAMEforHIDE);
    hide_element.classList.add('hidden')
}


function showElementByID(ElementNAMEforSHOW) {
    const show_element = document.getElementById(ElementNAMEforSHOW);
    show_element.classList.remove('hidden');
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
const currentScreenLetter = currentScreenAlphabet.innerHTML;
console.log('current screen letter is =',currentScreenLetter);

let life = 10;
let score = 0;
if( currentScreenLetter === playerPressedKEY) {
    console.log('yes yes')
    life--;
}else{
    console.log('no no')
    score++;
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
  const keyCOLOR = document.getElementById(random_1_letter);
  keyCOLOR.style.backgroundColor ='#e19f5d';
  keyCOLOR.style.color = 'black';

  } 
  
  continueGAME();