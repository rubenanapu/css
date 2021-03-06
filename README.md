# [CSS - The Complete Guide 2022 (incl. Flexbox, Grid & Sass)](https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/)


### Rule 1: Mobile first ([320-500px] [(640px=40rem)](https://nekocalc.com/px-to-rem-converter)), only then adapt it to PCs.
### See [mydevice.io](https://www.mydevice.io/#compare-devices).
* Make sure your site looks good from 300px to 500px (most cell phones). Use 320px as base.

* [CSS Reference (attributes and values)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

* [Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

* [Common CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)

* [Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

* Margins:
  * top, right, bottom, left. `selector {margin: 1px 2px 1px 2px;}`
  * top and bottom, right and left. `selector {margin: 1px 2px;}`

* `height: 100%;` doesn't take the whole page. It includes only the padding, border and margin, unless the `100%` is defined for the `html` element and passed down by the child elements. The `width: 100%` applies to the Element in the center, not to padding, border or margin, but we can set `* {box-sizing: border-box};` so that the
width includes *padding and marging* for all elements.

* Display:
  * `inline` does not have padding, marging, etc,
  * `inline-block` mix inline and block, allowing items to be shown in the same line and at the same time have padding, border and margin.

* [Pseudo Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes): a:hover, a:active, and [Pseudo Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) ::first-letter, ::before.

* Properties worth remembering:
  * color
  * background-color
  * display
  * padding
  * border
  * margin
  * width
  * height

* Avoid `!important` as much as you can. This is really `!important`. Also, avoid `:not` pseudo class.

Use [Can I Use](https://caniuse.com/?search=background) website to know which browsers support a certain CSS.

# Positioning

* Choices: **static (the default), absolute, relative, fixed, 'sticky (not widely supported)'**.

* `fixed`: refers to the viewport (visible part of the browser)
* `z-index:` has `auto` as the default value, which is equals to zero (`0`), and it can only change for items that have the `position` property set.
* Adding a badge: add `position:relative` to **parent**, and `position: absolute` to **badge**. E.g: `<div class="parent plan"><h2 class="badge">badge</h2></div>`
* `position: absolute` refers to the first parent that has a `position` set.
* `position: relative` refers to the element itself.
* `overflow: hidden` hides child elements that are moved outside the limits of the parent. It does not have any effect if applied to `html` or `body` elements, unless you apply at the same time to both `html and body`.
* **Stacking Context**: z-index are always applied only inside the parent. If an "uncle" has a z-index of 100, and "parent" has z-index 0, giving a "nephew" a z-index = 200 will not make it show above "uncle", since the parent index is lower than uncle.

# Background

* `background-size: cover; ` (cover is the same as `100% auto`, which is 100% width and auto height). Some parts of the image are not visible.
* `background-size: contain;` makes the image show completely inside the container.
* `background-repeat: no-repeat;` is the most common way of using.
* [background-position: leftValue topValue;](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) is used to define how the excess part of the background image is cropped.
  If `px` is used, the image will be moved. If `%` is used, it defines how the percentage that is outside the container is cropped.
  If `0% 100%` is used, the top of the image is cropped and the bottom is shown. If `0% 0%`, the bottom is dropped and the top is shown, which is the default behavior.

* `background-origin: border-box;` can be used to make the background image be besides the borders, instead of within the borders.
* [background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) must be checked also.
* `vertical-align: top;` can be used if a shadow/border of a container that contains an image is not correctly aligned to the image bottom. The problem is that the image is an inline element and a "space" is added after it. With `vertical-align: top` in the image solves the problem. We could also use: `display: block;` to make the image fit its surrounding container.

* `background: linear-gradient(to top right, green, yellow);` to make a background gradient instead of image, or in addition to images.
* [radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient()) is awesome also, to create circles or ellipses at different size, originating from different position.
* Use [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) to convert images to grayscale, for example.

# Sizes and Units

* rem: root em
* vh: viewport height
* vw: viewport width

* `.backdrop {}` to create that transparent layer behind a modal.
* `margin: auto` only works for block elements with an explicitly assigned width. It's used to centralize blocks.
* Units: pixels (px), percentages (%), rem & em (prefer "rem"), viewport(vh, vw), auto.

# Working with JavaScript and CSS

* `console.dir` shows all properties of what was selected with `document.querySelector('.classname')`
