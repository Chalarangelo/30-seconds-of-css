### <a> No Decoration

Removes the default decoration from an `<a>`-tag.
This is useful when the default highlighting behaviour
shall not be used.

#### HTML

```html
<a href="#">
  I have fancy decorations!
</a>
<a class="no-decoration" href="#">
  I am undecorated!
</a>
```

#### CSS

```css
.no-decoration,
.no-decoration:hover {
  color: inherit;
  text-decoration: none;
}
```

#### Demo

<!-- Leave this blank, the build script will generate the demo for you. -->

#### Explanation

1. Use `color: inherit` to keep the color of the surrounding element
2. Use `text-decoration: none` to disable the default underline
3. The same is applied to the `:hover` state

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=text-decoration
- https://caniuse.com/#feat=css3-colors

<!-- tags: visual, interactivity -->
