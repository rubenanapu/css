
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
