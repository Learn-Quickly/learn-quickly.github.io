"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";
var question_type = document.getElementById("question_variants");
var variative = document.getElementById("variative");
var question_header = document.getElementById("question_header");
var session_select = document.getElementById("session_variants");
var json_place = document.getElementById('json_place');

var OneChooseQuestion = /*#__PURE__*/function () {
  function OneChooseQuestion() {
    _classCallCheck(this, OneChooseQuestion);

    _defineProperty(this, "type", 1);

    this.sessions = [];
    this.question_div = document.createElement('div');
    this.question_header = htmlToElement("<textarea class=\"col-11 mt-5 ml-3 question_textarea\" name=\"question_text\" id=\"question_text\" placeholder=\"\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\" row=\"4\"></textarea>");
    this.question_body = htmlToElement("<div class=\"row\">\n                        <h4 class=\"col-3\">\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u0442\u0432\u0435\u0442\u043E\u0432</h4>\n                        <div class=\"col-4\"><button class=\"btn btn-success\" onclick=\"firstTypeQuestion.add_variant();\" id=\"add_one_choose_variant\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442</button></div>\n                    </div>");
    this.variants_node = htmlToElement('<div class="container" id="variants"></div>');
    this.question_div.appendChild(this.question_body);
    this.question_div.appendChild(this.variants_node);
    this.question_textarea = this.question_header;
    this.variant_divs = {};
    this.variants_count = 0;

    for (var i = 0; i < 2; i++) {
      this.add_variant();
    }
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

      delete this.variant_divs[uuid];
      this.renderVariants();
    }
  }, {
    key: "getVariants",
    value: function getVariants() {
      var variants = {};

      for (var uuid in this.variant_divs) {
        var div = this.variant_divs[uuid];
        var input = div.getElementsByClassName("answer-variant-".concat(uuid))[0];
        var variant_name = div.getElementsByClassName("variant")[0].innerHTML;
        variants[variant_name] = input.value;
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
}();

var firstTypeQuestion = new OneChooseQuestion();

function select_session() {
  var question = getQuestionObject();
  question.sessions = getSessions();
}

function getQuestionObject() {
  var question;

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

function getSessions() {
  var sessions = [];

  var _iterator3 = _createForOfIteratorHelper(session_select.options),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var option = _step3.value;

      if (option.selected) {
        sessions.push(parseInt(option.value));
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
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
  var question = getQuestionObject();
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
  html = html.trim(); // Never return a text node of whitespace as the result

  template.innerHTML = html;
  return template.content.firstChild;
}

renderQuestion();
