function letterFinder(word, match){
    var condition1 = typeof word == 'string' && word.length >= 2;
    var condition2 = typeof match == 'string' && match.length == 1;

    if(condition1 && condition2){
        for(let i = 0; i < word.length; i++){
            if(word[i] == match){
                console.log('Found the', match, 'at', i);
            }
            else{
                console.log('---No', match, 'found at ', i);
            }
        }
    } else {
        console.log('Please correct the arguments to the function');
    }
}

letterFinder('cat', 'c');