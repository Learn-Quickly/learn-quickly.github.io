const alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

const question_type = document.getElementById("question_variants");

const variative = document.getElementById("variative");
const question_header = document.getElementById("question_header");

const session_select = document.getElementById("session_variants");

const json_place = document.getElementById('json_place');


class Question {
    type;
    sessions;
    question_div;
    question_header;
}


class OneChooseQuestion extends Question {
    type = 1;

    constructor(){
        super();
        this.sessions = [];
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
        this.sessions = [];
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
            return "Ответ должен состоять из одного и только одного слова"
        }

        return JSON.stringify(questionObject);
    }

}

class Word {

    constructor(parentQuestion, text=""){
        this.selected = false;
        this.text = text;
        this.parentQuestion = parentQuestion;

        this.div = htmlToElement(`<div class="word-wrap">${this.text}</div>`);
        this.div.addEventListener("click", e => {
            let word = this.getWordByDiv(e.path[0]);
            if (word.selected){
                word.selected = false;
            } else {
                word.selected = true;
            }
            word.render();
        });
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
        let word = this.getWordByDiv(this);
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

    getWordByDiv(div){
        for (let word of this.parentQuestion.words_list) {
            if (word.div === div) {
                return word;
            }
        }
        return null;
    }
}

class InsertWordsQuestion extends Question {
    type = 5;

    constructor(){
        super();
        this.sessions = [];
        this.question_div = document.createElement('div');
        this.question_header = htmlToElement(`<div class="col-7 input-div mt-5" id="div_input" contenteditable=true placeholder="Hello"></div>`);
        this.question_body = htmlToElement(`<div class="row justify-content-center">
                            <div class="col-11 mt-3" id="show_words"></div>
                        </div>`);

        this.question_div.appendChild(this.question_body);


        this.words_list = [];

        this.div_input = this.question_header;

        this.div_input.addEventListener('keyup', e => {
            let change = this.compareWords();
            console.log(change);
            this.processChange(change);
        })

        this.words_show_div = this.question_div.firstChild.firstChild.nextSibling;
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
            return "Ответ должен состоять из одного и только одного слова"
        }

        return JSON.stringify(questionObject);
    }

    compareWords(){
        let words_strings = InsertWordsQuestion.removeOddOut(this.div_input.innerText.trim()).split(" ");
        let prev_words = this.getSavedWordsStrings();
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
        console.log(this.words_list[change.index]);
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
        }
    }


    static removeOddOut(str){
        str = str.replace(/(,|\.|!|\?|"|'|\(|\))/g, ' ');
        str = str.replace(/\s{2,}/g, ' ');
        return str;
    }   


}


const firstTypeQuestion = new OneChooseQuestion();
const fourthTypeQuestion = new EnterAnswerQuestion();
const fifthTypeQuestion = new InsertWordsQuestion();

function select_session(){
    let question = getQuestionObject();

    question.sessions = getSessions();

}

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

    for (let option of session_select.options) {
        if (option.selected) {
            sessions.push(parseInt(option.value));
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
    console.log(question);
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
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}


function bodyLoaded(){
    let lastSelectedQuestion = localStorage.getItem("lastSelectedQuestion");
    if (lastSelectedQuestion){
        question_type.value = lastSelectedQuestion;
    }
    renderQuestion();
    console.log("loaded");
}
