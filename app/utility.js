function play() {
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
    console.log('random indexNUM er maddome alphabets varaible theke random letter', random_1_letter);



    // set random letter to (p)tag/elements value of playground:
    document.getElementById('random_letter').innerHTML = random_1_letter;



    // jei letter ta playground screen e show korbe sei letter er key_btn tar jate bg color gold hoye take seta setup:
    const letter_key = document.getElementById(random_1_letter);
    letter_key.style.backgroundColor = '#e19f5d';
    letter_key.style.color = 'white';

    console.log(`screen e jei letterta deka jai setar key holo: ${letter_key}`);

    // true false ways green & red bg setup
    pressedKey(random_1_letter);
    document.getElementById('output').innerHTML = score;

}


// tag hide korar / (hidden) class add korar utility function,just call kore argument hisebee kuno tag er id name dilei oi tag e hidden class add hoye tag ta hide hobe.
function hideElementById(hideElementIdName) {
    const hide_element = document.getElementById(hideElementIdName);
    hide_element.classList.add('hidden');

}

// tag show korar / (hidden) class remove korar utility function,just call kore argument hisebee kuno tag er id name dilei oi tag theke hidden class remove hoye tag ta show korbe.
function showElementById(showElementIdName) {
    const show_element = document.getElementById(showElementIdName);
    show_element.classList.remove('hidden');
}




// rendom indexnumber pass korar maddome (alphabet) variable theke oi index er positon er letter ta newar  utility function templete:

function getAlphabet(indexNumber) {

    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');//object like array kora hoise split er maddome

    return alphabets;

    const random_letter = alphabets[indexNumber];
    // console.log('alpha check after split =  ', typeof alphabets)
    console.log(alphabets);
    console.log(alphabets[indexNumber]);
    console.log(` alpabet variable e ${indexNumber} number position er letter ta holo = ${alphabets[indexNumber]}`);

    // return alphabets;
}

// random number genarate function: 
function getrandomIndex() {

    const randomNumber = Math.random() * 25;
    console.log('random number 0 to 25 = ', randomNumber)
    const index = Math.round(randomNumber);

    console.log('random number round korar por index = ', index)
    return index;
}

// true hole green hobe,noito red dekane flse hole

let score = 0;
let sub_life = 0;
function pressedKey(screenLetter) {
    document.addEventListener('keydown', function (event) {
        console.log(event.key);

        const letter_key = document.getElementById(screenLetter);


        if (event.key === screenLetter) {
            letter_key.style.backgroundColor = 'green';
            letter_key.style.color = 'white';
            score = score + 1;
            document.getElementById('sum_output_score').innerText = score;

        }

        else {
            letter_key.style.backgroundColor = 'red';
            sub_life--;
            document.getElementById('sub_output_life').innerText = sub_life;
        }
    })

}



// node app\utility.js