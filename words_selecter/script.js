var div_input = document.getElementById("div_input");
var words_show_div = document.getElementById("show_words");

function showSelected(){
    let selection = document.getSelection();
    if (!selection.isCollapsed & selection.focusNode.parentNode === div_input){
        console.log(getSelectedText(selection));
    }
}


function getSelectedText(selection){
    let string = selection.focusNode.nodeValue;
    let anchorOffset = selection.anchorOffset;
    let focusOffset = selection.focusOffset;

    console.log(anchorOffset, focusOffset);
    if (anchorOffset > focusOffset) {
        [anchorOffset, focusOffset] = [focusOffset, anchorOffset];
        console.log("changed");
    }
    console.log(anchorOffset, focusOffset);
    return string.slice(anchorOffset, focusOffset);
}

class Word {

    constructor(text=""){
        this.selected = false;
        this.text = text;
        this.div = htmlToElement(`<div class="word-wrap">${this.text}</div>`);

        this.div.addEventListener("click", this.select);
    }

    render(){
        if (this.selected){
            this.div.classList.add("word-wrap-selected");
        } else {
            this.div.classList.remove("word-wrap-selected");
        }
        this.div.innerText = this.text;
    }

    select(e){
        let word = Word.getWordByDiv(this);
        if (word.selected){
            word.selected = false;
        } else {
            word.selected = true;
        }
        word.render();
    }

    changeText(text){
        this.text = text;
        this.render();
    }

    static renderWords(){
        words_show_div.innerHTML = "";
        for (let word of words_list){
            words_show_div.appendChild(word.div);
        }
    }

    static getWordByDiv(div){
        for (let word of words_list) {
            if (word.div === div) {
                return word;
            }
        }
        return null;
    }
}

var words_list = [new Word()];

function processChange(change){
    switch (change.action){
        case "space":
            break;

        case "changed":
            changeWord(change);
            break;

        case "added":
            addWord(change);
            break;

        case "deleted":
            deleteWord(change);
            let new_change = compareWords();
            processChange(new_change);
            break;
    }
}


div_input.addEventListener('keyup', e => {
    console.log(e);
    if (e.key == " "){
        return null;
    }
    let change = compareWords();
    console.log(change);
    processChange(change);
})


function changeWord(change){
    let word = words_list[change.index];
    word.changeText(change.currentWord);
    Word.renderWords();
}


function addWord(change){
    let new_word = new Word(change.currentWord);
    words_list.splice(change.index, 0, new_word);
    Word.renderWords();
}


function deleteWord(change){
    console.log(words_list[change.index]);
    words_list.splice(change.index, 1);
    Word.renderWords();
}


function compareWords(){
    let words_strings = removeOddOut(div_input.innerText.trim()).split(" ");
    let prev_words = getSavedWordsStrings();
    console.log(`previous words: ${prev_words}`);
    console.log(`words strings: ${words_strings}`);

    let longer;

    if (words_strings.length > prev_words.length){
        longer = words_strings;
    } else {
        longer = prev_words;
    }

    for (let i in longer) {
        let prev_word = prev_words[i];
        let curr_word = words_strings[i];
        console.log(`previous: ${prev_word}`, `current: ${curr_word}`);
        if (prev_word == curr_word) {
            continue;
        } else {
            if (words_strings.length == prev_words.length){
                return {
                    "action": "changed",
                    "index": i,
                    "prevWord": prev_word,
                    "currentWord": curr_word
                }
            }

            if (words_strings.length > prev_words.length) {
                return {
                    "action": "added",
                    "index": i,
                    "currentWord": curr_word
                }
            }

            if (words_strings.length < prev_words.length) {
                return {
                    "action": "deleted",
                    "index": i,
                    "word": prev_word
                }
            }
        }
    }

    return {
        "action": "space"
    }
}


function getSavedWordsStrings(){
    let words = [];
    if (words_list.length == 0){
        return [""];
    }
    // console.log(words_list);
    for (let word of words_list) {
        // console.log(word, words_list)
        words.push(word.text);
    }
    return words;
}


function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}


function removeOddOut(str){
    str = str.replace(/\s{2,}/g, ' ');
    str = str.replace(/(,|!|\?|"|'|\(|\))/g, '');
    return str;
}
