
function setup(){
    // split up the word list
    var words = wordlist.split('\n');
    wordlist = [];
    words.forEach(function (word, i){
        if(word != ""){ // remove the empty lines
            wordlist.push(word);
        }
    })

    // start the background animation loop
    animateBG();

}
document.addEventListener('DOMContentLoaded', setup);
