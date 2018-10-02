### Toggle switch

Creates a toggle switch with CSS only.

#### HTML

```html
<input type="checkbox" id="toggle" class="offscreen" />
<label for="toggle" class="switch"></label>
```

#### CSS

```css
.switch {
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;
  transition: all 0.3s;
}

.switch::after {
  content: ' ';
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: white;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

input[type='checkbox']:checked + .switch::after {
  transform: translateX(20px);
}

input[type='checkbox']:checked + .switch {
  background-color: #7983ff;
}

.offscreen {
  position: absolute;
  left: -9999px;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__css-toggle-switch">
    <input type="checkbox" id="toggle" class="snippet-demo__offscreen" />
    <label for="toggle" class="snippet-demo__switch"></label>
  </div>
</div>

<style>
.snippet-demo__switch {
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;
  transition: all 0.3s;
}

.snippet-demo__switch::after {
  content: " ";
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: white;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

input[type="checkbox"].snippet-demo__offscreen:checked + .switch::after {
  transform: translateX(20px);
}

input[type="checkbox"].snippet-demo__offscreen:checked + .switch {
  background-color: #7983ff;
}

.snippet-demo__offscreen {
  position: absolute;
  left: -9999px;
}
</style>

#### Explanation

1. The `for` attribute in `<label>` and `id` in `<input>` need to be the same so that `<label>` can be associated with the `<input>` element.
2. `.switch::after` defines a pseudo-element in `<label>`.
3. `input[type='checkbox']:checked + .switch::after` update `label` pseudo-element's style when `input` checkbox has `checked` attribute.
4. `transform: translateX(20px)` move pseudo-element to left 20px when `input` checkbox is `checked`.
5. `background-color: #7983ff;` change the background-color when the `input` checkbox is `checked`.
6. `.offscreen` takes the `<input>` element out of the flow of document and position far away from the view, but accessible via keyboard and screen readers.
7. `transition: all` specifies the `<label>`'s `background-color` and the pseudo-element's `transform` property will be transitioned over 0.3 seconds.

#### Browser support

<span class="snippet__support-note">⚠️ Requires prefixes for full support.</span>

* https://caniuse.com/#feat=transforms2d

<!-- tags: visual, interactivity -->
