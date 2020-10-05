---
title: Custom Progress Bar
tags: visual,intermediate
---

Create a Custom Progress bar and control width using Javascript

- Using `::after` pseudo-element to inherit width of element.
- Compute the width of progress bar using Javascript.
- Note: Use inside a container or specify `min-width` in `px`.

```html
<div class="progress-bar"></div>
```

```css
.progress-bar {
  position: relative;
  border-radius: 12.5px;
  height: 8px;
  min-width: 100%;
  width: 80%;
  overflow: hidden;
  background-color: #e0ebff;
  margin-bottom: 6px;
  transition: width 0.2s;
  overflow: hidden;
}
.progress-bar::after {
  display: block;
  width: inherit;
  position: absolute;
  content: "";
  background-color: #2ea44f;
  border-radius: inherit;
  height: inherit;
  top: 0;
  left: 0;
  z-index: 1;
}
```

```js
document.querySelector('.progress-bar').style.width = '60%';
```
