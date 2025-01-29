
function play(){
    hideElementById('home_screen');
    hideElementById('score_part');

    showElementById('play_ground');


    // getAlphabet(index);
    const index = getrandomIndex();
    
    // get random alphabets
    const random_alphabet_1 = getAlphabet(index);
    console.log(random_alphabet_1);
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
function getAlphabet(indexNumber){
    const alphabetsString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    // console.log('alpha check after split =  ', typeof alphabets)
    console.log(alphabets[indexNumber]);
}

// random number genarate function: 
function getrandomIndex(){
    
    const randomNumber = Math.random() * 25;
    console.log('random number 0 to 25 = ', randomNumber)
    const index =  Math.round(randomNumber);
    
    console.log('random number round korar por index = ', index)
    return index;
}

// node app\utility.js