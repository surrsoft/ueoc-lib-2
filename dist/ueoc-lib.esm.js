import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

var UeocSize;

(function (UeocSize) {
  UeocSize["FILL"] = "fill";
  UeocSize["WRAP"] = "wrap";
})(UeocSize || (UeocSize = {}));

var UeocGeometry = /*#__PURE__*/function () {
  function UeocGeometry() {
    this.vWPx = 0;
    this.vHPx = 0;
  } // --- builders


  var _proto = UeocGeometry.prototype;

  _proto.w = function w(wPxOrConst) {
    if (typeof wPxOrConst === 'number') {
      this.vWPx = wPxOrConst;
    } else {
      this.vWS = wPxOrConst;
    }

    return this;
  };

  _proto.h = function h(hPxOrConst) {
    if (typeof hPxOrConst === 'number') {
      this.vHPx = hPxOrConst;
    } else {
      this.vHS = hPxOrConst;
    }

    return this;
  };

  return UeocGeometry;
}();

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var UeocFourSize = /*#__PURE__*/function () {
  function UeocFourSize() {
    this.vTopPx = 0;
    this.vRightPx = 0;
    this.vBottomPx = 0;
    this.vLeftPx = 0;
  }

  var _proto = UeocFourSize.prototype;

  _proto.all = function all(sizePx) {
    this.vTopPx = sizePx;
    this.vRightPx = sizePx;
    this.vBottomPx = sizePx;
    this.vLeftPx = sizePx;
    return this;
  };

  _proto.four = function four(topPx, rightPx, bottomPx, leftPx) {
    this.vTopPx = topPx;
    this.vRightPx = rightPx;
    this.vBottomPx = bottomPx;
    this.vLeftPx = leftPx;
    return this;
  };

  _proto.t = function t(px) {
    this.vTopPx = px;
    return this;
  };

  _proto.r = function r(px) {
    this.vRightPx = px;
    return this;
  };

  _proto.b = function b(px) {
    this.vBottomPx = px;
    return this;
  };

  _proto.l = function l(px) {
    this.vLeftPx = px;
    return this;
  };

  return UeocFourSize;
}();

var UeocPaddings = /*#__PURE__*/function (_UeocFourSize) {
  _inheritsLoose(UeocPaddings, _UeocFourSize);

  function UeocPaddings() {
    return _UeocFourSize.apply(this, arguments) || this;
  }

  return UeocPaddings;
}(UeocFourSize);

var UeocMargins = /*#__PURE__*/function (_UeocFourSize) {
  _inheritsLoose(UeocMargins, _UeocFourSize);

  function UeocMargins() {
    return _UeocFourSize.apply(this, arguments) || this;
  }

  return UeocMargins;
}(UeocFourSize);

var UeocElem = /*#__PURE__*/function () {
  function UeocElem() {
    this.vBgColor = '';
    this.vHide = false;
  }

  var _proto = UeocElem.prototype;

  _proto.fnPaddingsGetAnd = function fnPaddingsGetAnd() {
    if (!this.vPaddings) {
      this.vPaddings = new UeocPaddings();
    }

    return this.vPaddings;
  };

  _proto.fnMarginsGetAnd = function fnMarginsGetAnd() {
    if (!this.vMargins) {
      this.vMargins = new UeocMargins();
    }

    return this.vMargins;
  };

  _proto.fnGeomentryGetAnd = function fnGeomentryGetAnd() {
    if (!this.vGeometry) {
      this.vGeometry = new UeocGeometry();
    }

    return this.vGeometry;
  }
  /**
   * Любой дополнительный CSS
   * @param css
   */
  ;

  _proto.otherCss = function otherCss(css) {
    this.vOtherCss = css;
    return this;
  };

  _proto.geometry = function geometry(_geometry) {
    this.vGeometry = _geometry;
    return this;
  };

  _proto.utW = function utW(px) {
    this.fnGeomentryGetAnd().w(px);
    return this;
  };

  _proto.utH = function utH(px) {
    this.fnGeomentryGetAnd().h(px);
    return this;
  };

  _proto.border = function border(_border) {
    this.vBorder = _border;
    return this;
  };

  _proto.paddings = function paddings(_paddings) {
    this.vPaddings = _paddings;
    return this;
  };

  _proto.key = function key(_key) {
    this.vKey = _key;
    return this;
  };

  _proto.utPaddings = function utPaddings(sizePx) {
    this.fnPaddingsGetAnd().all(sizePx);
    return this;
  };

  _proto.utPaddingsFour = function utPaddingsFour(topPx, rightPx, bottomPx, leftPx) {
    this.fnPaddingsGetAnd().four(topPx, rightPx, bottomPx, leftPx);
    return this;
  };

  _proto.utPaddingT = function utPaddingT(px) {
    this.fnPaddingsGetAnd().t(px);
    return this;
  };

  _proto.utPaddingR = function utPaddingR(px) {
    this.fnPaddingsGetAnd().r(px);
    return this;
  };

  _proto.utPaddingB = function utPaddingB(px) {
    this.fnPaddingsGetAnd().b(px);
    return this;
  };

  _proto.utPaddingL = function utPaddingL(px) {
    this.fnPaddingsGetAnd().l(px);
    return this;
  };

  _proto.margins = function margins(_margins) {
    this.vMargins = _margins;
    return this;
  };

  _proto.utMargins = function utMargins(sizePx) {
    this.fnMarginsGetAnd().all(sizePx);
    return this;
  };

  _proto.utMarginsFour = function utMarginsFour(topPx, rightPx, bottomPx, leftPx) {
    this.fnMarginsGetAnd().four(topPx, rightPx, bottomPx, leftPx);
    return this;
  };

  _proto.utMarginsT = function utMarginsT(px) {
    this.fnMarginsGetAnd().t(px);
    return this;
  };

  _proto.utMarginsR = function utMarginsR(px) {
    this.fnMarginsGetAnd().r(px);
    return this;
  };

  _proto.utMarginsB = function utMarginsB(px) {
    this.fnMarginsGetAnd().b(px);
    return this;
  };

  _proto.utMarginsL = function utMarginsL(px) {
    this.fnMarginsGetAnd().l(px);
    return this;
  };

  _proto.bgColor = function bgColor(color) {
    this.vBgColor = color;
    return this;
  };

  _proto.onClickFn = function onClickFn(_onClickFn) {
    this.vOnClick = _onClickFn;
    return this;
  };

  _proto.hide = function hide(enable) {
    this.vHide = enable;
    return this;
  };

  _proto.nobCssOjAddingSet = function nobCssOjAddingSet(cssOjAdding) {
    this.vCssOjAdding = cssOjAdding;
  } // ---
  ;

  _proto.nobCssOj = function nobCssOj() {
    var _this$vGeometry;

    var cssOj = {
      display: 'inline-flex',
      alignSelf: ((_this$vGeometry = this.vGeometry) == null ? void 0 : _this$vGeometry.vHS) === UeocSize.FILL ? 'stretch' : 'start'
    };

    if (this.vGeometry) {
      if (this.vGeometry.vWPx > 0) {
        cssOj.width = this.vGeometry.vWPx + 'px';
      }

      if (this.vGeometry.vHPx > 0) {
        cssOj.height = this.vGeometry.vHPx + 'px';
      }

      if (this.vGeometry.vWS === UeocSize.FILL) {
        cssOj.flexGrow = 1;
      }
    }

    if (this.vBorder) {
      if (this.vBorder.vThPx > 0) {
        cssOj.borderWidth = this.vBorder.vThPx + 'px';
        cssOj.borderStyle = this.vBorder.vStyle;
        cssOj.borderColor = this.vBorder.vColor;

        if (this.vBorder.vRadius > 0) {
          cssOj.borderRadius = this.vBorder.vRadius + 'px';
        }
      }
    }

    if (this.vPaddings) {
      cssOj.paddingTop = this.vPaddings.vTopPx;
      cssOj.paddingRight = this.vPaddings.vRightPx;
      cssOj.paddingBottom = this.vPaddings.vBottomPx;
      cssOj.paddingLeft = this.vPaddings.vLeftPx;
    }

    if (this.vMargins) {
      cssOj.marginTop = this.vMargins.vTopPx;
      cssOj.marginRight = this.vMargins.vRightPx;
      cssOj.marginBottom = this.vMargins.vBottomPx;
      cssOj.marginLeft = this.vMargins.vLeftPx;
    }

    if (this.vBgColor) {
      cssOj.backgroundColor = this.vBgColor;
    } // ---


    if (this.vCssOjAdding) {
      Object.assign(cssOj, this.vCssOjAdding);
    }

    return cssOj;
  };

  return UeocElem;
}();

function UeocEmpty(props) {
  return React.createElement("div", {
    style: {
      width: props.w || 0,
      height: props.h || 0
    }
  });
}

var UeocAlign;

(function (UeocAlign) {
  UeocAlign["START"] = "start";
  UeocAlign["CENTER"] = "center";
  UeocAlign["END"] = "end";
})(UeocAlign || (UeocAlign = {}));

var UeocAlignS;

(function (UeocAlignS) {
  UeocAlignS["START"] = "start";
  UeocAlignS["CENTER"] = "center";
  UeocAlignS["END"] = "end";
  UeocAlignS["STRETCH"] = "stretch";
})(UeocAlignS || (UeocAlignS = {}));

var UeocAlignSPlus = /*#__PURE__*/function () {
  function UeocAlignSPlus() {}

  UeocAlignSPlus.toCss = function toCss(align) {
    var ret = '';

    switch (align) {
      case UeocAlignS.START:
        ret = 'flex-start';
        break;

      case UeocAlignS.CENTER:
        ret = 'center';
        break;

      case UeocAlignS.END:
        ret = 'flex-end';
        break;

      case UeocAlignS.STRETCH:
        ret = 'stretch';
        break;
    }

    return ret;
  };

  return UeocAlignSPlus;
}();
var UeocAlignPlus = /*#__PURE__*/function () {
  function UeocAlignPlus() {}

  UeocAlignPlus.toCssFormat = function toCssFormat(align) {
    var ret = '';

    switch (align) {
      case UeocAlign.START:
        ret = 'flex-start';
        break;

      case UeocAlign.CENTER:
        ret = 'center';
        break;

      case UeocAlign.END:
        ret = 'flex-end';
        break;
    }

    return ret;
  };

  return UeocAlignPlus;
}();
var UeocOrient;

(function (UeocOrient) {
  UeocOrient["HORIZONTAL"] = "horizontal";
  UeocOrient["VERTICAL"] = "vertical";
})(UeocOrient || (UeocOrient = {}));

var UeocLayFlex = /*#__PURE__*/function (_UeocElem) {
  _inheritsLoose(UeocLayFlex, _UeocElem);

  function UeocLayFlex() {
    var _this;

    _this = _UeocElem.apply(this, arguments) || this;
    _this.vOrientation = UeocOrient.HORIZONTAL;
    _this.vChildsStart = [];
    _this.vChildsStartAlings = [];
    _this.vChildsEnd = [];
    _this.vChildsEndAlings = [];
    _this.vChildBaseAlign = UeocAlign.START;
    return _this;
  }

  var _proto = UeocLayFlex.prototype;

  _proto.horizontal = function horizontal(enable) {
    if (enable === void 0) {
      enable = true;
    }

    if (enable) {
      this.vOrientation = UeocOrient.HORIZONTAL;
    }

    return this;
  };

  _proto.vertical = function vertical(enable) {
    if (enable === void 0) {
      enable = true;
    }

    if (enable) {
      this.vOrientation = UeocOrient.VERTICAL;
    }

    return this;
  };

  _proto.childAddToStart = function childAddToStart(child, align) {
    if (align === void 0) {
      align = UeocAlign.START;
    }

    if (child) {
      this.vChildsStart.push(child);
      this.vChildsStartAlings.push({
        child: child,
        align: align
      });
    }

    return this;
  };

  _proto.childAddToEnd = function childAddToEnd(child, align) {
    if (align === void 0) {
      align = UeocAlign.START;
    }

    if (child) {
      this.vChildsEnd.push(child);
      this.vChildsEndAlings.push({
        child: child,
        align: align
      });
    }

    return this;
  };

  _proto.childBase = function childBase(child, align) {
    if (align === void 0) {
      align = UeocAlign.START;
    }

    if (child) {
      this.vChildBase = child;
      this.vChildBaseAlign = align;
    }

    return this;
  };

  _proto.build = function build() {
    var _this2 = this;

    if (this.vHide) {
      return React.createElement(React.Fragment, null);
    }

    var cssOj = this.nobCssOj();

    if (this.vOtherCss) {
      Object.assign(cssOj, this.vOtherCss);
    }

    if (this.vOrientation === UeocOrient.VERTICAL) {
      cssOj.flexDirection = 'column';
    } // ---


    var classes = makeStyles({
      container: cssOj
    })();

    var fnNx = function fnNx(align, vWS, vHS) {
      if (_this2.vOrientation === UeocOrient.HORIZONTAL) {
        if (vHS === UeocSize.FILL) {
          return 'stretch';
        }
      } else {
        if (vWS === UeocSize.FILL) {
          return 'stretch';
        }
      }

      return UeocAlignPlus.toCssFormat(align);
    };

    var attrs0 = {};

    if (this.vOnClick) {
      // @ts-ignore
      attrs0.onClick = this.vOnClick;
    }

    return React.createElement("div", Object.assign({
      className: classes.container
    }, attrs0), this.vChildsStart.map(function (child, index) {
      var _this2$vChildsStartAl, _child$vGeometry, _child$vGeometry2;

      var cssOjAdding = {
        flexShrink: 0,
        // @ts-ignore
        alignSelf: fnNx((_this2$vChildsStartAl = _this2.vChildsStartAlings.find(function (el) {
          return el.child === child;
        })) == null ? void 0 : _this2$vChildsStartAl.align, (_child$vGeometry = child.vGeometry) == null ? void 0 : _child$vGeometry.vWS, (_child$vGeometry2 = child.vGeometry) == null ? void 0 : _child$vGeometry2.vHS)
      };
      child.nobCssOjAddingSet(cssOjAdding);

      if (!child.vKey) {
        child.vKey = index;
      }

      return child.build();
    }), function () {
      if (_this2.vChildBase) {
        var _this2$vChildBase$vGe, _this2$vChildBase$vGe2;

        var cssOj3 = {
          alignSelf: fnNx(_this2.vChildBaseAlign, (_this2$vChildBase$vGe = _this2.vChildBase.vGeometry) == null ? void 0 : _this2$vChildBase$vGe.vWS, (_this2$vChildBase$vGe2 = _this2.vChildBase.vGeometry) == null ? void 0 : _this2$vChildBase$vGe2.vHS)
        };

        _this2.vChildBase.nobCssOjAddingSet(cssOj3);

        return _this2.vChildBase.build();
      } else {
        return '';
      }
    }(), this.vChildsEnd.map(function (child, index) {
      var _this2$vChildsEndAlin, _child$vGeometry3, _child$vGeometry4;

      child.nobCssOjAddingSet(Object.assign({
        flexShrink: 0
      } // @ts-ignore
      , {
        alignSelf: fnNx((_this2$vChildsEndAlin = _this2.vChildsEndAlings.find(function (el) {
          return el.child === child;
        })) == null ? void 0 : _this2$vChildsEndAlin.align, (_child$vGeometry3 = child.vGeometry) == null ? void 0 : _child$vGeometry3.vWS, (_child$vGeometry4 = child.vGeometry) == null ? void 0 : _child$vGeometry4.vHS)
      }, index === 0 ? _this2.vOrientation === UeocOrient.HORIZONTAL ? {
        marginLeft: 'auto'
      } : {
        marginTop: 'auto'
      } : {}));

      if (!child.vKey) {
        child.vKey = index;
      }

      return child.build();
    }));
  };

  return UeocLayFlex;
}(UeocElem);

var UeocRelPosition;

(function (UeocRelPosition) {
  UeocRelPosition["TOP_LEFT"] = "top_left";
  UeocRelPosition["TOP_CENTER"] = "top_center";
  UeocRelPosition["TOP_RIGHT"] = "top_right";
  UeocRelPosition["BOTTOM_LEFT"] = "bottom_left";
  UeocRelPosition["BOTTOM_CENTER"] = "bottom_center";
  UeocRelPosition["BOTTOM_RIGHT"] = "bottom_right";
  UeocRelPosition["CENTER_LEFT"] = "center_left";
  UeocRelPosition["CENTER_CENTER"] = "center_center";
  UeocRelPosition["CENTER_RIGHT"] = "center_right";
})(UeocRelPosition || (UeocRelPosition = {}));

var UeocElemAndPos = function UeocElemAndPos(child, position) {
  if (position === void 0) {
    position = UeocRelPosition.TOP_LEFT;
  }

  this.child = child;
  this.position = position;
};
var UeocLayRelative = /*#__PURE__*/function (_UeocElem) {
  _inheritsLoose(UeocLayRelative, _UeocElem);

  function UeocLayRelative() {
    var _this;

    _this = _UeocElem.apply(this, arguments) || this;
    _this.vElemAndPosArr = [];
    return _this;
  }

  var _proto = UeocLayRelative.prototype;

  _proto.build = function build() {
    if (this.vHide) {
      return React.createElement(React.Fragment, null);
    }

    var cssOj = this.nobCssOj();

    if (this.vOtherCss) {
      Object.assign(cssOj, this.vOtherCss);
    } // ---


    var classes = makeStyles({
      container: cssOj
    })();

    function tVert(elem) {
      return "calc(-50% - " + (elem.vMargins ? elem.vMargins.vTopPx : 0) + "px)";
    }

    function tHoriz(elem) {
      return "calc(-50% - " + (elem.vMargins ? elem.vMargins.vLeftPx : 0) + "px)";
    } // ---


    var attrs0 = {};

    if (this.vOnClick) {
      // @ts-ignore
      attrs0.onClick = this.vOnClick;
    }

    return React.createElement("div", Object.assign({
      className: classes.container,
      style: {
        position: 'relative'
      }
    }, attrs0), this.vElemAndPosArr.map(function (el) {
      var child = el.child,
          position = el.position;
      var geom = child.vGeometry;
      var cssOj1 = {};

      if (position) {
        cssOj1.position = 'absolute';

        if (geom) {
          if (geom.vHS === UeocSize.FILL && geom.vWS === UeocSize.FILL) {
            cssOj1.top = 0;
            cssOj1.right = 0;
            cssOj1.left = 0;
            cssOj1.bottom = 0;
          } else {
            switch (position) {
              case UeocRelPosition.TOP_LEFT:
                cssOj1.left = 0;
                cssOj1.top = 0;

                if (geom.vHS === UeocSize.FILL) {
                  cssOj1.bottom = 0;
                } else if (geom.vWS === UeocSize.FILL) {
                  cssOj1.right = 0;
                }

                break;

              case UeocRelPosition.TOP_CENTER:
                cssOj1.top = 0;

                if (geom.vHS === UeocSize.FILL) {
                  cssOj1.left = '50%';
                  cssOj1.transform = "translate(" + tHoriz(child) + ", 0)";
                  cssOj1.bottom = 0;
                } else if (geom.vWS === UeocSize.FILL) {
                  cssOj1.left = 0;
                  cssOj1.right = 0;
                } else {
                  cssOj1.left = '50%';
                  cssOj1.transform = "translate(" + tHoriz(child) + ", 0)";
                }

                break;

              case UeocRelPosition.TOP_RIGHT:
                cssOj1.right = 0;
                cssOj1.top = 0;

                if (geom.vHS === UeocSize.FILL) {
                  cssOj1.bottom = 0;
                } else if (geom.vWS === UeocSize.FILL) {
                  cssOj1.left = 0;
                }

                break;

              case UeocRelPosition.BOTTOM_LEFT:
                cssOj1.left = 0;
                cssOj1.bottom = 0;

                if (geom.vHS === UeocSize.FILL) {
                  cssOj1.top = 0;
                } else if (geom.vWS === UeocSize.FILL) {
                  cssOj1.right = 0;
                }

                break;

              case UeocRelPosition.BOTTOM_CENTER:
                cssOj1.bottom = 0;

                if (geom.vHS === UeocSize.FILL) {
                  cssOj1.left = '50%';
                  cssOj1.transform = "translate(" + tHoriz(child) + ", 0)";
                  cssOj1.bottom = 0;
                  cssOj1.top = 0;
                } else if (geom.vWS === UeocSize.FILL) {
                  cssOj1.left = 0;
                  cssOj1.right = 0;
                } else {
                  cssOj1.left = '50%';
                  cssOj1.transform = "translate(" + tHoriz(child) + ", 0)";
                }

                break;

              case UeocRelPosition.BOTTOM_RIGHT:
                cssOj1.right = 0;
                cssOj1.bottom = 0;

                if (geom.vHS === UeocSize.FILL) {
                  cssOj1.top = 0;
                } else if (geom.vWS === UeocSize.FILL) {
                  cssOj1.left = 0;
                }

                break;

              case UeocRelPosition.CENTER_LEFT:
                cssOj1.left = 0;

                if (geom.vHS === UeocSize.FILL) {
                  cssOj1.bottom = 0;
                  cssOj1.top = 0;
                } else if (geom.vWS === UeocSize.FILL) {
                  cssOj1.top = '50%';
                  cssOj1.transform = "translate(0, " + tVert(child) + ")";
                  cssOj1.right = 0;
                } else {
                  cssOj1.top = '50%';
                  cssOj1.transform = "translate(0, " + tVert(child) + ")";
                }

                break;

              case UeocRelPosition.CENTER_CENTER:
                if (geom.vHS === UeocSize.FILL) {
                  cssOj1.left = '50%';
                  cssOj1.transform = "translate(" + tHoriz(child) + ", 0)";
                  cssOj1.bottom = 0;
                  cssOj1.top = 0;
                } else if (geom.vWS === UeocSize.FILL) {
                  cssOj1.left = 0;
                  cssOj1.right = 0;
                  cssOj1.top = '50%';
                  cssOj1.transform = "translate(0, " + tVert(child) + ")";
                } else {
                  cssOj1.left = '50%';
                  cssOj1.top = '50%';
                  cssOj1.transform = "translate(" + tHoriz(child) + ", " + tVert(child) + ")";
                }

                break;

              case UeocRelPosition.CENTER_RIGHT:
                cssOj1.right = 0;

                if (geom.vHS === UeocSize.FILL) {
                  cssOj1.bottom = 0;
                  cssOj1.top = 0;
                } else if (geom.vWS === UeocSize.FILL) {
                  cssOj1.top = '50%';
                  cssOj1.transform = "translate(0, " + tVert(child) + ")";
                  cssOj1.left = 0;
                } else {
                  cssOj1.top = '50%';
                  cssOj1.transform = "translate(0, " + tVert(child) + ")";
                }

                break;
            }
          }
        }
      }

      child.nobCssOjAddingSet(cssOj1); // ---
      // ---

      return child.build();
    }));
  };

  _proto.childAddWithPos = function childAddWithPos(child, position) {
    this.vElemAndPosArr.push(new UeocElemAndPos(child, position));
    return this;
  };

  return UeocLayRelative;
}(UeocElem);

var UeocTextStyle = /*#__PURE__*/function () {
  function UeocTextStyle() {
    this.vColor = '';
    this.vBgColor = '';
    this.vSizePx = 0;
    this.vIsBold = false;
    this.vIsItalic = false;
    this.vIsUnderline = false;
  }

  var _proto = UeocTextStyle.prototype;

  _proto.color = function color(_color) {
    this.vColor = _color;
    return this;
  };

  _proto.bgColor = function bgColor(color) {
    this.vBgColor = color;
    return this;
  };

  _proto.size = function size(px) {
    this.vSizePx = px;
    return this;
  };

  _proto.bold = function bold(enable) {
    if (enable === void 0) {
      enable = true;
    }

    if (enable) {
      this.vIsBold = true;
    }

    return this;
  };

  _proto.italic = function italic(enable) {
    if (enable === void 0) {
      enable = true;
    }

    if (enable) {
      this.vIsItalic = true;
    }

    return this;
  };

  _proto.underline = function underline(enable) {
    if (enable === void 0) {
      enable = true;
    }

    if (enable) {
      this.vIsUnderline = true;
    }

    return this;
  };

  return UeocTextStyle;
}();

var UeocAlignCls = /*#__PURE__*/function () {
  function UeocAlignCls() {
    this.vHorizontaly = UeocAlign.START;
    this.vVerticaly = UeocAlign.START;
  }

  var _proto = UeocAlignCls.prototype;

  _proto.h = function h(align) {
    this.vHorizontaly = align;
    return this;
  };

  _proto.v = function v(align) {
    this.vVerticaly = align;
    return this;
  };

  return UeocAlignCls;
}();

var UeocTextElem = /*#__PURE__*/function (_UeocElem) {
  _inheritsLoose(UeocTextElem, _UeocElem);

  function UeocTextElem() {
    var _this;

    _this = _UeocElem.apply(this, arguments) || this;
    _this.vText = '';
    _this.vTextAlign = new UeocAlignCls().h(UeocAlign.CENTER).v(UeocAlign.CENTER);

    _this.fnTextStyleGetAnd = function () {
      if (!_this.vTextStyle) {
        _this.vTextStyle = new UeocTextStyle();
      }

      return _this.vTextStyle;
    };

    return _this;
  }

  var _proto = UeocTextElem.prototype;

  _proto.text = function text(_text) {
    this.vText = _text;
    return this;
  };

  _proto.textStyle = function textStyle(_textStyle) {
    this.vTextStyle = _textStyle;
    return this;
  };

  _proto.utColor = function utColor(color) {
    this.fnTextStyleGetAnd().vColor = color;
    return this;
  };

  _proto.utTextSize = function utTextSize(sizePx) {
    this.fnTextStyleGetAnd().vSizePx = sizePx;
    return this;
  };

  _proto.utBold = function utBold(enable) {
    this.fnTextStyleGetAnd().bold(enable);
    return this;
  };

  _proto.utItalic = function utItalic(enable) {
    this.fnTextStyleGetAnd().italic(enable);
    return this;
  };

  _proto.utUnderline = function utUnderline(enable) {
    this.fnTextStyleGetAnd().underline(enable);
    return this;
  };

  _proto.textAlign = function textAlign(align) {
    this.vTextAlign = align;
    return this;
  };

  _proto.build = function build() {
    var _this$vTextAlign, _this$vTextAlign2;

    if (this.vHide) {
      return React.createElement(React.Fragment, null);
    }

    var cssOj = this.nobCssOj();

    if (this.vOtherCss) {
      Object.assign(cssOj, this.vOtherCss);
    } // ---


    var tsx = this.vTextStyle;

    if (tsx) {
      if (tsx.vColor) {
        cssOj.color = tsx.vColor;
      }

      if (tsx.vBgColor) {
        cssOj.backgroundColor = tsx.vBgColor;
      }

      if (tsx.vSizePx) {
        cssOj.fontSize = tsx.vSizePx;
      }

      if (tsx.vIsBold) {
        cssOj.fontWeight = 'bold';
      }

      if (tsx.vIsItalic) {
        cssOj.fontStyle = 'italic';
      }

      if (tsx.vIsUnderline) {
        cssOj.textDecoration = 'underline';
      }
    }

    switch ((_this$vTextAlign = this.vTextAlign) == null ? void 0 : _this$vTextAlign.vHorizontaly) {
      case UeocAlign.START:
        cssOj.justifyContent = 'flex-start';
        break;

      case UeocAlign.CENTER:
        cssOj.justifyContent = 'center';
        break;

      case UeocAlign.END:
        cssOj.justifyContent = 'flex-end';
        break;
    }

    switch ((_this$vTextAlign2 = this.vTextAlign) == null ? void 0 : _this$vTextAlign2.vVerticaly) {
      case UeocAlign.START:
        cssOj.alignItems = 'flex-start';
        break;

      case UeocAlign.CENTER:
        cssOj.alignItems = 'center';
        break;

      case UeocAlign.END:
        cssOj.alignItems = 'flex-end';
        break;
    } // ---


    var classes = makeStyles({
      container: cssOj
    })(); // ---

    var attrs = this.vKey ? {
      key: this.vKey
    } : {};

    if (this.vOnClick) {
      // @ts-ignore
      attrs.onClick = this.vOnClick;
    }

    return React.createElement("div", Object.assign({}, attrs, {
      className: classes.container
    }), this.vText);
  };

  return UeocTextElem;
}(UeocElem);

var UeocWrap = /*#__PURE__*/function (_UeocElem) {
  _inheritsLoose(UeocWrap, _UeocElem);

  function UeocWrap() {
    return _UeocElem.apply(this, arguments) || this;
  }

  var _proto = UeocWrap.prototype;

  _proto.child = function child(elem) {
    this.vChild = elem;
    return this;
  };

  _proto.build = function build() {
    if (this.vHide) {
      return React.createElement(React.Fragment, null);
    }

    if (this.vChild) {
      var cssOj = this.nobCssOj();

      if (this.vOtherCss) {
        Object.assign(cssOj, this.vOtherCss);
      }

      var classes = makeStyles({
        container: cssOj
      })();
      return React.createElement("div", {
        className: classes.container
      }, this.vChild);
    }

    return React.createElement(React.Fragment, null);
  };

  return UeocWrap;
}(UeocElem);

var UeocBorder = /*#__PURE__*/function () {
  function UeocBorder() {
    this.vThPx = 0;
    this.vStyle = 'solid';
    this.vColor = '#000000';
    this.vRadius = 0;
  }

  var _proto = UeocBorder.prototype;

  _proto.th = function th(borderThPx) {
    this.vThPx = borderThPx;
    return this;
  };

  _proto.style = function style(borderStyle) {
    this.vStyle = borderStyle;
    return this;
  };

  _proto.color = function color(_color) {
    this.vColor = _color;
    return this;
  };

  _proto.radius = function radius(raduis) {
    this.vRadius = raduis;
    return this;
  };

  return UeocBorder;
}();

export { UeocAlign, UeocAlignCls, UeocAlignPlus, UeocAlignS, UeocAlignSPlus, UeocBorder, UeocElem, UeocEmpty, UeocGeometry, UeocLayFlex, UeocLayRelative, UeocMargins, UeocOrient, UeocPaddings, UeocRelPosition, UeocSize, UeocTextElem, UeocTextStyle, UeocWrap };
//# sourceMappingURL=ueoc-lib.esm.js.map
