function countWords(words){

    const items = {};

    for(let i; i < words.length;i++){
        items[words[i]];
        items.words[i] = (items.words[i] || 0) + 1;
    }

    console.log(items);

}

countWords(['apple','grape','apple','apple'])