/**
 * Polyfill stable language features. These imports will be optimized by `@babel/preset-env`.
 *
 * See: https://github.com/zloirock/core-js#babel
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
library.add(faCalendarAlt);
