### Floated label

One of most common used pattern is input plus label. Using CSS to create floated label animation is achievable. And actually, it's simple with `:placeholder-shown` property.

#### HTML

```html
<div class="floated-label-container">
  <label for="input" class="input-label">
    <input placeholder="&nbsp;" id="input">
    <span class="label">Label</span>
  </label>
</div>
```

#### CSS

```css
.floated-label-container {
  font-family: Arial, Helvetica, sans-serif;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-label input {
  border: 0;
  border-bottom: 2px solid #c8ccd4;
  padding: 8px 0;
  width: 250px;
  background: #f5f6f9;
}

.input-label input:hover {
  background: #f3f3f3;
}

.input-label input:focus {
  background: none;
  outline: none;
}

.input-label > .label {
  position: absolute;
  margin-top: -32px;
  color: #9e9e9e;
  transition: transform 0.1s ease-out;
}

.input-label > input:not(:placeholder-shown) + .label,
.input-label > input:focus + .label {
  color: grey;
  transform: translate(-4px, -22px) scale(0.75);
}

.input-label > input:focus + .label {
  color: #4b00da;
}
```

#### Demo

#### Explanation

1. `placeholder="&nbsp;"` provide a empty space as placeholder text, the actual text will be the label defined after the `input` element
2. `.floated-label-container` defined the `font-family` and `height` of container and center the `input` element inside container.
3. `.input-label input:hover` defined the hover state of background color.
4. `.input-label input:focus` remove default background and outline when mouse focus in the `input` element.
5. `.input-label > .label` set the absolute position for `label` and `margin-top` is to move the `label` on top of `input` element, which make it looks like the placeholder text. And use `transition: transform .1s ease-out;` to create an ease out animation when `transform` property is changed.
6. `:placeholder-shown` represents the `input`element that is currently displaying placeholder text. And `input:not(:placeholder-shown)` mean the `input` element is not displaying the placeholder text. At that state, change the `color` and `transform` property to new position and size.

#### Browser support

<!-- Use the checkmark or the warning emoji, see the existing snippets. -->

<span class="snippet__support-note">⚠️ Requires prefixes for full support. MS Edge is not supported `:placeholder-shown` property</span>

- https://caniuse.com/#feat=placeholder-shown
- https://caniuse.com/#feat=transforms2d

<!-- tags: interactivity -->
