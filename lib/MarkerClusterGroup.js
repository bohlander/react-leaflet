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

var _MapLayer2 = require('./MapLayer');

var _MapLayer3 = _interopRequireDefault(_MapLayer2);

var _leaflet = require('leaflet');

var MarkerClusterGroup = (function (_MapLayer) {
  _inherits(MarkerClusterGroup, _MapLayer);

  function MarkerClusterGroup() {
    _classCallCheck(this, MarkerClusterGroup);

    _get(Object.getPrototypeOf(MarkerClusterGroup.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MarkerClusterGroup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Object.getPrototypeOf(MarkerClusterGroup.prototype), 'componentDidMount', this).call(this);
      (this.props.layerGroup || this.props.map).addLayer(this.leafletElement);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      _get(Object.getPrototypeOf(MarkerClusterGroup.prototype), 'componentWillMount', this).call(this);
      var _props = this.props;
      var map = _props.map;

      var props = _objectWithoutProperties(_props, ['map']);

      this.leafletElement = (0, _leaflet.markerClusterGroup)(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var layerGroup = this.leafletElement;
      var map = this.props.map;
      var children = _react2['default'].Children.map(this.props.children, function (child) {
        return child ? _react2['default'].cloneElement(child, { map: map, layerGroup: layerGroup }) : null;
      });

      return _react2['default'].createElement(
        'div',
        null,
        children
      );
    }
  }]);

  return MarkerClusterGroup;
})(_MapLayer3['default']);

exports['default'] = MarkerClusterGroup;
module.exports = exports['default'];