"use strict";

require("wenjain");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'Alex';
var age = 18;

var add = function add(x, y) {
  return x + y;
};

new Promise(function (resolve, reject) {
  resolve('成功');
}).then(function (value) {
  console.log(value);
})["catch"](function (value) {
  return console.log(value);
});
Array.from([1, 2]);

var Person = /*#__PURE__*/_createClass(function Person(name, age) {
  _classCallCheck(this, Person);

  Object.assign(this, {
    name: name,
    age: age
  });
});

new Person('Alex', 18);