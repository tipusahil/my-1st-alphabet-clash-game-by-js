function play(){
    hideElementByID ('home_screen')
    // hideElementByID ()
    showElementByID ('play_ground')


}


function hideElementByID(ElementNAMEforHIDE){
    const hide_element = document.getElementById(ElementNAMEforHIDE);
    hide_element.classList.add('hidden');

   console.log(hide_element.classList);
}


function showElementByID(ElementNAMEforSHOW) {
    const show_element = document.getElementById(ElementNAMEforSHOW);
    show_element.classList.remove('hidden');


}