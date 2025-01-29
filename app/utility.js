
function play(){
    hideElementById('home_screen');
    hideElementById('score_part');

    showElementById('play_ground');


    // get alphabets
    getArandomAlphabet();
}

// tag hide korar / (hidden) class add korar utility function,just call kore argument hisebee kuno tag er id name dilei oi tag e hidden class add hoye tag ta hide hobe.
function hideElementById(hideElementIdName){
    const hide_element = document.getElementById(hideElementIdName);
    hide_element.classList.add('hidden');
    
}

// tag show korar / (hidden) class remove korar utility function,just call kore argument hisebee kuno tag er id name dilei oi tag theke hidden class remove hoye tag ta show korbe.
function showElementById(showElementIdName){
    const show_element =document.getElementById(showElementIdName);
    show_element.classList.remove('hidden');
}


// redom letter genarate korar utility function templete:
function getArandomAlphabet(){
    const alphabetsString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split();
    console.log(alphabets);

     console.log(' alpha type = ', typeof alphabets);
    console.log(' alpabets er length holo = ' ,alphabets.length);

    const randomNumber = Math.random() * 25;
    console.log('random number 0 to 25 = ', randomNumber)
    const numberAfterRound =  Math.round(randomNumber);
    
    console.log('random number round korar por = ', numberAfterRound)
}
// node app\utility.js