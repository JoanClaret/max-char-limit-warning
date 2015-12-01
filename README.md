
![Plugin preview](http://joanclaret.github.io/host/max-char-limit-warning.png)

Maximum Characters limit exceeded warning
========================================
Get a warning when the maximum char limit has been exceeded with a simple jQuery plugin

[![Join the chat at https://gitter.im/JoanClaret/max-char-limit-warning](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JoanClaret/max-char-limit-warning?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

* Only 1 js file
* < 1Kb minified (495 bytes)
* Easy to implement
* Works with inputs, textareas.

Online demo
-----------

[Visit codepen](http://codepen.io/joanclaret/pen/XmwLVP).


Installation
-----------

### 1. Grab a copy of the plugin

Using bower

```bash
bower install max-char-limit-warning --save -dev
```

Using npm

```bash
npm install max-char-limit-warning --save -dev
```

or [download the plugin](https://github.com/JoanClaret/max-char-limit-warning/archive/master.zip) from GitHub


### 2. Load the required javascript files


Load them in the html

```html
<!-- jQuery library (served from Google) -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<!-- jcSlider Javascript file -->
<script src="jquery.maxcharwarning.min.js"></script>
```

or use Browserify

```javascript
require('maxCharWarning');
```


### 3. Create the HTML markup

```html
    <input 
           class ="js-max-char-warning" 
           placeholder="Your name" 
           type="text" 
           data-max-length-warning="limit exceeded" 
           data-max-length="10" 
           data-max-length-warning-container="name"
    /> 
    <span class="name"></span><!-- Display warning message here -->
```

### 4. Initialize the plugin

Default initialization

```javascript
<script type="text/javascript">
    $(document).ready(function(){
        $('.js-max-char-warning').maxCharWarning();
    });
</script>
```


### Follow the repository
★ Star and watch [this repo](https://github.com/JoanClaret/max-char-limit-warning) in order to stay updated with news about this plugin


### Other useful  plugins
* [jcSlider](http://joanclaret.github.io/jcSlider): A responsive slider jQuery plugin with CSS animations 
* [html5 canvas animation](http://joanclaret.github.io/html5-canvas-animation): 3D lines animation with three.js 
* [slide and swipe menu](http://joanclaret.github.io/slide-and-swipe-menu): A sliding swipe menu that works with touchSwipe library. 
* [jquery dynamic max height](http://joanclaret.github.io/jquery-dynamic-max-height) : Dynamic max height plugin for jQuery with CSS animation


License
-------

    The MIT License (MIT)

    Copyright (c) 2015 Joan Claret

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
