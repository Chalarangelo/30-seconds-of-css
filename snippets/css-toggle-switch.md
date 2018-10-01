### CSS toggle switch

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
  left: 100%;
  transform: translateX(-100%);
  margin-left: -1px;
}

input[type='checkbox']:checked + .switch {
  background-color: #7983ff;
}

.offscreen {
  display: none;
}
```

#### Demo

<div class="snippet-demo">
    <div class="snippet-demo__css-toggle-switch">
        <input type="checkbox" id="toggle" class="offscreen" />
        <label for="toggle" class="switch"></label>
    </div>
</div>

<style>
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

input[type="checkbox"]:checked + .switch::after {
  left: 100%;
  transform: translateX(-100%);
  margin-left: -1px;
}

input[type="checkbox"]:checked + .switch {
  background-color: #7983ff;
}

.offscreen {
  display: none;
}
</style>

#### Explanation

1. `for` attribute in `<label>` and `id` in `<input>` need to be the same so that `<label>` can be associated with `<input>` element
2. `.switch::after` defines a pseudo-element in `<label>` with absolute position.
3. `input[type='checkbox']:checked + .switch::after` update `label` pseudo-element's style when `input` checkbox has `checked` attribute.
4. `left: 100%` move pseudo-element to right as width as `label`
5. `transform: translateX(-100%)` move pseudo-element to left as width as itself
6. `margin-left: -1px`leaving 1px space between `label` end and pseudo-element
7. `background-color: blue;` change background color to blue when pseudo-element in move to right
8. `.offscreen` hide the `<input>` element and it will not take up any physical space in DOM

#### Browser support

<span class="snippet__support-note">⚠️ Requires prefixes for full support.</span>

* https://caniuse.com/#feat=transforms2d

<!-- tags: visual, interactivity -->
