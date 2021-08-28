---
title: Grid centering
tags: layout,beginner
firstSeen: 2018-03-03T12:13:59+02:00
lastUpdated: 2020-12-30T15:37:37+02:00
---

Horizontally and vertically centers a child element within a parent element using `grid`.

- Use `display: grid` to create a grid layout.
- Use `place-items: center` to center align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties).

```html
<div class="grid-centering">
  <div class="child">Centered content.</div>
</div>
```

```css
.grid-centering {
  display: grid;
  place-items: center;
  height: 100px;
}
```
