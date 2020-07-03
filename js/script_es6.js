var alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

var question_type = document.getElementById("question_variants");

var variative = document.getElementById("variative");
var question_header = document.getElementById("question_header");

var session_select = document.getElementById("session_variants");

var json_place = document.getElementById('json_place');


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
        // let variants = {};
        // for (let uuid in this.variant_divs) {
            // let div = this.variant_divs[uuid];
            // let input = div.getElementsByClassName(`answer-variant-${uuid}`)[0];
            // let variant_name = div.getElementsByClassName("variant")[0].innerHTML;

        //     variants[variant_name] = input.value;
        // }
        // return variants;
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
    type = 4
}


const firstTypeQuestion = new OneChooseQuestion();


function select_session(){
    let question = getQuestionObject();

    question.sessions = getSessions();

}

function getQuestionObject(){
    let question;
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
            question = firstTypeQuestion;
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

renderQuestion();
