
function setup(){
    // split up the word list
    var words = wordlist.split('\n')
    wordlist = []
    words.forEach(function (word, i){
        if(word != ""){
            wordlist.push(word.toLowerCase())
        }
    })

}
document.addEventListener('DOMContentLoaded', setup);
