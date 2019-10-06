---
title: Repeat function
tags: layout,beginner
---

The repeat() function creates a repeated number of columns or rows according to specified values in the function.

```html
<div id="repeat-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

```css
#repeat-container {
  display: grid;
  grid-template-columns: repeat(2, 50px);
  grid-template-rows: repeat(2, 50px);
  grid-gap: 2px;
  box-sizing: border-box;
  height: 100px;
  width: 100px;
  background-color: palevioletred;
  padding: 5px;
}

#repeat-container > div {
  background-color: pink;
  padding: 5px;
}
```

#### Explanation

- repeat() keyword can be used in CSS grid properties grid-template-rows & grid-template columns
- repeat(2, 50px) would create a grid with 2, 50 pixel width column tracks.

#### Browser support

- https://caniuse.com/#feat=mdn-css_properties_grid-template-rows_repeat
