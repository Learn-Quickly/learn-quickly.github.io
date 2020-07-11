const alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

const question_type = document.getElementById("question_variants");

const question_header = document.getElementById("question_header");
const variative = document.getElementById("variative");

const session_select = document.querySelectorAll(".session-checkbox");

const json_place = document.getElementById('json_place');


class Question {
    type;
    question_div;
    question_header;

    get sessions() {
        return getSessions();
    }
}


class OneChooseQuestion extends Question {
    type = 1;

    constructor(){
        super();
        this.question_div = document.createElement('div');
        this.question_header = htmlToElement(`<textarea class="col-11 mt-5 ml-3 question_textarea" name="question_text" id="question_text" placeholder="Ввведите текст вопроса" row="4"></textarea>`);
        this.question_body = htmlToElement(`<div class="row">
                        <h4 class="col-3">Варианты ответов</h4>
                        <div class="col-4"><button class="btn btn-success" onclick="firstTypeQuestion.add_variant();" id="add_one_choose_variant">Добавить вариант</button></div>
                    </div>`);
        this.variants_node = htmlToElement('<div class="container" id="variants"></div>');

        this.question_div.appendChild(this.question_body);
        this.question_div.appendChild(this.variants_node);

        this.question_textarea = this.question_header;

        this.variant_divs = {};
        this.variants_count = 0;

        for (let i = 0; i < 2; i++) {
            this.add_variant();
        }
    }

    add_variant(){
        if (this.variants_count > 32){
            return null;
        }
        let variant_name = alphabet[this.variants_count++];
        let uuid = uuidv4();
        let div = htmlToElement(`<div class="row mt-3">
                                        <input type="radio" name="true_answer" value="${uuid}" class="align-self-center mr-3 true_answer">
                                        <div class="align-self-center variant mr-3">${variant_name}</div>
                                        <div class="card col-11">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <input class="answer-variant answer-variant-${uuid}" type="text" name="answer_text" placeholder="Введите вариант ответа">
                                                    </div>
                                                    <div class="ml-auto col-2">
                                                        <button type="button" class="btn btn-danger" onclick="firstTypeQuestion.deleteVariant('${uuid}')">Удалить</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`);
        this.variant_divs[uuid] = div;
        this.renderVariants();
    }

    deleteVariant(uuid){
        if (this.getVariantNodes().length <= 2){
            return null;
        }
        this.variants_count--;
        delete this.variant_divs[uuid];
        this.renderVariants();
    }

    getVariants(){
        let variants = [];
        for (let uuid in this.variant_divs) {
            let div = this.variant_divs[uuid];
            let input = div.getElementsByClassName(`answer-variant-${uuid}`)[0];
            let variant_name = div.getElementsByClassName("variant")[0].innerHTML;

            let variant = {
                "variant_letter": variant_name,
                "variant_text": input.value
            }
            variants.push(variant);
        }
        return variants;
    }

    getVariantNodes(){
        let nodes = [];
        let letter_counter = 0;
        for (let uuid in this.variant_divs) {
            let div = this.variant_divs[uuid];
            div.getElementsByClassName("variant")[0].innerHTML = alphabet[letter_counter++];
            nodes.push(div);
            this.variant_divs[uuid] = div;
        }
        return nodes;
    }

    renderVariants(){
        let variants = this.getVariantNodes();
        this.variants_node.innerHTML = '';
        for (let div of variants) {
            this.variants_node.appendChild(div);
        }
    }

    getAnswer(){
        let radios = this.variants_node.getElementsByClassName("true_answer");
        for (let radio of radios) {
            if (radio.checked) {
                let uuid = radio.value;
                return this.variant_divs[uuid].getElementsByClassName("variant")[0].innerHTML;
            }
        }
    }

    toJson(){
        let questionObject = {
            "type": this.type,
            "sessions": this.sessions,
            "question_text": this.question_textarea.value.trim(),
            "variants": this.getVariants(),
            "answer": this.getAnswer(),
        }

        if (questionObject.sessions.length == 0){
            return "Выберите одну или несколько сессий";
        }

        if (!questionObject.question_text){
            return "Введите текст вопроса";
        }

        if (this.getVariantNodes().length < 2){
            return "Добавьте минимум 2 варианта ответа";
        }

        for (let variant in questionObject.variants){
            if (!questionObject.variants[variant]){
                return `Вариант ${variant} пустой`;
            }
        }

        if (!questionObject.answer){
            return "Укажите правильный ответ";
        }

        return JSON.stringify(questionObject);
    }
}


class EnterAnswerQuestion extends Question {
    type = 4;

    constructor(){
        super();
        this.question_div = document.createElement('div');
        this.question_header = htmlToElement(`<div class="col-11">
                            <textarea class="col-11 mt-5 ml-3 question_textarea" name="question_text" id="question_text" placeholder="Ввведите текст вопроса" row="4"></textarea>
                        </div>`);
        this.question_body = htmlToElement(`<div class="row justify-content-center">
                            <input class="col-7" id="one_variant_input" type="text" placeholder="Введите текст ответа" onchange="fourthTypeQuestion.validateAnswerInput();"/>
                        </div>`);

        this.question_div.appendChild(this.question_body);

        this.question_textarea = this.question_header.getElementsByClassName("question_textarea")[0];
        this.answer_input = this.question_body.firstChild.nextSibling;
    }

    validateAnswerInput(){
        let answer_string = this.answer_input.value.trim();
        this.answer_input.value = answer_string;
        if (answer_string.split(" ").length > 1 | answer_string.split(" ") == "") {
            this.answer_input.style.borderColor = "#f44336";
            return false;
        } else {
            this.answer_input.style.borderColor = "#757575";
            return true;
        }
    }

    getAnswer(){
        return this.answer_input.value.trim();
    }

    toJson(){
        let questionObject = {
            "type": this.type,
            "sessions": this.sessions,
            "question_text": this.question_textarea.value.trim(),
            "answer": this.getAnswer(),
        }

        if (questionObject.question_text == ""){
            return "Введите текст вопроса"
        }
        
        if (questionObject.sessions.length == 0){
            return "Выберите одну или несколько сессий";
        }

        if (!this.validateAnswerInput()) {
            return "Ответ должен состоять из одного слова"
        }

        return JSON.stringify(questionObject);
    }

}


class Letter {

    get selectOptions(){
        return ["nothing", "missed"];
    }

    constructor(parentWord, letter=""){
        this.parentWord = parentWord;
        this._letter = letter;
        this.div = htmlToElement(`<div class="word-letter">${this.letter}</div>`);
        this.div.addEventListener('click', e => {
            this.parentWord.select({
                "event": e,
                "letter": this
            });
        });
        this.selectedAs = {"as": "nothing"};
    }

    render(){
        switch (this.selectedAs.as){
            case "nothing":
                this.div.style.backgroundColor = "rgba(0, 0, 0, 0)";
                break;
            case "missed":
                this.div.style.backgroundColor = "lightblue";
                this.parentWord.selectWord("nothing");
                this.parentWord.render();
                break;
        }
        this.div.innerText = this.letter;
    }

    selectLetter(as){
        switch (as) {
            case "nothing":
                this.selectedAs.as = as;
                break;
            case "missed":
                this.selectedAs.as = as;
                break;
            default:
                throw (new Error("incorrect select option"));
        }
        if (this.selectOptions.indexOf(as) != -1){
            this.selectedAs.as = as;
        } else {
            throw (new Error("incorrect select option"));
        }
    }

    get letter(){
        return this._letter;
    }

    get questionText(){
        switch (this.selectedAs.as){
            case "nothing":
                return this.letter;
                break;
            case "missed":
                return InsertWordsQuestion.insertTypes.letter.missed;
                break;
        }
    }
}


class Word {
    selectOptions = ["nothing", "missed", "mixed"];

    constructor(parentQuestion, text=""){
        this.selected = false;
        this._text = text;
        this.parentQuestion = parentQuestion;
        this.letters = [];

        this.div = htmlToElement(`<div class="word-wrap">${this.text}</div>`);
        // this.div.addEventListener("click", e => {
        //     let word = this.getWordByDiv(e.target);
        //     if (word == null) {
        //         word = this.getWordByDiv(e.target.parentNode);
        //     }
        //     if (word.selected){
        //         word.selected = false;
        //     } else {
        //         word.selected = true;
        //     }
        //     word.render();
        //     this.parentQuestion.renderPreview();
        // });
        this.selectedAs = {"as": "nothing"};
    }

    selectWord(as){
        if (this.selectOptions.indexOf(as) != -1){
            this.selectedAs.as = as;
        } else {
            throw (new Error("incorrect select option"));
        }
    }

    buildLetters(){
        let new_letters = [];
        for (let char of this.text){
            new_letters.push(new Letter(this, char));
        }
        if (new_letters.map(letter => letter.letter).join("") != this.letters.map(letter => letter.letter).join("")){
            this.letters = new_letters;
        }
    }

    buildDiv(){
        this.div.innerHTML = '';
        this.buildLetters();
        for (let letter of this.letters){
            this.div.appendChild(letter.div);
        }
    }

    render(){
        // if (this.selected){
        //     this.div.classList.add("word-wrap-selected");
        // } else {
        //     this.div.classList.remove("word-wrap-selected");
        // }
        console.log(this.selectedAs);
        switch (this.selectedAs.as){
            case "nothing":
                this.div.style.backgroundColor = "rgba(0, 0, 0, 0)";
                break;
            case "missed":
                this.div.style.backgroundColor = "#FF7676";
                break;
            case "mixed":
                this.div.style.backgroundColor = "lightgreen";
                break;
        }

        this.buildDiv();
    }

    select(callback){
        // let word = this.getWordByDiv(this);
        // if (word.selected){
        //     word.selected = false;
        // } else {
        //     word.selected = true;
        // }
        // word.render();
        this.parentQuestion.select(callback);
    }

    get text(){
        return this._text;
    }

    changeText(text){
        this._text = text;
        this.render();
    }

    getWordByDiv(div){
        for (let word of this.parentQuestion.words_list) {
            if (word.div === div) {
                return word;
            }
        }
        return null;
    }

    getLetterByDiv(div){
        for (let letter of this.letters){
            if (letter.div === div){
                return letter;
            }
        }
        return null;
    }

    get questionText(){
        switch (this.selectedAs.as){
            case "nothing":
                return this.letters.map(letter => letter.questionText).join("");
                break;
            case "missed":
                return InsertWordsQuestion.insertTypes.word.missed;
                break;
            case "mixed":
                return InsertWordsQuestion.insertTypes.word.mixed;
                break;
        }
    }
}

class TransformationPalette {
    constructor(items) {
        this.items = items;

        this.div = document.createElement('div');
        this.div.classList.add('row');
        for (let item of items) {
            this.div.appendChild(item.label);
        }
    }

    getItemByNode(node){
        for (let item of this.items){
            if (item.label === node) {
                return item;
            }
        }
        throw (new Error("Such TransformationPaletteItem was not found"));
    }

    getSelectedPaletteItem(){
        for (let item of this.items) {
            if (item.label.firstChild.checked){
                return item;
            }
        }
        throw (new Error("Not found slected palette item"));
    }
}

class TransformationPaletteItem {
    constructor(transfomation_name, color, selectorStrategy){
        this.transfomation_name = transfomation_name;
        this.color = color;
        this.label = htmlToElement(`<label class="palette-label mt-3"><input type="radio" class="palette-radio d-none" name="palette-radio"><span style="background-color: ${this.color}; border-color: ${this.color};">${this.transfomation_name}</span></label> `);
        this.selectorStrategy = selectorStrategy;
    }
}


class SelectorStrategy {
    select(callback){
        throw (new NotImplementedError("Not implemented"));
    }
}


class SelectMissWord extends SelectorStrategy {
    unselectLetters(letters){
        for (let letter of letters){
            letter.selectLetter("nothing");
            letter.render();
        }
    }

    select(callback) {
        console.log("in select miss word", callback);
        let word = callback.letter.parentWord;
        if (word.selectedAs.as != "missed") {
            word.selectWord("missed");    
        } else {
            word.selectWord("nothing");
        }
        this.unselectLetters(word.letters);
        word.render();
    }
}


class SelectMissLetter extends SelectorStrategy {
    select(callback){
        console.log("in select miss letter", callback);
        let letter = callback.letter;
        if (letter.selectedAs.as != "missed") {
            letter.selectLetter("missed");    
        } else {
            letter.selectLetter("nothing");
        }
        letter.render();

    }
}


class SelectMixWord extends SelectorStrategy {
    unselectLetters(letters){
        for (let letter of letters){
            letter.selectLetter("nothing");
            letter.render();
        }
    }

    select(callback) {
        console.log("in select mix word", callback);
        let word = callback.letter.parentWord;
        if (word.selectedAs.as != "mixed") {
            word.selectWord("mixed");    
        } else {
            word.selectWord("nothing");
        }
        this.unselectLetters(word.letters);
        word.render();
    }
}


class InsertWordsQuestion extends Question {
    type = 5;

    // insertTypes = { // designation of selected object in json
    //     "letter": {
    //         "missed": "{square}"
    //     },  
    //     "word": {
    //         "missed": "{missed}",
    //         "mixed": "{missed}"
    //     }
    // };

    static get insertTypes(){
        return { // designation of selected object in json
            "letter": {
                "missed": "{square}"
            },  
            "word": {
                "missed": "{missed}",
                "mixed": "{mixed}"
            }
        };
    }

    constructor(palette){
        super();
        this.question_div = document.createElement('div');
        this.question_header = htmlToElement(`<div class="col-10 input-div mt-5" id="div_input" contenteditable=true placeholder="Введите текст вопроса"></div>`);
        this.palette = palette;
        this.question_body = htmlToElement(`<div class="row justify-content-center"> 
                            <div class="container"></div>
                            <div class="col-11 mt-3" id="show_words"></div>
                        </div>`);
        this.question_body.firstChild.nextSibling.appendChild(this.palette.div);
        this.question_preview_part = htmlToElement(`<div class="container"><div class="row mt-3 justify-content-center"><h2>Предпросмотр:</h1></div>
                        <div class="row mt-3 justify-content-center">
                            <div class="col-11" id="question_example"></div>
                        </div></div>`);
        this.question_preview = this.question_preview_part.firstChild.nextSibling.nextSibling.firstChild.nextSibling;


        this.question_div.appendChild(this.question_body);
        this.question_div.appendChild(this.question_preview_part);


        this.words_list = [];

        this.div_input = this.question_header;

        this.div_input.addEventListener('keyup', e => {
            let change = this.compareWords();
            // console.log(change);
            this.processChange(change);
            this.renderPreview();
        });

        this.words_show_div = this.question_div.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
    }

    filterWords(){
        for (let i in this.words_list){
            if (this.words_list[i].text == ""){
                this.words_list.splice(i, 1);
            }
        }
    }

    getQuestionText(){
        let inputText = this.div_input.innerText.trim();
        this.filterWords();

        let answerString = "";

        let firstIndex;
        let slice;
        let wordText;

        for (let word of this.words_list){
            wordText = word.text;

            firstIndex = inputText.indexOf(wordText);
            slice = inputText.slice(0, firstIndex);
            answerString += slice;
            inputText = inputText.slice(firstIndex + wordText.length);

            answerString += word.questionText;

        }
        slice = inputText.slice(0);
        answerString += slice;

        return answerString;
    }

    getAnswer(){
        // let answers = [];
        // for (let word of this.words_list){
        //     if (word.selected){
        //         answers.push(word.text);
        //     }
        // }
        // return answers;
        let answer = {
            "variant1": {
                "missed": [],
                "square": [],
                "mixed": []
            },
            "variant2": []
        };
        for (let word of this.words_list){
            if (word.selectedAs.as != "nothing") {
                answer.variant2.push(word.text);
                
                switch (word.selectedAs.as) {
                    case "missed":
                        answer.variant1.missed.push(word.text);
                        break;
                    case "mixed":
                        answer.variant1.mixed.push(word.text);
                        break;
                }
                continue;
            }
            for (let letter of word.letters){
                if (letter.selectedAs.as != "nothing"){
                    answer.variant2.push(letter.letter);

                    switch (letter.selectedAs.as) {
                        case "missed":
                            answer.variant1.square.push(letter.letter);
                            break;
                    }

                }
            }
        }
        return answer;
    }

    toJson(){
        let questionObject = {
            "type": this.type,
            "sessions": this.sessions,
            "question_text": this.getQuestionText(),
            "answer": this.getAnswer(),
        }

        if (questionObject.question_text == ""){
            return "Введите текст вопроса";
        }
        
        if (questionObject.sessions.length == 0){
            return "Выберите одну или несколько сессий";
        }

        if (questionObject.answer.variant2.length == 0){
            return "Выберите одно или несколько слов для вписывания";
        }

        return JSON.stringify(questionObject);
    }

    compareWords(){
        let words_strings = InsertWordsQuestion.removeOddOut(this.div_input.innerText.trim()).split(" ");
        let prev_words = this.getSavedWordsStrings();
        // console.log(`previous words: ${prev_words}`);
        // console.log(`words strings: ${words_strings}`);

        let longest;

        if (words_strings.length > prev_words.length){
            longest = words_strings;
        } else {
            longest = prev_words;
        }

        for (let i in longest) {
            let prev_word = prev_words[i];
            let curr_word = words_strings[i];
            // console.log(`previous: ${prev_word}`, `current: ${curr_word}`);
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

    processChange(change){
        switch (change.action){
            case "space":
                break;

            case "changed":
                this.changeWord(change);
                // let new_change = compareWords();
                this.processChange(this.compareWords());
                break;

            case "added":
                this.addWord(change);
                // let new_change = compareWords();
                this.processChange(this.compareWords());
                break;

            case "deleted":
                this.deleteWord(change);
                // let new_change = compareWords();
                this.processChange(this.compareWords());
                break;
        }
    }

    changeWord(change){
        let word = this.words_list[change.index];
        word.changeText(change.currentWord);
        this.renderWords();
    }


    addWord(change){
        let new_word = new Word(this, change.currentWord);
        this.words_list.splice(change.index, 0, new_word);
        this.renderWords();
    }


    deleteWord(change){
        // console.log(this.words_list[change.index]);
        this.words_list.splice(change.index, 1);
        this.renderWords();
    }

    getSavedWordsStrings(){
        let words = [];
        if (this.words_list.length == 0){
            return [];
        }
        // console.log(words_list);
        for (let word of this.words_list) {
            // console.log(word, words_list)
            words.push(word.text);
        }
        return words;
    }


    renderWords(){
        this.words_show_div.innerHTML = "";
        for (let word of this.words_list){
            this.words_show_div.appendChild(word.div);
            word.render();
        }
    }


    renderPreview(){
        let json = this.toJson();

        let questionObject;

        try {
            questionObject = JSON.parse(json);
        } catch (SyntaxError) {
            this.question_preview.innerHTML = json;
            return false;
        }

        let answerString = "";

        let firstIndex;
        let slice;
        let wordText;

        let findText = "{txt}"
        for (let word of questionObject.answer){

            firstIndex = questionObject.question_text.indexOf(findText);
            slice = questionObject.question_text.slice(0, firstIndex);
            answerString += slice;
            answerString += `<div class="missed-word">${word}</div>`;
            questionObject.question_text = questionObject.question_text.slice(firstIndex + findText.length);

        }
        slice = questionObject.question_text.slice(0);
        answerString += slice;

        this.question_preview.innerHTML = answerString.replace(/(\r\n|\n|\r)/g, "<br/>");
    }


    select(callback){
        let palleteItem = this.palette.getSelectedPaletteItem();
        palleteItem.selectorStrategy.select(callback);

    }


    static removeOddOut(str){
        str = str.replace(/(,|\.|!|\?|"|'|\(|\)|;|:|-|[\r\n]+|&)/g, ' ');
        str = str.replace(/\s{2,}/g, ' ');
        return str;
    }   

}


const firstTypeQuestion = new OneChooseQuestion();
const fourthTypeQuestion = new EnterAnswerQuestion();

const TransformationPaletteItems = [
    new TransformationPaletteItem('Пропущенное слово', 'lightcoral', new SelectMissWord()),
    new TransformationPaletteItem('Пропущенные буквы', 'lightblue', new SelectMissLetter()),
    new TransformationPaletteItem('Перемешанное слово', 'lightgreen', new SelectMixWord()),
]
const fifthTypeQuestion = new InsertWordsQuestion(new TransformationPalette(TransformationPaletteItems));


function getQuestionObject(){
    let question;
    localStorage.setItem("lastSelectedQuestion", question_type.value);
    switch (parseInt(question_type.value)) {
        case 1:
            question = firstTypeQuestion;
            break;
        
        case 2:
            question = firstTypeQuestion;
            break;
        
        case 3:
            question = firstTypeQuestion;
            break;
        
        case 4:
            question = fourthTypeQuestion;
            break;
        case 5:
            question = fifthTypeQuestion;
            break;
        
    }

    return question;
}

function getSessions(){
    let sessions = [];

    for (let checkbox of session_select) {
        if (checkbox.checked) {
            sessions.push(parseInt(checkbox.name));
        }
    }
    return sessions;
}

function writeJson(jsonString){
    json_place.innerHTML = jsonString;
}

function renderJson(){
    writeJson(getQuestionObject().toJson());
}

function renderQuestion(){
    let question = getQuestionObject();
    // console.log(question);
    variative.innerHTML = '';
    variative.appendChild(question.question_div);

    question_header.innerHTML = '';
    question_header.appendChild(question.question_header);

}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}


function bodyLoaded(){
    let lastSelectedQuestion = localStorage.getItem("lastSelectedQuestion");
    if (lastSelectedQuestion){
        question_type.value = lastSelectedQuestion;
    }
    renderQuestion();
    // console.log("loaded");
}
