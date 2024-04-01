import {defaultSelectorHandlers} from './generate';
import makeExports from './exports';
import {flushToStyleTag, injectAndGetClassName, reset, startBuffering } from './inject';

const useImportant = true; // Add !important to all style definitions

const Aphrodite = makeExports(
    useImportant,
    defaultSelectorHandlers
);

const {
    StyleSheet,
    StyleSheetServer,
    StyleSheetTestUtils,
    css,
    minify,
} = Aphrodite;

export {
    StyleSheet,
    StyleSheetServer,
    StyleSheetTestUtils,
    css,
    minify,
    flushToStyleTag,
    injectAndGetClassName,
    reset,
    startBuffering,
    defaultSelectorHandlers,
};
