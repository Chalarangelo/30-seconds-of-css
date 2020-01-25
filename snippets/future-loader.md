---
title: Future Loader
tags: Animation, Intermediate
---

# Displays a square shaped loader, with blured bar tha enters in it, fully CSS-generated.

```html
<div class="future-loader">
    <div class="square"></div>
</div>
```

```css
.future-loader {
  --loader-color: #27bad4;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  position: relative;
}
.future-loader:before, .future-loader:after {
  content: "";
  position: absolute;
  width: 200%;
  height: 0.2em;
  border-radius: 0.1em;
  background-color: var(--loader-color);
  top: 50%;
  transform: translateY(-50%);
  z-index: -2;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.4, 0.62, 0.57, 0.98);
  box-shadow: 0 0 3px var(--loader-color);
}
.future-loader:before {
  animation-name: move_before;
}
.future-loader:after {
  animation-name: move_after;
}
.future-loader .square {
  position: absolute;
  box-shadow: 0 0 5px var(--loader-color);
  width: 400%;
  height: 400%;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  animation-name: rotate_square;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  background-color: #fff;
  z-index: -1;
}
@keyframes rotate_square {
  25% {
    transform: translate(-50%, 50%) rotate(90deg);
    box-shadow: 0 0 2px var(--loader-color);
  }
  50% {
    transform: translate(-50%, 50%) rotate(180deg) scale(1.25);
    box-shadow: 0 0 5px var(--loader-color);
  }
  75% {
    transform: translate(-50%, 50%) rotate(270deg);
    box-shadow: 0 0 5px 2px var(--loader-color);
  }
  100% {
    transform: translate(-50%, 50%) rotate(360deg) scale(1);
    box-shadow: 0 0 5px var(--loader-color);
  }
}
@keyframes move_before {
  0%, 70% {
    opacity: 0;
    right: 800%;
  }
  100% {
    opacity: 1;
    right: 0;
  }
}
@keyframes move_after {
  0%, 70% {
    opacity: 0;
    left: 800%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
```

#### Explanation

- Use a div container with the class `future-loader` and set another div with the class `square`.
- Change the color of the shadows and the bars by changing the property `--loader-color`.
- Change the animation values with the properties `animation`.


#### Browser support

- https://caniuse.com/#feat=mdn-api_csskeyframesrule
- https://caniuse.com/#feat=css-transitions
- https://caniuse.com/#feat=css-variables