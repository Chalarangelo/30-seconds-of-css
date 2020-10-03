---
title: Mobile device detection
tags: layout,intermediate
---

With modern mobile device screen sizes, breakpoints are no longer useful for detecting mobile browsers.
However, there are still valid reasons to use a different layout for touchscreen devices.
You can use the `pointer` media query to tell if a device has a high-precision pointing device
(mouse, trackball, touchpad...) or only a touchscreen.

- Use `@media (pointer: coarse)` for touchscreen-only styles.
- Use `@media (pointer: fine)` for desktop-only styles.
- For compatibility with old desktop browsers, place `pointer: coarse` styles after everything else.

```html
<div class="blue-on-mobile">hello world</div>
```

```css
/* Red text in all desktop browsers */
.blue-on-mobile { color: red; }

/* Blue text in all mobile browsers that support the pointer query */
@media (pointer: coarse) {
  .blue-on-mobile { color: blue; }
}
```
