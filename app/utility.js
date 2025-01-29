function play(){
    hideElementById('home_screen');
    hideElementById('score_part');

    showElementById('play_ground');


    // getAlphabet(index);
    const indexNUM = getrandomIndex();
    console.log(indexNUM);

    // get random alphabets
    const alphabets = getAlphabet(indexNUM);
    console.log(alphabets);
    
    const random_1_letter = alphabets[indexNUM];
    console.log('random indexNUM er maddome alphabets varaible theke random letter' ,random_1_letter);



    // set random letter to (p)tag/elements value of playground:
    document.getElementById('random_letter').innerHTML = random_1_letter;
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




// rendom indexnumber pass korar maddome (alphabet) variable theke oi index er positon er letter ta newar  utility function templete:

function getAlphabet(indexNumber){

    const alphabetsString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');//object like array kora hoise split er maddome

    return alphabets;

const random_letter = alphabets[indexNumber];
    // console.log('alpha check after split =  ', typeof alphabets)
    console.log(alphabets);
    console.log( alphabets[indexNumber]);
    console.log( ` alpabet variable e ${indexNumber} number position er letter ta holo = ${alphabets[indexNumber]}`);

    // return alphabets;
}

// random number genarate function: 
function getrandomIndex(){
    
    const randomNumber = Math.random() * 25;
    console.log('random number 0 to 25 = ', randomNumber)
    const index =  Math.round(randomNumber);
    
    console.log('random number round korar por index = ', index)
    return index;
}




/* btn click = a hoi thle a */



// node app\utility.js