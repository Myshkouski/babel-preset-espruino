import "@alexeimyshkouski/espruino/globals/console";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var A = function A() {
  this._isA = true;
};

var B =
/*#__PURE__*/
function (_A) {
  function B() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _A.call.apply(_A, [this].concat(args)) || this;
    _this._isB = true;
    return _this;
  }

  _inheritsLoose(B, _A);

  return B;
}(A);

var a = new A();
var b = new B();
console.log(a, b);