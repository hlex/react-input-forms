'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _global = require('../helpers/global');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberInput = function (_React$Component) {
  _inherits(NumberInput, _React$Component);

  function NumberInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NumberInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      editValue: true
    }, _this.getValueFormat = function (value) {
      var format = _this.props.format;

      var valueTopNumber = (0, _global.toNumber)(value);
      var splitFormat = format.split('.');
      var splitValue = valueTopNumber.split('.');
      var decimalFormat = splitFormat[1] ? splitFormat[1] : '';
      var decimalValue = splitValue[1] ? splitValue[1] : '';
      if (decimalFormat !== '' && decimalFormat.length !== decimalValue.length) {
        var decimal = decimalValue;
        for (var i = 1; i <= decimalFormat.length - decimalValue.length; i++) {
          decimal += '0';
        }return (0, _global.isEmpey)(value) ? '' : splitValue[0] + '.' + decimal;
      } else {
        return valueTopNumber;
      }
    }, _this.onInputChange = function (value) {
      var _this$props = _this.props,
          handleChange = _this$props.handleChange,
          format = _this$props.format;

      var valueToNumber = (0, _global.toNumber)(value);
      var emptyValue = value === '';
      if (emptyValue) {
        handleChange(value);
      } else if ((0, _global.checkNumberFormat)(valueToNumber, format)) {
        handleChange(valueToNumber);
      } else if (/^-?\d+(\.)?(\d+)?$/.test(value)) {
        handleChange(valueToNumber);
      } else if ((0, _global.size)(valueToNumber) < (0, _global.size)(_this.props.value)) {
        handleChange(valueToNumber);
      }
    }, _this.handleOnBlur = function (value) {
      var handleBlur = _this.props.handleBlur;

      if (handleBlur) handleBlur(_this.getValueFormat(value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NumberInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          handleBlur = _props.handleBlur;

      var numberValue = Number((0, _global.toNumber)(value));
      if (!(0, _global.isEmpey)(value) && !(0, _global.isEmpey)(format) && isFinite((0, _global.toNumber)(value))) handleBlur(this.getValueFormat((0, _global.toNumeral)(numberValue.toString(), format)));
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var keys = ['name', 'value', 'type', 'label', 'format', 'focus', 'disabled', 'errorMessage', 'placeholder'];
      var checkProps = (0, _global.pick)(keys, this.props);
      var checkNextProps = (0, _global.pick)(keys, nextProps);
      return true;
      return JSON.stringify(checkProps) !== JSON.stringify(checkNextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          label = _props2.label,
          value = _props2.value,
          disabled = _props2.disabled,
          focus = _props2.focus,
          placeholder = _props2.placeholder,
          name = _props2.name,
          format = _props2.format,
          tabIndex = _props2.tabIndex,
          errorMessage = _props2.errorMessage,
          inputProps = _props2.inputProps,
          handleChange = _props2.handleChange,
          handleKeyCode = _props2.handleKeyCode;
      var editValue = this.state.editValue;

      var renderErrorMessage = '';
      var classInput = 'form-input';
      if (!(0, _global.isEmpey)(errorMessage)) {
        classInput = 'form-input error';
        renderErrorMessage = _react2.default.createElement(
          'div',
          { className: 'error-message' },
          errorMessage
        );
      }

      return _react2.default.createElement(
        'div',
        { className: inputProps.className ? inputProps.className : 'field-group' },
        _react2.default.createElement(
          'label',
          { htmlFor: label },
          label
        ),
        _react2.default.createElement('input', {
          ref: function ref(input) {
            if (input != null && focus) {
              input.focus();
            }
          },
          className: classInput,
          type: 'text',
          name: name,
          value: !(0, _global.isEmpey)(format) ? (0, _global.toNumeral)(value, format) : value,
          placeholder: placeholder,
          disabled: disabled,
          onKeyUp: function onKeyUp(e) {
            return handleKeyCode(e);
          },
          onChange: function onChange(e) {
            return _this2.onInputChange(e.target.value);
          },
          onBlur: function onBlur(e) {
            return _this2.handleOnBlur(e.target.value);
          }
        }),
        this.props.children,
        renderErrorMessage
      );
    }
  }]);

  return NumberInput;
}(_react2.default.Component);

NumberInput.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  format: _react.PropTypes.string,
  label: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  inputProps: _react.PropTypes.object,
  labelProps: _react.PropTypes.object,
  disabled: _react.PropTypes.bool,
  focus: _react.PropTypes.bool,
  errorMessage: _react.PropTypes.string,
  handleChange: _react.PropTypes.func,
  handleBlur: _react.PropTypes.func,
  handleKeyCode: _react.PropTypes.func
};
NumberInput.defaultProps = {
  name: 'input',
  format: '',
  tabIndex: 0,
  label: '',
  value: '',
  inputProps: {},
  labelProps: {},
  disabled: false,
  type: 'text'
};
exports.default = NumberInput;