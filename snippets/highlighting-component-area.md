---
title: Highlighting a component area
tags: visual,beginner
---

To highlight the size of each block, you can use `html *` on the page, especially useful if this is some old project that you decided to adapt for smartphones

- Use a `html *` to apply styles to all nested tags.
- Use a `background: rgba(0, 0, 255, 0.2);` to apply to each tag `background` with `rgb(0, 0, 255)` color and `0.2` opacity.
- Now the deepest element, has the most intense color.

```html
<div class="screen">
  <div class="circle">
    <div class="small-circle" />
  </div>
</div>
```

```css
html * {
  background: rgba(0, 0, 255, 0.2);
}

.screen {
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.small-circle {
  width: 50px;
  height: 50px;
  color: white;
  border-radius: 50%;
}
```

