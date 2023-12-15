function letterFinder(word, match){
    for(let char of word){
        var pos = word.indexOf(char);  // Storing the index position of the current character
        if(char == match){
            console.log('Found the', match, 'at', pos);
        }
        else{
            console.log('---No', match, 'found at ', pos);
        }
    }
}

letterFinder('test', 't')