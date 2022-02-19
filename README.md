
README.md

# [CSS - The Complete Guide 2022 (incl. Flexbox, Grid & Sass)](https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/)

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

