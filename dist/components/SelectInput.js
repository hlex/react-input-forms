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

var SelectInput = function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  function SelectInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectChange = function (e) {
      var _this$props = _this.props,
          options = _this$props.options,
          handleChange = _this$props.handleChange;

      var value = e.target.value;
      handleChange((0, _global.getOption)(value, options));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectInput, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var keys = ['name', 'value', 'type', 'label', 'options', 'focus', 'disabled', 'errorMessage', 'placeholder', 'inputProps', 'labelProps'];
      var checkProps = (0, _global.pick)(keys, this.props);
      var checkNextProps = (0, _global.pick)(keys, nextProps);
      return JSON.stringify(checkProps) !== JSON.stringify(checkNextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          value = _props.value,
          disabled = _props.disabled,
          focus = _props.focus,
          placeholder = _props.placeholder,
          name = _props.name,
          format = _props.format,
          errorMessage = _props.errorMessage,
          options = _props.options,
          inputProps = _props.inputProps,
          tabIndex = _props.tabIndex,
          handleBlur = _props.handleBlur;

      var renderOptions = [];
      var renderErrorMessage = '';
      var classInput = 'form-input';
      var valueString = '';

      if (typeof value === 'string') {
        valueString = value;
      } else {
        valueString = value.value ? value.value : '';
      }
      if (!(0, _global.isEmpey)(errorMessage)) {
        classInput = 'form-input error';
        renderErrorMessage = _react2.default.createElement(
          'div',
          { className: 'error-message' },
          errorMessage
        );
      }

      for (var key in options) {
        renderOptions.push(_react2.default.createElement(
          'option',
          { value: options[key].value, key: key + '-' + options[key].value },
          options[key].label
        ));
      }

      return _react2.default.createElement(
        'div',
        { className: inputProps.className ? inputProps.className : 'field-group' },
        _react2.default.createElement(
          'label',
          { htmlFor: label },
          label
        ),
        _react2.default.createElement(
          'select',
          {
            ref: function ref(input) {
              if (input != null && focus) {
                input.focus();
              }
            },
            className: classInput,
            value: valueString,
            onChange: function onChange(e) {
              return _this2.handleSelectChange(e);
            },
            onBlur: function onBlur(e) {
              return handleBlur(e.target.value);
            },
            disabled: disabled
          },
          renderOptions
        ),
        this.props.children,
        renderErrorMessage
      );
    }
  }]);

  return SelectInput;
}(_react2.default.Component);

SelectInput.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
  format: _react.PropTypes.bool,
  label: _react.PropTypes.string,
  options: _react.PropTypes.array.isRequired,
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  inputProps: _react.PropTypes.object,
  labelProps: _react.PropTypes.object,
  disabled: _react.PropTypes.bool,
  focus: _react.PropTypes.bool,
  errorMessage: _react.PropTypes.string,
  handleChange: _react.PropTypes.func
};
SelectInput.defaultProps = {
  name: 'input',
  tabIndex: 0,
  label: '',
  value: '',
  options: [],
  inputProps: {},
  labelProps: {},
  disabled: false,
  focus: false,
  placeholder: '',
  type: 'text'
};
exports.default = SelectInput;