function countWords(words){

    let items = {};

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        items[word]= (items[word] || 0) + 1;
    }

    console.log(items);

}

countWords(['apple','grape','apple','apple'])