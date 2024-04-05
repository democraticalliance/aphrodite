'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var exports$1 = require('./exports-a2d2dbfb.js');
require('string-hash');
require('asap');

var useImportant = true; // Add !important to all style definitions

var Aphrodite = exports$1.makeExports(useImportant);
var StyleSheet = Aphrodite.StyleSheet,
  StyleSheetServer = Aphrodite.StyleSheetServer,
  StyleSheetTestUtils = Aphrodite.StyleSheetTestUtils,
  css = Aphrodite.css,
  minify = Aphrodite.minify,
  flushToStyleTag = Aphrodite.flushToStyleTag,
  injectAndGetClassName = Aphrodite.injectAndGetClassName,
  defaultSelectorHandlers = Aphrodite.defaultSelectorHandlers,
  reset = Aphrodite.reset,
  resetInjectedStyle = Aphrodite.resetInjectedStyle,
  startBuffering = Aphrodite.startBuffering;

exports.StyleSheet = StyleSheet;
exports.StyleSheetServer = StyleSheetServer;
exports.StyleSheetTestUtils = StyleSheetTestUtils;
exports.css = css;
exports.defaultSelectorHandlers = defaultSelectorHandlers;
exports.flushToStyleTag = flushToStyleTag;
exports.injectAndGetClassName = injectAndGetClassName;
exports.minify = minify;
exports.reset = reset;
exports.resetInjectedStyle = resetInjectedStyle;
exports.startBuffering = startBuffering;
