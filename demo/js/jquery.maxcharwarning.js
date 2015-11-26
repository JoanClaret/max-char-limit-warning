/**
 * Characters limit exceeded warning with a simple jQuery plugin
 *
 * @copyright Copyright 2013-2015 Joan claret
 * @license   MIT
 * @author    Joan Claret Teruel <dpam23 at gmail dot com>
 *
 * Licensed under The MIT License (MIT).
 * Copyright (c) Joan Claret Teruel <dpam23 at gmail dot com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

;(function($, document, window, undefined) {

  'use strict';
  
  var maxCharWarning = 

    $.fn.maxCharWarning = function() {

        return this.each(function() {
          var el                 = $(this),
              maxLength             = el.data('max-length'),
              warningContainerClass   = el.data('max-length-warning-container'),
              warningContainer  = $('.'+warningContainerClass),
              maxLengthMessage      = el.data('max-length-warning')
          ;
          el.keyup(function() {
            var length = el.val().length;      
            if (length >= maxLength & warningContainer.is(':empty')){
              warningContainer.html(maxLengthMessage);
              el.addClass('input-error');
            }
            else if (length < maxLength & !(warningContainer.is(':empty'))) {
              warningContainer.html('');
              el.removeClass('input-error');
            }
         });
     });
  };
})(window.jQuery || window.$, document, window);


/**
 * Export as a CommonJS module
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = maxCharWarning;
}