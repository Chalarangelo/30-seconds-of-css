---
title: Pentagon Loader
tags: Animation, Intermediate
---

# Displays a loader animation with pentagon shape, fully CSS-generated.

```html
<div class="pentagon-loader">
    <div class="top-bars"></div>
    <div class="side-bars"></div>
</div>
```

```css
.pentagon-loader {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  animation-name: rotate_pentagon;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  --bgColor: #444;
  --lineweight: 5px;
}
.pentagon-loader:before, .pentagon-loader .top-bars:before, .pentagon-loader .top-bars:after, .pentagon-loader .side-bars:before, .pentagon-loader .side-bars:after {
  content: "";
  display: block;
  position: absolute;
  background-color: var(--bgColor);
}
.pentagon-loader:before {
  left: 50%;
  transform: translateX(-50%);
  bottom: -18%;
}
.pentagon-loader .top-bars:before, .pentagon-loader .top-bars:after, .pentagon-loader:before {
  height: var(--lineweight);
  width: 92%;
}
.pentagon-loader .top-bars:before {
  left: -33%;
  transform: rotate(-36deg);
}
.pentagon-loader .top-bars:after {
  right: -33%;
  transform: rotate(36deg);
}
.pentagon-loader .side-bars:before, .pentagon-loader .side-bars:after {
  width: var(--lineweight);
  height: 95%;
  bottom: -20%;
}
.pentagon-loader .side-bars:before {
  left: -10%;
  transform: rotate(-18deg);
}
.pentagon-loader .side-bars:after {
  right: -10%;
  transform: rotate(18deg);
}
@keyframes rotate_pentagon {
  0% {
    background-color: transparent;
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### Explanation

- Use a `.pentagon-loader` container `div` which is the element that manages the rotation and contains the bottom bar.
- Note that you can modify the `width` and `height` properties of `pentagon-loader` to change the size of the shape.
- Also you can change the bar color with the `--bgColor` property in `pentagon-loader`.
- By last change the width of the bars using the `--lineWeight` property in `pentagon-loader`.
- The containers entitled `top-bars` and `side-bars` contain the top and side bars respectively.
- Change `transition all 0.5s` in `pentagon-loader` if you want the animation to be faster or slower.


#### Browser support

- https://caniuse.com/#feat=mdn-css_selectors_before
- https://caniuse.com/#feat=mdn-css_selectors_after
- https://caniuse.com/#feat=css-transitions
- https://caniuse.com/#feat=css-variables