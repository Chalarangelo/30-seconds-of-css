---
title: Triangle Loader
tags: Animation, Intermediate
---

# Displays an animated triangle shaped loader fully CSS-generated.

```html
<div class="triangle-loader"></div>
```

```css
:root {
  --triangle-loader-color: #56e3fc;
  --triangle-loader-width: 6em;
  --triangle-loader-height: 10em;
}
.triangle-loader {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 var(--triangle-loader-width) var(--triangle-loader-height) var(--triangle-loader-width);
  border-color: transparent transparent var(--triangle-loader-color) transparent;
  animation-timing-function: cubic-bezier(0.8, 1.98, 0.43, 0.59);
  animation-name: animate_triangle;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 50% 0;
}
@keyframes animate_triangle {
  25% {
    transform: scale(0.4, 0.6) rotate(-25deg) translateY(3em);
  }
  75% {
    transform: scale(0.4, 0.8) rotate(25deg) translateY(3em);
  }
}
```

#### Explanation

- Use a div container with the class `triangle-loader`.
- Change the color of the loader by changing the property `--triangle-loader-color`.
- Change the size of the loader by changing the properties `--triangle-loader-width` and `--triangle-loader-height`.
- Change the animation values with the properties `animation`.


#### Browser support

- https://caniuse.com/#feat=mdn-api_csskeyframesrule
- https://caniuse.com/#feat=css-transitions
- https://caniuse.com/#feat=css-variables
- https://caniuse.com/#feat=mdn-css_types_timing-function_cubic-bezier