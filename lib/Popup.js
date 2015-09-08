'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _leaflet = require('leaflet');

var _typesLatlng = require('./types/latlng');

var _typesLatlng2 = _interopRequireDefault(_typesLatlng);

var _MapComponent2 = require('./MapComponent');

var _MapComponent3 = _interopRequireDefault(_MapComponent2);

var Popup = (function (_MapComponent) {
  _inherits(Popup, _MapComponent);

  function Popup() {
    _classCallCheck(this, Popup);

    _get(Object.getPrototypeOf(Popup.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Popup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this = this;

      _get(Object.getPrototypeOf(Popup.prototype), 'componentWillMount', this).call(this);
      var _props = this.props;
      var children = _props.children;
      var map = _props.map;
      var popupContainer = _props.popupContainer;

      var props = _objectWithoutProperties(_props, ['children', 'map', 'popupContainer']);

      this.leafletElement = (0, _leaflet.popup)(props, popupContainer);
      this.leafletElement.on('open', function () {
        //on popoup create new react root
        var children = _this.props.children;

        _this.contentComponent = _react2['default'].render(_react2['default'].DOM.div({ children: children }), _this.leafletElement._contentNode);
        _this.leafletElement._adjustPan();
      });
      this.leafletElement.on('close', function () {
        //remove react root
        delete _this.contentComponent;
        _react2['default'].unmountComponentAtNode(_this.leafletElement._contentNode);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props;
      var popupContainer = _props2.popupContainer;
      var map = _props2.map;
      var position = _props2.position;

      _get(Object.getPrototypeOf(Popup.prototype), 'componentDidMount', this).call(this);
      //Attach to container component
      if (popupContainer) {
        popupContainer.bindPopup(this.leafletElement);
      } else {
        //attach to map
        if (position) this.leafletElement.setLatLng(position);
        this.leafletElement.openOn(map);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props;
      var children = _props3.children;
      var popupContainer = _props3.popupContainer;
      var position = _props3.position;

      if (!popupContainer) {
        if (position !== prevProps.position) this.leafletElement.setLatLng(position);
      }
      if (this.contentComponent) {
        this.contentComponent = _react2['default'].render(_react2['default'].DOM.div({ children: children }), this.leafletElement._contentNode);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props4 = this.props;
      var map = _props4.map;
      var popupContainer = _props4.popupContainer;

      _get(Object.getPrototypeOf(Popup.prototype), 'componentWillUnmount', this).call(this);
      if (this.leafletElement._contentNode) {
        _react2['default'].unmountComponentAtNode(this.leafletElement._contentNode);
      }
      if (popupContainer) {
        popupContainer.unbindPopup(this.leafletElement);
      } else {
        map.removeLayer(this.leafletElement);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'propTypes',
    value: {
      position: _typesLatlng2['default']
    },
    enumerable: true
  }]);

  return Popup;
})(_MapComponent3['default']);

exports['default'] = Popup;
module.exports = exports['default'];