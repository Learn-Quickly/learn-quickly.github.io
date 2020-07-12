"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
var question_header = document.getElementById("question_header");
var variative = document.getElementById("variative");
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

var Letter = /*#__PURE__*/function () {
  _createClass(Letter, [{
    key: "selectOptions",
    get: function get() {
      return ["nothing", "missed"];
    }
  }]);

  function Letter(parentWord) {
    var _this3 = this;

    var letter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, Letter);

    this.parentWord = parentWord;
    this._letter = letter;
    this.div = htmlToElement("<div class=\"word-letter\">".concat(this.letter, "</div>"));
    this.div.addEventListener('click', function (e) {
      _this3.parentWord.select({
        "event": e,
        "letter": _this3
      });

      _this3.parentWord.parentQuestion.renderPreview();
    });
    this.selectedAs = {
      "as": "nothing"
    };
  }

  _createClass(Letter, [{
    key: "render",
    value: function render() {
      switch (this.selectedAs.as) {
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
  }, {
    key: "selectLetter",
    value: function selectLetter(as) {
      switch (as) {
        case "nothing":
          this.selectedAs.as = as;
          break;

        case "missed":
          this.selectedAs.as = as;
          break;

        default:
          throw new Error("incorrect select option");
      }

      if (this.selectOptions.indexOf(as) != -1) {
        this.selectedAs.as = as;
      } else {
        throw new Error("incorrect select option");
      }
    }
  }, {
    key: "letter",
    get: function get() {
      return this._letter;
    }
  }, {
    key: "questionText",
    get: function get() {
      switch (this.selectedAs.as) {
        case "nothing":
          return this.letter;
          break;

        case "missed":
          return InsertWordsQuestion.insertTypes.letter.missed;
          break;
      }
    }
  }]);

  return Letter;
}();

var Word = /*#__PURE__*/function () {
  function Word(parentQuestion) {
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, Word);

    _defineProperty(this, "selectOptions", ["nothing", "missed", "mixed"]);

    this.selected = false;
    this._text = text;
    this.parentQuestion = parentQuestion;
    this.letters = [];
    this.div = htmlToElement("<div class=\"word-wrap\">".concat(this.text, "</div>")); // this.div.addEventListener("click", e => {
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

    this.selectedAs = {
      "as": "nothing"
    };
  }

  _createClass(Word, [{
    key: "selectWord",
    value: function selectWord(as) {
      if (this.selectOptions.indexOf(as) != -1) {
        this.selectedAs.as = as;
      } else {
        throw new Error("incorrect select option");
      }
    }
  }, {
    key: "buildLetters",
    value: function buildLetters() {
      var new_letters = [];

      var _iterator3 = _createForOfIteratorHelper(this.text),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var char = _step3.value;
          new_letters.push(new Letter(this, char));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (new_letters.map(function (letter) {
        return letter.letter;
      }).join("") != this.letters.map(function (letter) {
        return letter.letter;
      }).join("")) {
        this.letters = new_letters;
      }
    }
  }, {
    key: "buildDiv",
    value: function buildDiv() {
      this.div.innerHTML = '';
      this.buildLetters();

      var _iterator4 = _createForOfIteratorHelper(this.letters),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var letter = _step4.value;
          this.div.appendChild(letter.div);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "render",
    value: function render() {
      // if (this.selected){
      //     this.div.classList.add("word-wrap-selected");
      // } else {
      //     this.div.classList.remove("word-wrap-selected");
      // }
      // console.log(this.selectedAs);
      switch (this.selectedAs.as) {
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
  }, {
    key: "select",
    value: function select(callback) {
      // let word = this.getWordByDiv(this);
      // if (word.selected){
      //     word.selected = false;
      // } else {
      //     word.selected = true;
      // }
      // word.render();
      this.parentQuestion.select(callback);
    }
  }, {
    key: "changeText",
    value: function changeText(text) {
      this._text = text;
      this.render();
    }
  }, {
    key: "getWordByDiv",
    value: function getWordByDiv(div) {
      var _iterator5 = _createForOfIteratorHelper(this.parentQuestion.words_list),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var word = _step5.value;

          if (word.div === div) {
            return word;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return null;
    }
  }, {
    key: "getLetterByDiv",
    value: function getLetterByDiv(div) {
      var _iterator6 = _createForOfIteratorHelper(this.letters),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var letter = _step6.value;

          if (letter.div === div) {
            return letter;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return null;
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    }
  }, {
    key: "questionText",
    get: function get() {
      switch (this.selectedAs.as) {
        case "nothing":
          return this.letters.map(function (letter) {
            return letter.questionText;
          }).join("");
          break;

        case "missed":
          return InsertWordsQuestion.insertTypes.word.missed;
          break;

        case "mixed":
          return InsertWordsQuestion.insertTypes.word.mixed;
          break;
      }
    }
  }]);

  return Word;
}();

var TransformationPalette = /*#__PURE__*/function () {
  function TransformationPalette(items) {
    _classCallCheck(this, TransformationPalette);

    this.items = items;
    this.div = document.createElement('div');
    this.div.classList.add('row');

    var _iterator7 = _createForOfIteratorHelper(items),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var item = _step7.value;
        this.div.appendChild(item.label);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  _createClass(TransformationPalette, [{
    key: "getItemByNode",
    value: function getItemByNode(node) {
      var _iterator8 = _createForOfIteratorHelper(this.items),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var item = _step8.value;

          if (item.label === node) {
            return item;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      throw new Error("Such TransformationPaletteItem was not found");
    }
  }, {
    key: "getSelectedPaletteItem",
    value: function getSelectedPaletteItem() {
      var _iterator9 = _createForOfIteratorHelper(this.items),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var item = _step9.value;

          if (item.label.firstChild.checked) {
            return item;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      throw new Error("Not found slected palette item");
    }
  }]);

  return TransformationPalette;
}();

var TransformationPaletteItem = function TransformationPaletteItem(transfomation_name, color, selectorStrategy) {
  _classCallCheck(this, TransformationPaletteItem);

  this.transfomation_name = transfomation_name;
  this.color = color;
  this.label = htmlToElement("<label class=\"palette-label mt-3\"><input type=\"radio\" class=\"palette-radio d-none\" name=\"palette-radio\"><span style=\"background-color: ".concat(this.color, "; border-color: ").concat(this.color, ";\">").concat(this.transfomation_name, "</span></label> "));
  this.selectorStrategy = selectorStrategy;
};

var SelectorStrategy = /*#__PURE__*/function () {
  function SelectorStrategy() {
    _classCallCheck(this, SelectorStrategy);
  }

  _createClass(SelectorStrategy, [{
    key: "select",
    value: function select(callback) {
      throw new NotImplementedError("Not implemented");
    }
  }]);

  return SelectorStrategy;
}();

var SelectMissWord = /*#__PURE__*/function (_SelectorStrategy) {
  _inherits(SelectMissWord, _SelectorStrategy);

  var _super3 = _createSuper(SelectMissWord);

  function SelectMissWord() {
    _classCallCheck(this, SelectMissWord);

    return _super3.apply(this, arguments);
  }

  _createClass(SelectMissWord, [{
    key: "unselectLetters",
    value: function unselectLetters(letters) {
      var _iterator10 = _createForOfIteratorHelper(letters),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var letter = _step10.value;
          letter.selectLetter("nothing");
          letter.render();
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  }, {
    key: "select",
    value: function select(callback) {
      // console.log("in select miss word", callback);
      var word = callback.letter.parentWord;

      if (word.selectedAs.as != "missed") {
        word.selectWord("missed");
      } else {
        word.selectWord("nothing");
      }

      this.unselectLetters(word.letters);
      word.render();
    }
  }]);

  return SelectMissWord;
}(SelectorStrategy);

var SelectMissLetter = /*#__PURE__*/function (_SelectorStrategy2) {
  _inherits(SelectMissLetter, _SelectorStrategy2);

  var _super4 = _createSuper(SelectMissLetter);

  function SelectMissLetter() {
    _classCallCheck(this, SelectMissLetter);

    return _super4.apply(this, arguments);
  }

  _createClass(SelectMissLetter, [{
    key: "select",
    value: function select(callback) {
      // console.log("in select miss letter", callback);
      var letter = callback.letter;

      if (letter.selectedAs.as != "missed") {
        letter.selectLetter("missed");
      } else {
        letter.selectLetter("nothing");
      }

      letter.render();
    }
  }]);

  return SelectMissLetter;
}(SelectorStrategy);

var SelectMixWord = /*#__PURE__*/function (_SelectorStrategy3) {
  _inherits(SelectMixWord, _SelectorStrategy3);

  var _super5 = _createSuper(SelectMixWord);

  function SelectMixWord() {
    _classCallCheck(this, SelectMixWord);

    return _super5.apply(this, arguments);
  }

  _createClass(SelectMixWord, [{
    key: "unselectLetters",
    value: function unselectLetters(letters) {
      var _iterator11 = _createForOfIteratorHelper(letters),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var letter = _step11.value;
          letter.selectLetter("nothing");
          letter.render();
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }, {
    key: "select",
    value: function select(callback) {
      // console.log("in select mix word", callback);
      var word = callback.letter.parentWord;

      if (word.selectedAs.as != "mixed") {
        word.selectWord("mixed");
      } else {
        word.selectWord("nothing");
      }

      this.unselectLetters(word.letters);
      word.render();
    }
  }]);

  return SelectMixWord;
}(SelectorStrategy);

var InsertWordsQuestion = /*#__PURE__*/function (_Question3) {
  _inherits(InsertWordsQuestion, _Question3);

  var _super6 = _createSuper(InsertWordsQuestion);

  _createClass(InsertWordsQuestion, null, [{
    key: "insertTypes",
    // insertTypes = { // designation of selected object in json
    //     "letter": {
    //         "missed": "{square}"
    //     },  
    //     "word": {
    //         "missed": "{missed}",
    //         "mixed": "{missed}"
    //     }
    // };
    get: function get() {
      return {
        // designation of selected object in json
        "letter": {
          "missed": "{square}"
        },
        "word": {
          "missed": "{missed}",
          "mixed": "{mixed}"
        }
      };
    }
  }]);

  function InsertWordsQuestion(palette) {
    var _this4;

    _classCallCheck(this, InsertWordsQuestion);

    _this4 = _super6.call(this);

    _defineProperty(_assertThisInitialized(_this4), "type", 5);

    _this4.question_div = document.createElement('div');
    _this4.question_header = htmlToElement("<div class=\"col-10 input-div mt-5\" id=\"div_input\" contenteditable=true placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\"></div>");
    _this4.palette = palette;
    _this4.question_body = htmlToElement("<div class=\"row justify-content-center\"> \n                            <div class=\"container\"></div>\n                            <div class=\"col-11 mt-3\" id=\"show_words\"></div>\n                        </div>");

    _this4.question_body.firstChild.nextSibling.appendChild(_this4.palette.div);

    _this4.question_preview_part = htmlToElement("<div class=\"container\"><div class=\"row mt-3 justify-content-center\"><h2>\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440:</h1></div>\n                        <div class=\"row mt-3 justify-content-center\">\n                            <div class=\"col-11\" id=\"question_example\"></div>\n                        </div></div>");
    _this4.question_preview = _this4.question_preview_part.firstChild.nextSibling.nextSibling.firstChild.nextSibling;

    _this4.question_div.appendChild(_this4.question_body);

    _this4.question_div.appendChild(_this4.question_preview_part);

    _this4.words_list = [];
    _this4.div_input = _this4.question_header;

    _this4.div_input.addEventListener('keyup', function (e) {
      var change = _this4.compareWords(); // console.log(change);


      _this4.processChange(change);

      _this4.renderPreview();
    });

    _this4.words_show_div = _this4.question_div.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
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

      var _iterator12 = _createForOfIteratorHelper(this.words_list),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var word = _step12.value;
          wordText = word.text;
          firstIndex = inputText.indexOf(wordText);
          slice = inputText.slice(0, firstIndex);
          answerString += slice;
          inputText = inputText.slice(firstIndex + wordText.length);
          answerString += word.questionText;
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      slice = inputText.slice(0);
      answerString += slice;
      return answerString;
    }
  }, {
    key: "getAnswer",
    value: function getAnswer() {
      // let answers = [];
      // for (let word of this.words_list){
      //     if (word.selected){
      //         answers.push(word.text);
      //     }
      // }
      // return answers;
      var answer = {
        "variant1": {
          "missed": [],
          "square": [],
          "mixed": []
        },
        "variant2": []
      };

      var _iterator13 = _createForOfIteratorHelper(this.words_list),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var word = _step13.value;

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

          var _iterator14 = _createForOfIteratorHelper(word.letters),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var letter = _step14.value;

              if (letter.selectedAs.as != "nothing") {
                answer.variant2.push(letter.letter);

                switch (letter.selectedAs.as) {
                  case "missed":
                    answer.variant1.square.push(letter.letter);
                    break;
                }
              }
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      return answer;
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
      } // console.log(questionObject);


      if (questionObject.answer.variant2.length == 0) {
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

      var longest;

      if (words_strings.length > prev_words.length) {
        longest = words_strings;
      } else {
        longest = prev_words;
      }

      for (var i in longest) {
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


      var _iterator15 = _createForOfIteratorHelper(this.words_list),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var word = _step15.value;
          // console.log(word, words_list)
          words.push(word.text);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      return words;
    }
  }, {
    key: "renderWords",
    value: function renderWords() {
      this.words_show_div.innerHTML = "";

      var _iterator16 = _createForOfIteratorHelper(this.words_list),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var word = _step16.value;
          this.words_show_div.appendChild(word.div);
          word.render();
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }
  }, {
    key: "renderPreview",
    value: function renderPreview() {
      var json = this.toJson();
      var questionObject;

      try {
        questionObject = JSON.parse(json);
      } catch (SyntaxError) {
        this.question_preview.innerHTML = json;
        return false;
      }

      var answerString = "";
      var firstIndex;
      var slice;
      var findText = ["{missed}", "{square}", "{mixed}"];

      var _iterator17 = _createForOfIteratorHelper(questionObject.answer.variant2),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var word = _step17.value;
          var fText = void 0; // в этой переменной будут находиться значения из findText

          var found = {}; // здесь будут находиться значения такого вида: fText: index

          var _iterator18 = _createForOfIteratorHelper(findText),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              fText = _step18.value;
              // заполняем found 
              firstIndex = questionObject.question_text.indexOf(fText);

              if (firstIndex != -1) {
                // Добавляем значения если находим в тексте вопроса что-либо из findText. 
                found[fText] = firstIndex;
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          firstIndex = Math.min.apply(Math, _toConsumableArray(Object.values(found))); // минимальным значением будет первое вхождение 
          // чего-либо из findText в строку вопроса

          for (var x in found) {
            // находим ключ из found с минимальным значением (firstIndex)
            if (found[x] == firstIndex) {
              fText = x;
            }
          }

          slice = questionObject.question_text.slice(0, firstIndex); // срез строки вопроса 
          // до первого вхождения fText 

          answerString += slice;

          switch (fText) {
            case "{missed}":
              answerString += "<div class=\"missed-word\">".concat(word, "</div>");
              break;

            case "{mixed}":
              answerString += "<div class=\"mixed-word\">".concat(word, "</div>");
              break;

            case "{square}":
              answerString += "<div class=\"square-missed-letter\">".concat(word, "</div>");
              break;
          }

          questionObject.question_text = questionObject.question_text.slice(firstIndex + fText.length);
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      answerString += questionObject.question_text; // добавляем в строку ответа оставшуюся часть вопроса

      this.question_preview.innerHTML = answerString.replace(/(\r\n|\n|\r)/g, "<br/>");
    }
  }, {
    key: "select",
    value: function select(callback) {
      var palleteItem = this.palette.getSelectedPaletteItem();
      palleteItem.selectorStrategy.select(callback);
    }
  }], [{
    key: "removeOddOut",
    value: function removeOddOut(str) {
      str = str.replace(/(,|\.|!|\?|"|'|\(|\)|;|:|-|[\r\n]+|&)/g, ' ');
      str = str.replace(/\s{2,}/g, ' ');
      return str;
    }
  }]);

  return InsertWordsQuestion;
}(Question);

var firstTypeQuestion = new OneChooseQuestion();
var fourthTypeQuestion = new EnterAnswerQuestion();
var TransformationPaletteItems = [new TransformationPaletteItem('Пропущенное слово', 'lightcoral', new SelectMissWord()), new TransformationPaletteItem('Пропущенные буквы', 'lightblue', new SelectMissLetter()), new TransformationPaletteItem('Перемешанное слово', 'lightgreen', new SelectMixWord())];
var fifthTypeQuestion = new InsertWordsQuestion(new TransformationPalette(TransformationPaletteItems));

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

  var _iterator19 = _createForOfIteratorHelper(session_select),
      _step19;

  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var checkbox = _step19.value;

      if (checkbox.checked) {
        sessions.push(parseInt(checkbox.name));
      }
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
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
