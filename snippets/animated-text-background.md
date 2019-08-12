### Animated multiline text

Animated multiline text background

#### HTML

```html
<div class="item">
  <div class="item__title">
    I'm animated mulitline text, just hover me! I'm animated mulitline text, just hover me!
    <div
      class="item__multiline"
      data-title="I'm animated mulitline text, just hover me! I'm animated mulitline text, just hover me!"
    ></div>
  </div>
</div>
```

#### CSS

```css
.item {
  position: relative;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.25;
  z-index: 1;
}
.item__title {
  position: relative;
  padding-bottom: 10px;
  overflow: hidden;
}
.item__multiline {
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transform: translate3d(-100%, 0, 0);
  transition: 0.5s ease;
  z-index: -1;
}
.item__multiline::before {
  content: attr(data-title);
  display: inline;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.25;
  color: transparent;
  box-shadow: 0 30px 0 0 rgba(231, 158, 89, 0.5);
}
.item__title:hover .item__multiline {
  opacity: 1;
  pointer-events: auto;
  transform: translate3d(0, 0, 0);
}
```

#### Demo

#### Explanation

Animate multiline text background

1. Copy the text to the value of the `data-title` attribute to use it in the pseudo-element by `attr(data-title)`
2. `.item__multiline::before` should be `display: inline` to highlight each line
3. `.item__title` with `overflow: hidden` so that the pseudo-element is not visible outside the block with text
4. Make transparent the text color of the pseudo-element
5. Move the pseudo-element on `:hover` and get the animation effect

#### Browser support

- https://caniuse.com/#feat=css-gencontent

<!-- tags: animation -->
