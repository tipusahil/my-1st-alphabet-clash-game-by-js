
function play(){
    hideElementById('home_screen');
    hideElementById('score_part');

    showElementById('play_ground');
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