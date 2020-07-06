"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";
var question_type = document.getElementById("question_variants");
var variative = document.getElementById("variative");
var question_header = document.getElementById("question_header");
var session_select = document.querySelectorAll(".session-checkbox");
var json_place = document.getElementById('json_place');

var Question = /*#__PURE__*/function () {
  function Question() {
    _classCallCheck(this, Question);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "question_div", void 0);

    _defineProperty(this, "question_header", void 0);
  }

  _createClass(Question, [{
    key: "sessions",
    get: function get() {
      return getSessions();
    }
  }]);

  return Question;
}();

var OneChooseQuestion = /*#__PURE__*/function (_Question) {
  _inherits(OneChooseQuestion, _Question);

  var _super = _createSuper(OneChooseQuestion);

  function OneChooseQuestion() {
    var _this;

    _classCallCheck(this, OneChooseQuestion);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "type", 1);

    _this.question_div = document.createElement('div');
    _this.question_header = htmlToElement("<textarea class=\"col-11 mt-5 ml-3 question_textarea\" name=\"question_text\" id=\"question_text\" placeholder=\"\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\" row=\"4\"></textarea>");
    _this.question_body = htmlToElement("<div class=\"row\">\n                        <h4 class=\"col-3\">\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u0442\u0432\u0435\u0442\u043E\u0432</h4>\n                        <div class=\"col-4\"><button class=\"btn btn-success\" onclick=\"firstTypeQuestion.add_variant();\" id=\"add_one_choose_variant\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442</button></div>\n                    </div>");
    _this.variants_node = htmlToElement('<div class="container" id="variants"></div>');

    _this.question_div.appendChild(_this.question_body);

    _this.question_div.appendChild(_this.variants_node);

    _this.question_textarea = _this.question_header;
    _this.variant_divs = {};
    _this.variants_count = 0;

    for (var i = 0; i < 2; i++) {
      _this.add_variant();
    }

    return _this;
  }

  _createClass(OneChooseQuestion, [{
    key: "add_variant",
    value: function add_variant() {
      if (this.variants_count > 32) {
        return null;
      }

      var variant_name = alphabet[this.variants_count++];
      var uuid = uuidv4();
      var div = htmlToElement("<div class=\"row mt-3\">\n                                        <input type=\"radio\" name=\"true_answer\" value=\"".concat(uuid, "\" class=\"align-self-center mr-3 true_answer\">\n                                        <div class=\"align-self-center variant mr-3\">").concat(variant_name, "</div>\n                                        <div class=\"card col-11\">\n                                            <div class=\"card-body\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-6\">\n                                                        <input class=\"answer-variant answer-variant-").concat(uuid, "\" type=\"text\" name=\"answer_text\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430\">\n                                                    </div>\n                                                    <div class=\"ml-auto col-2\">\n                                                        <button type=\"button\" class=\"btn btn-danger\" onclick=\"firstTypeQuestion.deleteVariant('").concat(uuid, "')\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>"));
      this.variant_divs[uuid] = div;
      this.renderVariants();
    }
  }, {
    key: "deleteVariant",
    value: function deleteVariant(uuid) {
      if (this.getVariantNodes().length <= 2) {
        return null;
      }

      this.variants_count--;
      delete this.variant_divs[uuid];
      this.renderVariants();
    }
  }, {
    key: "getVariants",
    value: function getVariants() {
      var variants = [];

      for (var uuid in this.variant_divs) {
        var div = this.variant_divs[uuid];
        var input = div.getElementsByClassName("answer-variant-".concat(uuid))[0];
        var variant_name = div.getElementsByClassName("variant")[0].innerHTML;
        var variant = {
          "variant_letter": variant_name,
          "variant_text": input.value
        };
        variants.push(variant);
      }

      return variants;
    }
  }, {
    key: "getVariantNodes",
    value: function getVariantNodes() {
      var nodes = [];
      var letter_counter = 0;

      for (var uuid in this.variant_divs) {
        var div = this.variant_divs[uuid];
        div.getElementsByClassName("variant")[0].innerHTML = alphabet[letter_counter++];
        nodes.push(div);
        this.variant_divs[uuid] = div;
      }

      return nodes;
    }
  }, {
    key: "renderVariants",
    value: function renderVariants() {
      var variants = this.getVariantNodes();
      this.variants_node.innerHTML = '';

      var _iterator = _createForOfIteratorHelper(variants),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var div = _step.value;
          this.variants_node.appendChild(div);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "getAnswer",
    value: function getAnswer() {
      var radios = this.variants_node.getElementsByClassName("true_answer");

      var _iterator2 = _createForOfIteratorHelper(radios),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var radio = _step2.value;

          if (radio.checked) {
            var uuid = radio.value;
            return this.variant_divs[uuid].getElementsByClassName("variant")[0].innerHTML;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "toJson",
    value: function toJson() {
      var questionObject = {
        "type": this.type,
        "sessions": this.sessions,
        "question_text": this.question_textarea.value.trim(),
        "variants": this.getVariants(),
        "answer": this.getAnswer()
      };

      if (questionObject.sessions.length == 0) {
        return "Выберите одну или несколько сессий";
      }

      if (!questionObject.question_text) {
        return "Введите текст вопроса";
      }

      if (this.getVariantNodes().length < 2) {
        return "Добавьте минимум 2 варианта ответа";
      }

      for (var variant in questionObject.variants) {
        if (!questionObject.variants[variant]) {
          return "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 ".concat(variant, " \u043F\u0443\u0441\u0442\u043E\u0439");
        }
      }

      if (!questionObject.answer) {
        return "Укажите правильный ответ";
      }

      return JSON.stringify(questionObject);
    }
  }]);

  return OneChooseQuestion;
}(Question);

var EnterAnswerQuestion = /*#__PURE__*/function (_Question2) {
  _inherits(EnterAnswerQuestion, _Question2);

  var _super2 = _createSuper(EnterAnswerQuestion);

  function EnterAnswerQuestion() {
    var _this2;

    _classCallCheck(this, EnterAnswerQuestion);

    _this2 = _super2.call(this);

    _defineProperty(_assertThisInitialized(_this2), "type", 4);

    _this2.question_div = document.createElement('div');
    _this2.question_header = htmlToElement("<div class=\"col-11\">\n                            <textarea class=\"col-11 mt-5 ml-3 question_textarea\" name=\"question_text\" id=\"question_text\" placeholder=\"\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\" row=\"4\"></textarea>\n                        </div>");
    _this2.question_body = htmlToElement("<div class=\"row justify-content-center\">\n                            <input class=\"col-7\" id=\"one_variant_input\" type=\"text\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442\u0432\u0435\u0442\u0430\" onchange=\"fourthTypeQuestion.validateAnswerInput();\"/>\n                        </div>");

    _this2.question_div.appendChild(_this2.question_body);

    _this2.question_textarea = _this2.question_header.getElementsByClassName("question_textarea")[0];
    _this2.answer_input = _this2.question_body.firstChild.nextSibling;
    return _this2;
  }

  _createClass(EnterAnswerQuestion, [{
    key: "validateAnswerInput",
    value: function validateAnswerInput() {
      var answer_string = this.answer_input.value.trim();
      this.answer_input.value = answer_string;

      if (answer_string.split(" ").length > 1 | answer_string.split(" ") == "") {
        this.answer_input.style.borderColor = "#f44336";
        return false;
      } else {
        this.answer_input.style.borderColor = "#757575";
        return true;
      }
    }
  }, {
    key: "getAnswer",
    value: function getAnswer() {
      return this.answer_input.value.trim();
    }
  }, {
    key: "toJson",
    value: function toJson() {
      var questionObject = {
        "type": this.type,
        "sessions": this.sessions,
        "question_text": this.question_textarea.value.trim(),
        "answer": this.getAnswer()
      };

      if (questionObject.question_text == "") {
        return "Введите текст вопроса";
      }

      if (questionObject.sessions.length == 0) {
        return "Выберите одну или несколько сессий";
      }

      if (!this.validateAnswerInput()) {
        return "Ответ должен состоять из одного слова";
      }

      return JSON.stringify(questionObject);
    }
  }]);

  return EnterAnswerQuestion;
}(Question);

var Word = /*#__PURE__*/function () {
  function Word(parentQuestion) {
    var _this3 = this;

    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, Word);

    this.selected = false;
    this.text = text;
    this.parentQuestion = parentQuestion;
    this.div = htmlToElement("<div class=\"word-wrap\">".concat(this.text, "</div>"));
    this.div.addEventListener("click", function (e) {
      var word = _this3.getWordByDiv(e.target);

      if (word.selected) {
        word.selected = false;
      } else {
        word.selected = true;
      }

      word.render();
    });
  }

  _createClass(Word, [{
    key: "render",
    value: function render() {
      if (this.selected) {
        this.div.classList.add("word-wrap-selected");
      } else {
        this.div.classList.remove("word-wrap-selected");
      }

      this.div.innerText = this.text;
    }
  }, {
    key: "select",
    value: function select(e) {
      var word = this.getWordByDiv(this);

      if (word.selected) {
        word.selected = false;
      } else {
        word.selected = true;
      }

      word.render();
    }
  }, {
    key: "changeText",
    value: function changeText(text) {
      this.text = text;
      this.render();
    }
  }, {
    key: "getWordByDiv",
    value: function getWordByDiv(div) {
      var _iterator3 = _createForOfIteratorHelper(this.parentQuestion.words_list),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var word = _step3.value;

          if (word.div === div) {
            return word;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return null;
    }
  }]);

  return Word;
}();

var InsertWordsQuestion = /*#__PURE__*/function (_Question3) {
  _inherits(InsertWordsQuestion, _Question3);

  var _super3 = _createSuper(InsertWordsQuestion);

  function InsertWordsQuestion() {
    var _this4;

    _classCallCheck(this, InsertWordsQuestion);

    _this4 = _super3.call(this);

    _defineProperty(_assertThisInitialized(_this4), "type", 5);

    _this4.question_div = document.createElement('div');
    _this4.question_header = htmlToElement("<div class=\"col-10 input-div mt-5\" id=\"div_input\" contenteditable=true placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\"></div>");
    _this4.question_body = htmlToElement("<div class=\"row justify-content-center\">\n                            <div class=\"col-11 mt-3\" id=\"show_words\"></div>\n                        </div>");

    _this4.question_div.appendChild(_this4.question_body);

    _this4.words_list = [];
    _this4.div_input = _this4.question_header;

    _this4.div_input.addEventListener('keyup', function (e) {
      var change = _this4.compareWords(); // console.log(change);


      _this4.processChange(change);
    });

    _this4.words_show_div = _this4.question_div.firstChild.firstChild.nextSibling;
    return _this4;
  }

  _createClass(InsertWordsQuestion, [{
    key: "filterWords",
    value: function filterWords() {
      for (var i in this.words_list) {
        if (this.words_list[i].text == "") {
          this.words_list.splice(i, 1);
        }
      }
    }
  }, {
    key: "getQuestionText",
    value: function getQuestionText() {
      var inputText = this.div_input.innerText.trim();
      this.filterWords();
      var answerString = "";
      var firstIndex;
      var slice;
      var wordText;

      var _iterator4 = _createForOfIteratorHelper(this.words_list),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var word = _step4.value;
          wordText = word.text;
          firstIndex = inputText.indexOf(wordText);
          slice = inputText.slice(0, firstIndex);
          answerString += slice;
          inputText = inputText.slice(firstIndex + wordText.length);

          if (word.selected) {
            answerString += "{txt}";
          } else {
            answerString += wordText;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      slice = inputText.slice(0);
      answerString += slice;
      return answerString;
    }
  }, {
    key: "getAnswer",
    value: function getAnswer() {
      var answers = [];

      var _iterator5 = _createForOfIteratorHelper(this.words_list),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var word = _step5.value;

          if (word.selected) {
            answers.push(word.text);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return answers;
    }
  }, {
    key: "toJson",
    value: function toJson() {
      var questionObject = {
        "type": this.type,
        "sessions": this.sessions,
        "question_text": this.getQuestionText(),
        "answer": this.getAnswer()
      };

      if (questionObject.question_text == "") {
        return "Введите текст вопроса";
      }

      if (questionObject.sessions.length == 0) {
        return "Выберите одну или несколько сессий";
      }

      if (questionObject.answer.length == 0) {
        return "Выберите одно или несколько слов для вписывания";
      }

      return JSON.stringify(questionObject);
    }
  }, {
    key: "compareWords",
    value: function compareWords() {
      var words_strings = InsertWordsQuestion.removeOddOut(this.div_input.innerText.trim()).split(" ");
      var prev_words = this.getSavedWordsStrings(); // console.log(`previous words: ${prev_words}`);
      // console.log(`words strings: ${words_strings}`);

      var longer;

      if (words_strings.length > prev_words.length) {
        longer = words_strings;
      } else {
        longer = prev_words;
      }

      for (var i in longer) {
        var prev_word = prev_words[i];
        var curr_word = words_strings[i]; // console.log(`previous: ${prev_word}`, `current: ${curr_word}`);

        if (prev_word == curr_word) {
          continue;
        } else {
          if (words_strings.length == prev_words.length) {
            return {
              "action": "changed",
              "index": i,
              "prevWord": prev_word,
              "currentWord": curr_word
            };
          }

          if (words_strings.length > prev_words.length) {
            return {
              "action": "added",
              "index": i,
              "currentWord": curr_word
            };
          }

          if (words_strings.length < prev_words.length) {
            return {
              "action": "deleted",
              "index": i,
              "word": prev_word
            };
          }
        }
      }

      return {
        "action": "space"
      };
    }
  }, {
    key: "processChange",
    value: function processChange(change) {
      switch (change.action) {
        case "space":
          break;

        case "changed":
          this.changeWord(change); // let new_change = compareWords();

          this.processChange(this.compareWords());
          break;

        case "added":
          this.addWord(change); // let new_change = compareWords();

          this.processChange(this.compareWords());
          break;

        case "deleted":
          this.deleteWord(change); // let new_change = compareWords();

          this.processChange(this.compareWords());
          break;
      }
    }
  }, {
    key: "changeWord",
    value: function changeWord(change) {
      var word = this.words_list[change.index];
      word.changeText(change.currentWord);
      this.renderWords();
    }
  }, {
    key: "addWord",
    value: function addWord(change) {
      var new_word = new Word(this, change.currentWord);
      this.words_list.splice(change.index, 0, new_word);
      this.renderWords();
    }
  }, {
    key: "deleteWord",
    value: function deleteWord(change) {
      // console.log(this.words_list[change.index]);
      this.words_list.splice(change.index, 1);
      this.renderWords();
    }
  }, {
    key: "getSavedWordsStrings",
    value: function getSavedWordsStrings() {
      var words = [];

      if (this.words_list.length == 0) {
        return [];
      } // console.log(words_list);


      var _iterator6 = _createForOfIteratorHelper(this.words_list),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var word = _step6.value;
          // console.log(word, words_list)
          words.push(word.text);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return words;
    }
  }, {
    key: "renderWords",
    value: function renderWords() {
      this.words_show_div.innerHTML = "";

      var _iterator7 = _createForOfIteratorHelper(this.words_list),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var word = _step7.value;
          this.words_show_div.appendChild(word.div);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }], [{
    key: "removeOddOut",
    value: function removeOddOut(str) {
      str = str.replace(/(,|\.|!|\?|"|'|\(|\)|;|:)/g, ' ');
      str = str.replace(/\s{2,}/g, ' ');
      return str;
    }
  }]);

  return InsertWordsQuestion;
}(Question);

var firstTypeQuestion = new OneChooseQuestion();
var fourthTypeQuestion = new EnterAnswerQuestion();
var fifthTypeQuestion = new InsertWordsQuestion();

function getQuestionObject() {
  var question;
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

function getSessions() {
  var sessions = [];

  var _iterator8 = _createForOfIteratorHelper(session_select),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var checkbox = _step8.value;

      if (checkbox.checked) {
        sessions.push(parseInt(checkbox.name));
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  return sessions;
}

function writeJson(jsonString) {
  json_place.innerHTML = jsonString;
}

function renderJson() {
  writeJson(getQuestionObject().toJson());
}

function renderQuestion() {
  var question = getQuestionObject(); // console.log(question);

  variative.innerHTML = '';
  variative.appendChild(question.question_div);
  question_header.innerHTML = '';
  question_header.appendChild(question.question_header);
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function bodyLoaded() {
  var lastSelectedQuestion = localStorage.getItem("lastSelectedQuestion");

  if (lastSelectedQuestion) {
    question_type.value = lastSelectedQuestion;
  }

  renderQuestion(); // console.log("loaded");
}
