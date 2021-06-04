---
title: Rounded rectangle trick
tags: visual,beginner
---

Creates a proper rounded rectangle.

- Use `border-radius: 100vh;` to create 100% rounded rectangle.
- For 100% rounded rectangle `vh` unit is best. You can also do it with `px` or other unit but that time unit value depends on width and height.

```html
<div class="rounded-rect"></div>
```

```css
.rounded-rect {
  background-color: #3f4de4;
  width: 200px;
  height: 100px;
  border-radius: 100vh;
}
```
