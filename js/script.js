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

var FirstTypeVariant = /*#__PURE__*/function () {
  function FirstTypeVariant(parentQuestion) {
    var _this = this;

    _classCallCheck(this, FirstTypeVariant);

    this.parentQuestion = parentQuestion;
    this.div = htmlToElement("<div class=\"row mt-3\">\n                                        <input type=\"radio\" name=\"true_answer\" value=\"\" class=\"align-self-center mr-3 true_answer\" style=\"\n    height: 25px;\n    width: 25px;\n\">\n                                        <div class=\"card col-11\">\n                                            <div class=\"card-body\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-6\">\n                                                        <input class=\"answer-variant\" type=\"text\" name=\"answer_text\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430\">\n                                                    </div>\n                                                    <div class=\"ml-auto col-2\">\n                                                        <button name=\"delete_button\" type=\"button\" class=\"btn btn-danger\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>");
    this.div.querySelectorAll('[name=delete_button]')[0].addEventListener('click', function (e) {
      _this.parentQuestion.deleteVariant(_this);
    });
    this.radiobutton = this.div.firstChild.nextSibling;
    this.variantInput = this.div.querySelectorAll('[name=answer_text]')[0];
    this.variantInput.addEventListener('keyup', function (e) {
      _this.parentQuestion.renderPreview();
    });
    this.radiobutton.addEventListener('click', function (e) {
      _this.parentQuestion.renderPreview();
    });
  }

  _createClass(FirstTypeVariant, [{
    key: "selected",
    get: function get() {
      return this.radiobutton.checked;
    }
  }, {
    key: "text",
    get: function get() {
      return this.variantInput.value;
    }
  }]);

  return FirstTypeVariant;
}();

var SecondTypeVariant = /*#__PURE__*/function () {
  function SecondTypeVariant(parentQuestion) {
    var _this2 = this;

    _classCallCheck(this, SecondTypeVariant);

    this.parentQuestion = parentQuestion;
    this.div = htmlToElement("<div class=\"row mt-3\">\n                                        <input type=\"checkbox\" name=\"true_answer\" value=\"\" class=\"align-self-center mr-3 true_answer\" style=\"\n    width: 20px;\n    height: 20px;\n\">\n                                        <div class=\"card col-11\">\n                                            <div class=\"card-body\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-6\">\n                                                        <input class=\"answer-variant\" type=\"text\" name=\"answer_text\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430\">\n                                                    </div>\n                                                    <div class=\"ml-auto col-2\">\n                                                        <button name=\"delete_button\" type=\"button\" class=\"btn btn-danger\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>");
    this.div.querySelectorAll('[name=delete_button]')[0].addEventListener('click', function (e) {
      _this2.parentQuestion.deleteVariant(_this2);
    });
    this.checkbox = this.div.firstChild.nextSibling;
    this.variantInput = this.div.querySelectorAll('[name=answer_text]')[0];
    this.variantInput.addEventListener('keyup', function (e) {
      _this2.parentQuestion.renderPreview();
    });
    this.checkbox.addEventListener('click', function (e) {
      _this2.parentQuestion.renderPreview();
    });
  }

  _createClass(SecondTypeVariant, [{
    key: "selected",
    get: function get() {
      return this.checkbox.checked;
    }
  }, {
    key: "text",
    get: function get() {
      return this.variantInput.value;
    }
  }]);

  return SecondTypeVariant;
}();

var ChooseQuestion = /*#__PURE__*/function (_Question) {
  _inherits(ChooseQuestion, _Question);

  var _super = _createSuper(ChooseQuestion);

  function ChooseQuestion() {
    var _this3;

    _classCallCheck(this, ChooseQuestion);

    _this3 = _super.call(this);
    _this3.question_div = document.createElement('div');
    _this3.question_header = htmlToElement("<textarea class=\"col-11 mt-5 ml-3 question_textarea\" name=\"question_text\" id=\"question_text\" placeholder=\"\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\" row=\"4\"></textarea>");
    _this3.question_body = htmlToElement("<div class=\"row\">\n                        <h4 class=\"col-3\">\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u0442\u0432\u0435\u0442\u043E\u0432</h4>\n                        <div class=\"col-4\"><button class=\"btn btn-success\" id=\"add_variant_btn\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442</button></div>\n                    </div>");
    _this3.variants_node = htmlToElement('<div class="container" id="variants"></div>');
    _this3.question_preview_part = htmlToElement("<div class=\"container\"><div class=\"row mt-3 justify-content-center\"><h2>\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440:</h1></div>\n                        <div class=\"row mt-3 justify-content-center\">\n                            <div class=\"card col-11\"><div class=\"card-body\" id=\"question1_preview\"></div></div>\n                        </div></div>");

    _this3.question_div.appendChild(_this3.question_body);

    _this3.question_div.appendChild(_this3.variants_node);

    _this3.question_div.appendChild(_this3.question_preview_part);

    _this3.question_preview = _this3.question_preview_part.querySelector("#question1_preview");
    _this3.question_textarea = _this3.question_header;

    _this3.question_textarea.addEventListener('keyup', function (e) {
      _this3.renderPreview();
    });

    _this3.variants = [];

    _this3.question_body.querySelectorAll('#add_variant_btn')[0].addEventListener('click', function (e) {
      _this3.add_variant(e);
    });

    for (var i = 0; i < 2; i++) {
      _this3.add_variant();
    }

    return _this3;
  }

  _createClass(ChooseQuestion, [{
    key: "deleteVariant",
    value: function deleteVariant(variant) {
      if (this.variants.length <= 2) {
        return null;
      }

      this.variants.splice(this.variants.indexOf(variant), 1);
      this.renderVariants();
    }
  }, {
    key: "getVariants",
    value: function getVariants() {
      return this.variants.map(function (variant) {
        return {
          "variant_text": variant.text
        };
      });
    }
  }, {
    key: "renderVariants",
    value: function renderVariants() {
      this.variants_node.innerHTML = '';

      var _iterator = _createForOfIteratorHelper(this.variants),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var variant = _step.value;
          this.variants_node.appendChild(variant.div);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return ChooseQuestion;
}(Question);

var OneChooseQuestion = /*#__PURE__*/function (_ChooseQuestion) {
  _inherits(OneChooseQuestion, _ChooseQuestion);

  var _super2 = _createSuper(OneChooseQuestion);

  function OneChooseQuestion() {
    var _this4;

    _classCallCheck(this, OneChooseQuestion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this4 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "type", 1);

    return _this4;
  }

  _createClass(OneChooseQuestion, [{
    key: "add_variant",
    value: function add_variant(e) {
      this.variants.push(new FirstTypeVariant(this));
      this.renderVariants();
    }
  }, {
    key: "getAnswer",
    value: function getAnswer() {
      for (var i in this.variants) {
        if (this.variants[i].selected) {
          return parseInt(i);
        }
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

      if (this.variants.length < 2) {
        return "Добавьте минимум 2 варианта ответа";
      }

      var _iterator2 = _createForOfIteratorHelper(questionObject.variants),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var variant = _step2.value;

          if (!variant.variant_text) {
            return "\u0412\u044B \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u043B\u0438 \u043D\u0435 \u0432\u0441\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B";
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (questionObject.answer == undefined) {
        return "Укажите правильный ответ";
      }

      return JSON.stringify(questionObject);
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

      var previewString = "";
      previewString += "<div class=\"row col-12 justify-content-center\"><h2>".concat(questionObject.question_text, "</h2></div>");

      for (var i in questionObject.variants) {
        var variant = questionObject.variants[i];

        if (i == questionObject.answer) {
          previewString += "<div class=\"row col-12 mb-3\" id=\"question1_preview_item\">\n                            <div class=\"col-1\">\n                                <span class=\"variant-first-question variant-first-question-selected\"></span>\n                            </div>\n                            <span class=\"col-5 ml-3\">".concat(variant.variant_text, "</span>\n                            </div>");
        } else {
          previewString += "<div class=\"row col-12 mb-3\" id=\"question1_preview_item\">\n                            <div class=\"col-1\">\n                                <span class=\"variant-first-question\"></span>\n                            </div>\n                            <span class=\"col-5 ml-3\">".concat(variant.variant_text, "</span>\n                            </div>");
        }
      }

      this.question_preview.innerHTML = previewString;
      renderJson();
    }
  }]);

  return OneChooseQuestion;
}(ChooseQuestion);

var MultipleChoiceQuestion = /*#__PURE__*/function (_ChooseQuestion2) {
  _inherits(MultipleChoiceQuestion, _ChooseQuestion2);

  var _super3 = _createSuper(MultipleChoiceQuestion);

  function MultipleChoiceQuestion() {
    var _this5;

    _classCallCheck(this, MultipleChoiceQuestion);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this5 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "type", 2);

    return _this5;
  }

  _createClass(MultipleChoiceQuestion, [{
    key: "add_variant",
    value: function add_variant() {
      this.variants.push(new SecondTypeVariant(this));
      this.renderVariants();
    }
  }, {
    key: "getAnswers",
    value: function getAnswers() {
      var answers = [];

      for (var i in this.variants) {
        if (this.variants[i].selected) {
          answers.push(parseInt(i));
        }
      }

      return answers;
    }
  }, {
    key: "toJson",
    value: function toJson() {
      var questionObject = {
        "type": this.type,
        "sessions": this.sessions,
        "question_text": this.question_textarea.value.trim(),
        "variants": this.getVariants(),
        "answers": this.getAnswers()
      };

      if (questionObject.sessions.length == 0) {
        return "Выберите одну или несколько сессий";
      }

      if (!questionObject.question_text) {
        return "Введите текст вопроса";
      }

      if (this.variants.length < 2) {
        return "Добавьте минимум 2 варианта ответа";
      }

      var _iterator3 = _createForOfIteratorHelper(questionObject.variants),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var variant = _step3.value;

          if (!variant.variant_text) {
            return "\u0412\u044B \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u043B\u0438 \u043D\u0435 \u0432\u0441\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B";
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (questionObject.answers.length == 0) {
        return "Укажите правильный ответ";
      }

      return JSON.stringify(questionObject);
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

      var previewString = "";
      previewString += "<div class=\"row col-12 justify-content-center\"><h2>".concat(questionObject.question_text, "</h2></div>");

      for (var i in questionObject.variants) {
        var variant = questionObject.variants[i];

        if (questionObject.answers.indexOf(parseInt(i)) != -1) {
          previewString += "<div class=\"row col-12 mb-3\" id=\"question1_preview_item\">\n                            <div class=\"col-1\">\n                                <span class=\"variant-second-question variant-second-question-selected\"></span>\n                            </div>\n                            <span class=\"col-5 ml-3\">".concat(variant.variant_text, "</span>\n                            </div>");
        } else {
          previewString += "<div class=\"row col-12 mb-3\" id=\"question1_preview_item\">\n                            <div class=\"col-1\">\n                                <span class=\"variant-second-question\"></span>\n                            </div>\n                            <span class=\"col-5 ml-3\">".concat(variant.variant_text, "</span>\n                            </div>");
        }
      }

      this.question_preview.innerHTML = previewString;
      renderJson();
    }
  }]);

  return MultipleChoiceQuestion;
}(ChooseQuestion);

var EnterAnswerQuestion = /*#__PURE__*/function (_Question2) {
  _inherits(EnterAnswerQuestion, _Question2);

  var _super4 = _createSuper(EnterAnswerQuestion);

  function EnterAnswerQuestion() {
    var _this6;

    _classCallCheck(this, EnterAnswerQuestion);

    _this6 = _super4.call(this);

    _defineProperty(_assertThisInitialized(_this6), "type", 4);

    _this6.question_div = document.createElement('div');
    _this6.question_header = htmlToElement("<div class=\"col-11\">\n                            <textarea class=\"col-11 mt-5 ml-3 question_textarea\" name=\"question_text\" id=\"question_text\" placeholder=\"\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\" row=\"4\"></textarea>\n                        </div>");
    _this6.question_body = htmlToElement("<div class=\"row justify-content-center\">\n                            <input class=\"col-7\" id=\"one_variant_input\" type=\"text\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442\u0432\u0435\u0442\u0430\"/>\n                        </div>");

    _this6.question_div.appendChild(_this6.question_body);

    _this6.question_textarea = _this6.question_header.getElementsByClassName("question_textarea")[0];
    _this6.answer_input = _this6.question_body.firstChild.nextSibling;
    return _this6;
  }

  _createClass(EnterAnswerQuestion, [{
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
    var _this7 = this;

    var letter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, Letter);

    this.parentWord = parentWord;
    this._letter = letter;
    this.div = htmlToElement("<div class=\"word-letter\">".concat(this.letter, "</div>"));
    this.div.addEventListener('click', function (e) {
      _this7.parentWord.select({
        "event": e,
        "letter": _this7
      });

      _this7.parentWord.parentQuestion.renderPreview();
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
    this.div = htmlToElement("<div class=\"word-wrap\">".concat(this.text, "</div>"));
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

      var _iterator4 = _createForOfIteratorHelper(this.text),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var char = _step4.value;
          new_letters.push(new Letter(this, char));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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

      var _iterator5 = _createForOfIteratorHelper(this.letters),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var letter = _step5.value;
          this.div.appendChild(letter.div);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "render",
    value: function render() {
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
      var _iterator6 = _createForOfIteratorHelper(this.parentQuestion.words_list),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var word = _step6.value;

          if (word.div === div) {
            return word;
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
    key: "getLetterByDiv",
    value: function getLetterByDiv(div) {
      var _iterator7 = _createForOfIteratorHelper(this.letters),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var letter = _step7.value;

          if (letter.div === div) {
            return letter;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
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

    var _iterator8 = _createForOfIteratorHelper(items),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var item = _step8.value;
        this.div.appendChild(item.label);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  }

  _createClass(TransformationPalette, [{
    key: "getItemByNode",
    value: function getItemByNode(node) {
      var _iterator9 = _createForOfIteratorHelper(this.items),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var item = _step9.value;

          if (item.label === node) {
            return item;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      throw new Error("Such TransformationPaletteItem was not found");
    }
  }, {
    key: "getSelectedPaletteItem",
    value: function getSelectedPaletteItem() {
      var _iterator10 = _createForOfIteratorHelper(this.items),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var item = _step10.value;

          if (item.label.firstChild.checked) {
            return item;
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
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

  var _super5 = _createSuper(SelectMissWord);

  function SelectMissWord() {
    _classCallCheck(this, SelectMissWord);

    return _super5.apply(this, arguments);
  }

  _createClass(SelectMissWord, [{
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

  var _super6 = _createSuper(SelectMissLetter);

  function SelectMissLetter() {
    _classCallCheck(this, SelectMissLetter);

    return _super6.apply(this, arguments);
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

  var _super7 = _createSuper(SelectMixWord);

  function SelectMixWord() {
    _classCallCheck(this, SelectMixWord);

    return _super7.apply(this, arguments);
  }

  _createClass(SelectMixWord, [{
    key: "unselectLetters",
    value: function unselectLetters(letters) {
      var _iterator12 = _createForOfIteratorHelper(letters),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var letter = _step12.value;
          letter.selectLetter("nothing");
          letter.render();
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
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

  var _super8 = _createSuper(InsertWordsQuestion);

  _createClass(InsertWordsQuestion, null, [{
    key: "insertTypes",
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
    var _this8;

    _classCallCheck(this, InsertWordsQuestion);

    _this8 = _super8.call(this);

    _defineProperty(_assertThisInitialized(_this8), "type", 5);

    _this8.question_div = document.createElement('div');
    _this8.question_header = htmlToElement("<div class=\"col-10 input-div mt-5\" id=\"div_input\" contenteditable=true placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\"></div>");
    _this8.palette = palette;
    _this8.question_body = htmlToElement("<div class=\"row justify-content-center\"> \n                            <div class=\"container\"></div>\n                            <div class=\"col-11 mt-3\" id=\"show_words\"></div>\n                        </div>");

    _this8.question_body.firstChild.nextSibling.appendChild(_this8.palette.div);

    _this8.question_preview_part = htmlToElement("<div class=\"container\"><div class=\"row mt-3 justify-content-center\"><h2>\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440:</h1></div>\n                        <div class=\"row mt-3 justify-content-center\">\n                            <div class=\"col-11\" id=\"question_example\"></div>\n                        </div></div>");
    _this8.question_preview = _this8.question_preview_part.firstChild.nextSibling.nextSibling.firstChild.nextSibling;

    _this8.question_div.appendChild(_this8.question_body);

    _this8.question_div.appendChild(_this8.question_preview_part);

    _this8.words_list = [];
    _this8.div_input = _this8.question_header;

    _this8.div_input.addEventListener('keyup', function (e) {
      var change = _this8.compareWords(); // console.log(change);


      _this8.processChange(change);

      _this8.renderPreview();
    });

    _this8.words_show_div = _this8.question_div.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
    return _this8;
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

      var _iterator13 = _createForOfIteratorHelper(this.words_list),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var word = _step13.value;
          wordText = word.text;
          firstIndex = inputText.indexOf(wordText);
          slice = inputText.slice(0, firstIndex);
          answerString += slice;
          inputText = inputText.slice(firstIndex + wordText.length);
          answerString += word.questionText;
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      slice = inputText.slice(0);
      answerString += slice;
      return answerString;
    }
  }, {
    key: "getAnswer",
    value: function getAnswer() {
      var answer = {
        "variant1": {
          "missed": [],
          "square": [],
          "mixed": []
        },
        "variant2": []
      };

      var _iterator14 = _createForOfIteratorHelper(this.words_list),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var word = _step14.value;

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

          var _iterator15 = _createForOfIteratorHelper(word.letters),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var letter = _step15.value;

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
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
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


      var _iterator16 = _createForOfIteratorHelper(this.words_list),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var word = _step16.value;
          // console.log(word, words_list)
          words.push(word.text);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      return words;
    }
  }, {
    key: "renderWords",
    value: function renderWords() {
      this.words_show_div.innerHTML = "";

      var _iterator17 = _createForOfIteratorHelper(this.words_list),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var word = _step17.value;
          this.words_show_div.appendChild(word.div);
          word.render();
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
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

      var _iterator18 = _createForOfIteratorHelper(questionObject.answer.variant2),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var word = _step18.value;
          var fText = void 0; // в этой переменной будут находиться значения из findText

          var found = {}; // здесь будут находиться значения такого вида: fText: index

          var _iterator19 = _createForOfIteratorHelper(findText),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              fText = _step19.value;
              // заполняем found 
              firstIndex = questionObject.question_text.indexOf(fText);

              if (firstIndex != -1) {
                // Добавляем значения если находим в тексте вопроса что-либо из findText. 
                found[fText] = firstIndex;
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
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
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      answerString += questionObject.question_text; // добавляем в строку ответа оставшуюся часть вопроса

      this.question_preview.innerHTML = answerString.replace(/(\r\n|\n|\r)/g, "<br/>");
      renderJson();
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
      str = str.replace(/(,|\.|!|\?|"|'|\(|\)|;|:|( - )|[\r\n]+|&)/g, ' ');
      str = str.replace(/\s{2,}/g, ' ');
      return str;
    }
  }]);

  return InsertWordsQuestion;
}(Question);

var firstTypeQuestion = new OneChooseQuestion();
var secondTypeQuestion = new MultipleChoiceQuestion();
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
      question = secondTypeQuestion;
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

  var _iterator20 = _createForOfIteratorHelper(session_select),
      _step20;

  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
      var checkbox = _step20.value;

      if (checkbox.checked) {
        sessions.push(parseInt(checkbox.name));
      }
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
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
