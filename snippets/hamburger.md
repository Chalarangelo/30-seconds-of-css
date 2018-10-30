### Hamburger menu

Creates a hamburger menu with CSS.

#### HTML

```html
<button class="hamburger"></button>
```

#### CSS

```css
.hamburger {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 30px;
  height: 20px;
  background-image: linear-gradient(
    #222 20%,
    transparent 20%,
    transparent 40%,
    #222 40%,
    #222 60%,
    transparent 60%,
    transparent 80%,
    #222 80%
  );
}
```

#### Demo

#### Explanation

1. `background-image: linear-gradient()` draw the lines. Defining the intervals, the color transition are not progressive.

2. `background-color: transparent`, `border: none` and `padding: 0` reset the `button` default style.

3. `cursor: pointer` change the mouse cursor with a hand in desktop environment

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=css-gradients

<!-- tags: visual -->
